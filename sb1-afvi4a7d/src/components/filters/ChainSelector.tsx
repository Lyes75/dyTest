import React from 'react';
import { Chain } from '../../types';
import { useChainFilter } from '../../hooks/useChainFilter';

export function ChainSelector() {
  const { selectedChain, handleChainSelect } = useChainFilter([]);

  return (
    <select
      value={selectedChain}
      onChange={(e) => handleChainSelect(e.target.value as Chain | 'all')}
      className="bg-white text-gray-900 rounded-lg px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
    >
      <option value="all">All Chains</option>
      {Object.values(Chain).map((chain) => (
        <option key={chain} value={chain}>
          {chain}
        </option>
      ))}
    </select>
  );
}