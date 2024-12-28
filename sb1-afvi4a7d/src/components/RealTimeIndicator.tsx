import React from 'react';
import { Radio, AlertCircle } from 'lucide-react';
import { useRealTimeData } from '../hooks/useRealTimeData';

export default function RealTimeIndicator() {
  const { lastUpdate, error } = useRealTimeData();
  
  if (error) {
    return (
      <div className="flex items-center space-x-2 text-sm text-red-600">
        <AlertCircle className="h-4 w-4" />
        <span>Connection error - Retrying...</span>
      </div>
    );
  }

  const getUpdateText = () => {
    const seconds = Math.floor((new Date().getTime() - lastUpdate.getTime()) / 1000);
    if (seconds < 5) return 'Live data • Updated just now';
    if (seconds < 60) return `Live data • Updated ${seconds}s ago`;
    return 'Live data • Updated recently';
  };

  return (
    <div className="flex items-center space-x-2 text-sm text-gray-600">
      <Radio className="h-4 w-4 text-green-500 animate-pulse" />
      <span>{getUpdateText()}</span>
    </div>
  );
}