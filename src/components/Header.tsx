import React, { useState } from 'react';
import { Activity, Bell } from 'lucide-react';
import { GlobalAlertModal } from './alerts/GlobalAlertModal';
import { ChainSelector } from './filters/ChainSelector';

export default function Header() {
  const [showAlertModal, setShowAlertModal] = useState(false);

  return (
    <header className="bg-indigo-600 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Activity className="h-6 w-6 text-white" />
            <h1 className="text-xl sm:text-2xl font-bold text-white">DeFiYield.io</h1>
          </div>
          <div className="flex items-center space-x-4">
            <ChainSelector />
            <button
              onClick={() => setShowAlertModal(true)}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-400 transition-colors text-white"
            >
              <Bell className="h-5 w-5" />
              <span className="hidden sm:inline">Configure Alerts</span>
            </button>
          </div>
        </div>
      </div>

      {showAlertModal && (
        <GlobalAlertModal onClose={() => setShowAlertModal(false)} />
      )}
    </header>
  );
}