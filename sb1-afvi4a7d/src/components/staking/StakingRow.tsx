import React from 'react';
import { ExternalLink } from 'lucide-react';
import { StakingOpportunity } from '../../types';
import { formatCurrency } from '../../utils/format';
import { RiskScoreTooltip } from '../risk/RiskScoreTooltip';
import { PoolMetrics } from '../pool/PoolMetrics';
import { AlertButton } from '../alerts/AlertButton';

interface StakingRowProps {
  opportunity: StakingOpportunity;
}

export function StakingRow({ opportunity }: StakingRowProps) {
  return (
    <tr className="hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="text-sm font-medium text-gray-900">{opportunity.protocol}</div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
          {opportunity.chain}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{opportunity.token}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <PoolMetrics poolId={opportunity.id} initialData={{ apy: opportunity.apy, tvl: opportunity.tvl }} />
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {opportunity.lockPeriod} days
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <RiskScoreTooltip score={opportunity.riskScore} />
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <div className="flex items-center justify-end space-x-4">
          <AlertButton poolId={opportunity.id} />
          <a
            href={opportunity.poolUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-900 inline-flex items-center"
          >
            Stake Now
            <ExternalLink className="h-4 w-4 ml-1" />
          </a>
        </div>
      </td>
    </tr>
  );
}