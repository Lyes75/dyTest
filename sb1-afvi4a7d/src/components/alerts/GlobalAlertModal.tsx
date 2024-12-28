import React from 'react';
import { X } from 'lucide-react';
import { opportunities } from '../../data/opportunities';
import { stakingOpportunities } from '../../data/stakingOpportunities';
import { AlertConfigurationForm } from './AlertConfigurationForm';

interface GlobalAlertModalProps {
  onClose: () => void;
}

export function GlobalAlertModal({ onClose }: GlobalAlertModalProps) {
  const allPools = [...opportunities, ...stakingOpportunities];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-900">Configure Global Alerts</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mb-4">
          <label htmlFor="pool-select" className="block text-sm font-medium text-gray-700">
            Select Pool
          </label>
          <select
            id="pool-select"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            {allPools.map((pool) => (
              <option key={pool.id} value={pool.id}>
                {pool.protocol} - {pool.token}
              </option>
            ))}
          </select>
        </div>

        <AlertConfigurationForm
          poolId={allPools[0].id}
          onConfigured={onClose}
        />
      </div>
    </div>
  );
}