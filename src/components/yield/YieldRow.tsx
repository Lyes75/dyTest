import React from 'react';
import { ExternalLink } from 'lucide-react';
import { YieldOpportunity } from '../../types';
import { ProtocolBadge } from '../protocol/ProtocolBadge';
import { RiskScoreTooltip } from '../risk/RiskScoreTooltip';
import { PoolMetrics } from '../pool/PoolMetrics';
import { AlertButton } from '../alerts/AlertButton';

interface YieldRowProps {
  opportunity: YieldOpportunity;
  onSelect: (id: string) => void;
}

export function YieldRow({ opportunity, onSelect }: YieldRowProps) {
  return (
    <tr className="hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="ml-4">
            <ProtocolBadge
              name={opportunity.protocol}
              audited={opportunity.audited}
              auditUrl={opportunity.auditUrl}
            />
            <div className="text-sm text-gray-500">
              {opportunity.token}-{opportunity.rewardToken}
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
          {opportunity.chain}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <PoolMetrics 
          poolId={opportunity.id} 
          initialData={{ apy: opportunity.apy, tvl: opportunity.tvl }}
        />
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <RiskScoreTooltip score={opportunity.riskScore} />
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <div className="flex items-center space-x-4">
          <AlertButton poolId={opportunity.id} />
          <button
            onClick={() => onSelect(opportunity.id)}
            className="text-indigo-600 hover:text-indigo-900"
          >
            View Details
          </button>
          <a
            href={opportunity.poolUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700 flex items-center"
            title={`Visit ${opportunity.protocol} Pool`}
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </td>
    </tr>
  );
}