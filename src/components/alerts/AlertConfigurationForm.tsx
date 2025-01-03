import React, { useState } from 'react';
import { AlertThresholdConfig } from '../../services/email/types';
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import { EmailService } from '../../services/email/emailService';

interface AlertConfigurationFormProps {
  poolId: string;
  onConfigured: () => void;
}

export function AlertConfigurationForm({ poolId, onConfigured }: AlertConfigurationFormProps) {
  const [email, setEmail] = useState('');
  const [metric, setMetric] = useState<'apy' | 'tvl'>('apy');
  const [threshold, setThreshold] = useState(5);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const supabase = useSupabaseClient();
  const user = useUser();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // First, sign in or sign up the user
      const { data: authData, error: authError } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `${window.location.origin}`,
        },
      });

      if (authError) throw authError;

      // If we get here, the magic link has been sent
      setError(null);
      alert('Please check your email for the login link to complete alert setup.');
      onConfigured();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to configure alert');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleConfigureAlert = async () => {
    if (!user) return;

    try {
      const emailService = EmailService.getInstance();
      const subscriber = await emailService.subscribeToAlerts(email, user.id);
      
      if (subscriber) {
        await emailService.configureAlert(subscriber.id, {
          id: '', // Will be generated by Supabase
          subscriber_id: subscriber.id,
          pool_id: poolId,
          metric,
          threshold,
          created_at: new Date().toISOString()
        });
      }
      onConfigured();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to configure alert');
    }
  };

  // If user is already authenticated and matches the email, configure the alert
  React.useEffect(() => {
    if (user && user.email === email && !isSubmitting) {
      handleConfigureAlert();
    }
  }, [user, email]);

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
        />
      </div>

      <div>
        <label htmlFor="metric" className="block text-sm font-medium text-gray-700">
          Metric to Monitor
        </label>
        <select
          id="metric"
          value={metric}
          onChange={(e) => setMetric(e.target.value as 'apy' | 'tvl')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
          <option value="apy">APY</option>
          <option value="tvl">TVL</option>
        </select>
      </div>

      <div>
        <label htmlFor="threshold" className="block text-sm font-medium text-gray-700">
          Change Threshold (%)
        </label>
        <input
          type="number"
          id="threshold"
          value={threshold}
          onChange={(e) => setThreshold(Number(e.target.value))}
          min="0.1"
          step="0.1"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
        />
      </div>

      {error && (
        <div className="text-sm text-red-600">{error}</div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
          isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {isSubmitting ? 'Setting up...' : 'Set Up Alert'}
      </button>
    </form>
  );
}