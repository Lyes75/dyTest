import React from 'react';
import { InfoIcon } from 'lucide-react';

interface RiskScoreTooltipProps {
  score: number;
}

export function RiskScoreTooltip({ score }: RiskScoreTooltipProps) {
  const color = score < 30 ? 'green' : score < 70 ? 'yellow' : 'red';
  
  return (
    <div className="group relative flex items-center">
      <div className={`flex items-center px-2 py-1 rounded-full bg-${color}-100 text-${color}-800`}>
        <span className="text-sm mr-1">{score}</span>
        <InfoIcon className="h-4 w-4" />
      </div>
      
      {/* Tooltip */}
      <div className="invisible group-hover:visible absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-2 bg-gray-900 text-white text-sm rounded-lg shadow-lg z-10">
        <div className="text-xs">
          <p className="font-semibold mb-1">Risk Score Calculation:</p>
          <ul className="list-disc pl-4 space-y-1">
            <li>Protocol Security Audit (30%)</li>
            <li>Liquidity Depth (20%)</li>
            <li>Protocol Age & Track Record (15%)</li>
            <li>Smart Contract Complexity (15%)</li>
            <li>Token Distribution (10%)</li>
            <li>Past Incidents (10%)</li>
          </ul>
          <p className="mt-2 text-gray-300">
            Lower score = Lower risk
          </p>
        </div>
        {/* Arrow */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-8px] border-l-[8px] border-l-transparent border-t-[8px] border-t-gray-900 border-r-[8px] border-r-transparent"></div>
      </div>
    </div>
  );
}