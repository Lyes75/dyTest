import React from 'react';
import { StakingOpportunity } from '../../types';
import { StakingRow } from './StakingRow';

interface StakingTableProps {
  opportunities: StakingOpportunity[];
}

export default function StakingTable({ opportunities }: StakingTableProps) {
  const sortedOpportunities = [...opportunities].sort((a, b) => b.apy - a.apy);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg overflow-hidden">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Protocol</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Chain</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Token</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">APY</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lock Period</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Risk Score</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {sortedOpportunities.map((opportunity) => (
            <StakingRow key={opportunity.id} opportunity={opportunity} />
          ))}
        </tbody>
      </table>
    </div>
  );
}