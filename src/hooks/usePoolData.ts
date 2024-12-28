import { useState, useEffect } from 'react';
import { ProtocolService } from '../services/protocols/protocolService';
import { PoolUpdate, YieldUpdate } from '../services/protocols/types';

export function usePoolData(poolId: string) {
  const [lastUpdate, setLastUpdate] = useState<YieldUpdate | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const protocolService = ProtocolService.getInstance();

    // Get initial data
    const initialData = protocolService.getPoolData(poolId);
    if (initialData) {
      setLastUpdate(initialData);
      setIsLoading(false);
    }

    // Subscribe to updates
    const unsubscribe = protocolService.onPoolUpdate((update) => {
      if (update.poolId === poolId) {
        setLastUpdate(update.update);
        setIsLoading(false);
      }
    });

    return unsubscribe;
  }, [poolId]);

  return { data: lastUpdate, isLoading };
}