import React from 'react';
import { YieldOpportunity } from '../types';
import { YieldRow } from './yield/YieldRow';

interface YieldTableProps {
  opportunities: YieldOpportunity[];
}

export default function YieldTable({ opportunities }: YieldTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg overflow-hidden">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Protocol</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Chain</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">APY / Rewards</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Risk Score</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {opportunities.map((opportunity) => (
            <YieldRow
              key={opportunity.id}
              opportunity={opportunity}
              onSelect={() => {}}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}