import React from 'react';
import { ExternalLink } from 'lucide-react';
import { YieldOpportunity } from '../../types';
import { ProtocolBadge } from '../protocol/ProtocolBadge';
import { RiskScoreTooltip } from '../risk/RiskScoreTooltip';
import { PoolMetrics } from '../pool/PoolMetrics';

interface YieldCardViewProps {
  opportunity: YieldOpportunity;
}

export function YieldCardView({ opportunity }: YieldCardViewProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4 space-y-4">
      <div className="flex justify-between items-start">
        <div>
          <ProtocolBadge
            name={opportunity.protocol}
            audited={opportunity.audited}
            auditUrl={opportunity.auditUrl}
          />
          <div className="text-sm text-gray-500 mt-1">
            {opportunity.token}-{opportunity.rewardToken}
          </div>
        </div>
        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
          {opportunity.chain}
        </span>
      </div>

      <div className="flex justify-between items-center">
        <PoolMetrics poolId={opportunity.id} />
        <RiskScoreTooltip score={opportunity.riskScore} />
      </div>

      <div className="flex justify-end">
        <a
          href={opportunity.poolUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-900"
        >
          View Pool
          <ExternalLink className="h-4 w-4 ml-1" />
        </a>
      </div>
    </div>
  );
}