import { supabase } from '../../config/env';
import { EmailSubscriber, AlertConfiguration, MetricChange } from './types';
import { config } from '../../config/env';
import { generateConfirmationEmail } from './templates';

export class EmailService {
  private static instance: EmailService;

  private constructor() {}

  static getInstance(): EmailService {
    if (!EmailService.instance) {
      EmailService.instance = new EmailService();
    }
    return EmailService.instance;
  }

  async subscribeToAlerts(email: string, userId: string): Promise<EmailSubscriber | null> {
    // Check if already subscribed
    const { data: existing } = await supabase
      .from('email_subscribers')
      .select()
      .eq('email', email)
      .single();

    if (existing) return existing;

    // Create new subscription
    const { data: subscriber, error } = await supabase
      .from('email_subscribers')
      .insert([{ email, user_id: userId }])
      .select()
      .single();

    if (error) throw error;

    // Get magic link URL
    const { data, error: signInError } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}`,
      },
    });

    if (signInError) throw signInError;

    // Send confirmation email with magic link
    if (subscriber && data) {
      await this.sendEmail(
        email,
        'Welcome to DeFiYield.io Alerts!',
        generateConfirmationEmail(email, data.signInURL || '')
      );
    }

    return subscriber;
  }

  async configureAlert(subscriberId: string, config: AlertConfiguration): Promise<void> {
    const { error } = await supabase
      .from('alert_configurations')
      .insert([{
        subscriber_id: subscriberId,
        pool_id: config.pool_id,
        metric: config.metric,
        threshold: config.threshold
      }]);

    if (error) throw error;
  }

  async unsubscribe(email: string): Promise<void> {
    const { error: unsubError } = await supabase
      .from('unsubscribed_users')
      .insert([{ email }]);

    if (unsubError) throw unsubError;

    // Delete from subscribers and their alert configurations
    const { data: subscriber } = await supabase
      .from('email_subscribers')
      .select('id')
      .eq('email', email)
      .single();

    if (subscriber) {
      // Delete alert configurations first (due to foreign key constraint)
      await supabase
        .from('alert_configurations')
        .delete()
        .eq('subscriber_id', subscriber.id);

      // Then delete the subscriber
      await supabase
        .from('email_subscribers')
        .delete()
        .eq('id', subscriber.id);
    }
  }

  private async sendEmail(to: string, subject: string, html: string): Promise<void> {
    // In production, this would use SendGrid or similar
    // For now, we'll just log the email
    console.log('Sending email:', {
      to,
      subject,
      html
    });
  }
}