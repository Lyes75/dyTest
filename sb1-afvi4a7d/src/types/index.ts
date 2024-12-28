export enum Chain {
  ETHEREUM = 'Ethereum',
  BSC = 'BSC',
  SOLANA = 'Solana',
  AVALANCHE = 'Avalanche'
}

export interface YieldOpportunity {
  id: string;
  protocol: string;
  chain: Chain;
  apy: number;
  tvl: number;
  riskScore: number;
  token: string;
  rewardToken: string;
  lockupPeriod: number;
  audited: boolean;
  auditUrl?: string;
  poolUrl: string;
}

export interface StakingOpportunity {
  id: string;
  protocol: string;
  chain: Chain;
  apy: number;
  tvl: number;
  riskScore: number;
  token: string;
  lockPeriod: number;
  minStake: number;
  poolUrl: string;
}