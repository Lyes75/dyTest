import React from 'react';
import { Shield, AlertTriangle } from 'lucide-react';

interface RiskBadgeProps {
  score: number;
}

export function RiskBadge({ score }: RiskBadgeProps) {
  const color = score < 30 ? 'green' : score < 70 ? 'yellow' : 'red';
  const Icon = score < 30 ? Shield : AlertTriangle;
  
  return (
    <div className={`flex items-center px-2 py-1 rounded-full bg-${color}-100 text-${color}-800`}>
      <Icon className="h-4 w-4 mr-1" />
      <span className="text-sm">{score}</span>
    </div>
  );
}