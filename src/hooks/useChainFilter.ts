import { useState, useCallback, useMemo } from 'react';
import { Chain } from '../types';

type OpportunityWithChain = {
  chain: Chain;
  [key: string]: any;
};

export function useChainFilter<T extends OpportunityWithChain>(opportunities: T[]) {
  const [selectedChain, setSelectedChain] = useState<Chain | 'all'>('all');

  const handleChainSelect = useCallback((chain: Chain | 'all') => {
    setSelectedChain(chain);
  }, []);

  const filteredOpportunities = useMemo(() => {
    if (!opportunities) return [];
    return selectedChain === 'all' 
      ? opportunities 
      : opportunities.filter(opp => opp.chain === selectedChain);
  }, [opportunities, selectedChain]);

  return {
    selectedChain,
    handleChainSelect,
    filteredOpportunities,
  };
}