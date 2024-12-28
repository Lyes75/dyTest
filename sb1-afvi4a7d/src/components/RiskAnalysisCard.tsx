import React from 'react';
import { RiskAnalysis } from '../types';
import { Shield, TrendingUp, Users, AlertTriangle } from 'lucide-react';

interface RiskAnalysisCardProps {
  analysis: RiskAnalysis;
}

export default function RiskAnalysisCard({ analysis }: RiskAnalysisCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Risk Analysis</h2>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Shield className={`h-5 w-5 ${analysis.contractAudit ? 'text-green-500' : 'text-red-500'} mr-2`} />
            <span>Contract Audit</span>
          </div>
          <span className={analysis.contractAudit ? 'text-green-500' : 'text-red-500'}>
            {analysis.contractAudit ? 'Verified' : 'Unverified'}
          </span>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Liquidity Score</span>
            <span className="text-sm font-medium">{analysis.liquidityScore}/100</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full" 
              style={{ width: `${analysis.liquidityScore}%` }}
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Whale Concentration</span>
            <span className="text-sm font-medium">{analysis.whaleConcentration}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full ${
                analysis.whaleConcentration > 50 ? 'bg-red-500' : 'bg-green-500'
              }`}
              style={{ width: `${analysis.whaleConcentration}%` }}
            />
          </div>
        </div>

        <div className="mt-6 p-4 rounded-lg bg-gray-50">
          <div className="flex items-center justify-between">
            <span className="font-medium">Total Risk Score</span>
            <div className="flex items-center">
              <span className={`text-lg font-bold ${
                analysis.totalRiskScore < 30 ? 'text-green-500' : 
                analysis.totalRiskScore < 70 ? 'text-yellow-500' : 'text-red-500'
              }`}>
                {analysis.totalRiskScore}/100
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}