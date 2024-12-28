export interface ProtocolData {
  id: string;
  name: string;
  baseUrl: string;
  supportedChains: string[];
}

export interface YieldUpdate {
  timestamp: number;
  apy: number;
  tvl: number;
  baseRewards: number;
  incentiveRewards: number;
}

export interface PoolUpdate {
  poolId: string;
  protocol: string;
  chain: string;
  update: YieldUpdate;
}