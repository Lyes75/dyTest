import React from 'react';
import { ExternalLink, Shield, ShieldAlert } from 'lucide-react';

interface ProtocolBadgeProps {
  name: string;
  audited: boolean;
  auditUrl?: string;
}

export function ProtocolBadge({ name, audited, auditUrl }: ProtocolBadgeProps) {
  return (
    <div className="flex items-center space-x-2">
      <span className="font-medium text-gray-900">{name}</span>
      {audited ? (
        <a
          href={auditUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-green-600 hover:text-green-800"
          title="View Audit Report"
        >
          <Shield className="h-4 w-4" />
          <ExternalLink className="h-3 w-3 ml-1" />
        </a>
      ) : (
        <span className="text-red-500" title="No Audit Available">
          <ShieldAlert className="h-4 w-4" />
        </span>
      )}
    </div>
  );
}