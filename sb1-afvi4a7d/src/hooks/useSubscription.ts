import { useState, useEffect } from 'react';
import { SubscriptionTier, UserSubscription } from '../types/subscription';

export function useSubscription() {
  const [subscription, setSubscription] = useState<UserSubscription>({
    tier: SubscriptionTier.FREE,
    expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
  });

  const upgrade = async (tier: SubscriptionTier) => {
    // TODO: Integrate with Stripe for actual payment processing
    console.log(`Upgrading to ${tier}`);
    
    // Mock successful upgrade
    setSubscription({
      tier,
      expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    });
  };

  return {
    subscription,
    upgrade,
  };
}