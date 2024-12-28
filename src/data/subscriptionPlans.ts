import { SubscriptionPlan, SubscriptionTier } from '../types/subscription';

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    tier: SubscriptionTier.FREE,
    name: 'Free',
    price: 0,
    currency: 'EUR',
    features: [
      'Access to top 5 yield opportunities',
      'Basic risk scores',
      'Daily yield updates',
      'Basic email alerts'
    ],
    limits: {
      opportunities: 5,
      alerts: 2,
      historicalData: 7
    }
  },
  {
    tier: SubscriptionTier.PRO,
    name: 'Pro',
    price: 10,
    currency: 'EUR',
    features: [
      'Access to all yield opportunities',
      'Detailed risk analysis',
      'Real-time updates',
      'Custom alert rules',
      '30-day historical data',
      'Yield projections',
      'Email and push notifications'
    ],
    limits: {
      opportunities: -1, // unlimited
      alerts: 10,
      historicalData: 30
    }
  },
  {
    tier: SubscriptionTier.EXPERT,
    name: 'Expert',
    price: 50,
    currency: 'EUR',
    features: [
      'Everything in Pro',
      'Advanced analytics dashboard',
      'Personalized recommendations',
      'Priority support',
      'API access',
      'Unlimited alerts',
      '90-day historical data',
      'Portfolio optimization tools'
    ],
    limits: {
      opportunities: -1,
      alerts: -1,
      historicalData: 90
    }
  }
];