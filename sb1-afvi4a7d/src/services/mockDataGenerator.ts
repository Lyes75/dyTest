import { YieldOpportunity, StakingOpportunity } from '../types';

export function generateMockUpdates(
  yields: YieldOpportunity[],
  staking: StakingOpportunity[]
) {
  const timestamp = Date.now();
  
  return {
    yields: yields.map(y => ({
      ...y,
      apy: y.apy * (0.95 + Math.random() * 0.1), // ±5% change
      tvl: y.tvl * (0.97 + Math.random() * 0.06), // ±3% change
      lastUpdate: timestamp
    })),
    staking: staking.map(s => ({
      ...s,
      apy: s.apy * (0.95 + Math.random() * 0.1),
      tvl: s.tvl * (0.97 + Math.random() * 0.06),
      lastUpdate: timestamp
    }))
  };
}