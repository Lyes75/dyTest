import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { useRealTimeData } from '../../hooks/useRealTimeData';
import { formatCurrency } from '../../utils/format';

interface PoolMetricsProps {
  poolId: string;
  initialData?: {
    apy: number;
    tvl: number;
  };
}

export function PoolMetrics({ poolId, initialData }: PoolMetricsProps) {
  const { poolData } = useRealTimeData(poolId);

  // Use real-time data if available, otherwise fall back to initial data
  const displayData = poolData ? {
    apy: poolData.apy,
    tvl: poolData.tvl,
    baseRewards: poolData.baseRewards,
    incentiveRewards: poolData.incentiveRewards
  } : initialData ? {
    apy: initialData.apy,
    tvl: initialData.tvl,
    baseRewards: initialData.apy * 0.7,
    incentiveRewards: initialData.apy * 0.3
  } : null;

  if (!displayData) {
    return (
      <div className="text-sm text-gray-500">
        No data available
      </div>
    );
  }

  const isPositiveChange = displayData.apy > 0;
  const Icon = isPositiveChange ? TrendingUp : TrendingDown;

  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <div className={`flex items-center ${
          isPositiveChange ? 'text-green-500' : 'text-red-500'
        }`}>
          <span className="text-lg font-semibold">
            {displayData.apy.toFixed(2)}%
          </span>
          <Icon className="h-4 w-4 ml-1" />
        </div>
      </div>
      <div className="flex items-center space-x-2 text-xs text-gray-400">
        <span>Base: {displayData.baseRewards.toFixed(2)}%</span>
        <span>•</span>
        <span>Rewards: {displayData.incentiveRewards.toFixed(2)}%</span>
      </div>
    </div>
  );
}