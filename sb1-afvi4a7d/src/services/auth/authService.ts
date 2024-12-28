import { supabase } from '../../config/env';
import { EmailService } from '../email/emailService';

export class AuthService {
  private static instance: AuthService;
  private emailService: EmailService;

  private constructor() {
    this.emailService = EmailService.getInstance();
  }

  static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  async signInWithEmail(email: string): Promise<{ success: boolean; error?: string }> {
    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
          data: {
            redirectPath: window.location.pathname,
          },
        },
      });

      if (error) throw error;

      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to send login email'
      };
    }
  }

  async handleAuthRedirect(): Promise<{ success: boolean; redirectPath?: string }> {
    try {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (error) throw error;

      if (session?.user) {
        const redirectPath = session.user.user_metadata.redirectPath || '/';
        return { success: true, redirectPath };
      }

      return { success: false };
    } catch (error) {
      console.error('Auth redirect error:', error);
      return { success: false };
    }
  }

  async signOut(): Promise<void> {
    await supabase.auth.signOut();
  }
}