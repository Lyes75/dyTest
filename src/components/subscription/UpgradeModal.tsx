import React from 'react';
import { X } from 'lucide-react';
import { SubscriptionTier } from '../../types/subscription';
import { subscriptionPlans } from '../../data/subscriptionPlans';

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (tier: SubscriptionTier) => void;
  selectedTier: SubscriptionTier;
}

export function UpgradeModal({ isOpen, onClose, onConfirm, selectedTier }: UpgradeModalProps) {
  if (!isOpen) return null;

  const plan = subscriptionPlans.find(p => p.tier === selectedTier);
  if (!plan) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Upgrade to {plan.name}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="mb-6">
          <p className="text-gray-600 mb-4">
            You're about to upgrade to our {plan.name} plan for €{plan.price}/month.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">You'll get access to:</h4>
            <ul className="space-y-2">
              {plan.features.map((feature, index) => (
                <li key={index} className="text-sm text-gray-600">• {feature}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex space-x-4">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={() => onConfirm(selectedTier)}
            className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500"
          >
            Confirm Upgrade
          </button>
        </div>
      </div>
    </div>
  );
}