import React from 'react';
import { Chain } from '../../types';

interface ChainFilterProps {
  selectedChain: Chain | 'all';
  onChainSelect: (chain: Chain | 'all') => void;
}

export function ChainFilter({ selectedChain, onChainSelect }: ChainFilterProps) {
  return (
    <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
      <span className="text-sm font-medium text-gray-700">Chain:</span>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onChainSelect('all')}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
            selectedChain === 'all'
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          All Chains
        </button>
        {Object.values(Chain).map((chain) => (
          <button
            key={chain}
            onClick={() => onChainSelect(chain)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              selectedChain === chain
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {chain}
          </button>
        ))}
      </div>
    </div>
  );
}