import React, { useState } from 'react';
import { Bell } from 'lucide-react';
import { AlertConfigurationForm } from './AlertConfigurationForm';

interface AlertButtonProps {
  poolId: string;
}

export function AlertButton({ poolId }: AlertButtonProps) {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowForm(true)}
        className="text-gray-500 hover:text-indigo-600 transition-colors"
        title="Configure Alerts"
      >
        <Bell className="h-5 w-5" />
      </button>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Configure Pool Alert</h3>
              <button
                onClick={() => setShowForm(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                ×
              </button>
            </div>
            <AlertConfigurationForm
              poolId={poolId}
              onConfigured={() => {
                setShowForm(false);
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}