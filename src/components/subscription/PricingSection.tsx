import React, { useState } from 'react';
import { PricingCard } from './PricingCard';
import { UpgradeModal } from './UpgradeModal';
import { subscriptionPlans } from '../../data/subscriptionPlans';
import { SubscriptionTier } from '../../types/subscription';

interface PricingSectionProps {
  currentTier: SubscriptionTier;
  onUpgrade: (tier: SubscriptionTier) => void;
}

export function PricingSection({ currentTier, onUpgrade }: PricingSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<SubscriptionTier>(SubscriptionTier.FREE);

  const handleUpgradeClick = (tier: SubscriptionTier) => {
    setSelectedTier(tier);
    setIsModalOpen(true);
  };

  const handleConfirmUpgrade = (tier: SubscriptionTier) => {
    onUpgrade(tier);
    setIsModalOpen(false);
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-lg text-gray-600">
            Get more insights with our premium features
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {subscriptionPlans.map((plan) => (
            <PricingCard
              key={plan.tier}
              plan={plan}
              currentTier={currentTier}
              onUpgrade={handleUpgradeClick}
            />
          ))}
        </div>

        <UpgradeModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onConfirm={handleConfirmUpgrade}
          selectedTier={selectedTier}
        />
      </div>
    </div>
  );
}