import React from 'react';
import { Check } from 'lucide-react';
import { SubscriptionPlan, SubscriptionTier } from '../../types/subscription';

interface PricingCardProps {
  plan: SubscriptionPlan;
  currentTier: SubscriptionTier;
  onUpgrade: (tier: SubscriptionTier) => void;
}

export function PricingCard({ plan, currentTier, onUpgrade }: PricingCardProps) {
  const isCurrentPlan = currentTier === plan.tier;
  const isFree = plan.tier === SubscriptionTier.FREE;

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${
      isCurrentPlan ? 'ring-2 ring-indigo-500' : ''
    }`}>
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
        <div className="mt-4">
          <span className="text-4xl font-bold">
            {plan.price === 0 ? 'Free' : `€${plan.price}`}
          </span>
          {plan.price > 0 && <span className="text-gray-500">/month</span>}
        </div>
      </div>

      <ul className="mt-6 space-y-4">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={() => onUpgrade(plan.tier)}
        disabled={isCurrentPlan}
        className={`mt-8 w-full px-4 py-2 rounded-lg font-medium ${
          isCurrentPlan
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : isFree
            ? 'bg-gray-800 text-white hover:bg-gray-700'
            : 'bg-indigo-600 text-white hover:bg-indigo-500'
        }`}
      >
        {isCurrentPlan ? 'Current Plan' : isFree ? 'Get Started' : 'Upgrade Now'}
      </button>
    </div>
  );
}