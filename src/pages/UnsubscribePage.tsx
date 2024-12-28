import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { EmailService } from '../services/email/emailService';

export function UnsubscribePage() {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<'processing' | 'success' | 'error'>('processing');
  const email = searchParams.get('email');

  useEffect(() => {
    const unsubscribe = async () => {
      if (!email) {
        setStatus('error');
        return;
      }

      try {
        await EmailService.getInstance().unsubscribe(email);
        setStatus('success');
      } catch (error) {
        setStatus('error');
      }
    };

    unsubscribe();
  }, [email]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Email Unsubscribe
          </h2>
          
          {status === 'processing' && (
            <div className="mt-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto"></div>
              <p className="mt-2 text-gray-600">Processing your request...</p>
            </div>
          )}

          {status === 'success' && (
            <div className="mt-4">
              <div className="text-green-600 text-xl mb-4">✓</div>
              <p className="text-gray-900">You have been successfully unsubscribed.</p>
              <p className="mt-2 text-gray-600">
                You will no longer receive email alerts from DeFiYield.
              </p>
            </div>
          )}

          {status === 'error' && (
            <div className="mt-4">
              <div className="text-red-600 text-xl mb-4">✕</div>
              <p className="text-gray-900">Unable to process your request.</p>
              <p className="mt-2 text-gray-600">
                Please try again later or contact support if the problem persists.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}