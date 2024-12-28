export enum SubscriptionTier {
  FREE = 'FREE',
  PRO = 'PRO',
  EXPERT = 'EXPERT'
}

export interface SubscriptionPlan {
  tier: SubscriptionTier;
  name: string;
  price: number;
  currency: string;
  features: string[];
  limits: {
    opportunities: number;
    alerts: number;
    historicalData: number; // days
  };
}

export interface UserSubscription {
  tier: SubscriptionTier;
  expiresAt: Date;
}