import { ProtocolData, PoolUpdate, YieldUpdate } from './types';

export class ProtocolService {
  private static instance: ProtocolService;
  private updateCallbacks: ((update: PoolUpdate) => void)[] = [];
  private protocols: Map<string, ProtocolData> = new Map();
  private poolData: Map<string, YieldUpdate> = new Map();
  
  private constructor() {
    this.initializeProtocols();
  }

  static getInstance(): ProtocolService {
    if (!this.instance) {
      this.instance = new ProtocolService();
    }
    return this.instance;
  }

  private initializeProtocols() {
    const protocolsList: ProtocolData[] = [
      {
        id: 'uniswap-v3',
        name: 'Uniswap V3',
        baseUrl: 'https://api.uniswap.org/v3',
        supportedChains: ['ethereum', 'polygon', 'arbitrum', 'optimism']
      },
      // ... other protocols
    ];

    protocolsList.forEach(protocol => {
      this.protocols.set(protocol.id, protocol);
    });
  }

  getPoolData(poolId: string): YieldUpdate | null {
    return this.poolData.get(poolId) || null;
  }

  onPoolUpdate(callback: (update: PoolUpdate) => void): () => void {
    this.updateCallbacks.push(callback);
    return () => {
      this.updateCallbacks = this.updateCallbacks.filter(cb => cb !== callback);
    };
  }

  notifyPoolUpdate(update: PoolUpdate) {
    // Store the update
    this.poolData.set(update.poolId, update.update);
    
    // Notify subscribers
    this.updateCallbacks.forEach(callback => callback(update));
  }
}