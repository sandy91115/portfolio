'use client';

import { ArrowRight, Database, Layers, Server, Shield, Zap } from 'lucide-react';
import { useState } from 'react';

export function ArchitectureDiagram() {
  const [selectedNode, setSelectedNode] = useState<string>('redis');

  const nodes = [
    {
      id: 'client',
      title: 'Client & Edge Tier',
      subtitle: 'Web, Mobile & Webhooks',
      icon: Layers,
      description:
        'Incoming HTTPS requests, marketing webhooks (ShipStation, payment gateways) authenticated with JWT bearer tokens.',
      metrics: '15,000+ Requests/sec',
    },
    {
      id: 'gateway',
      title: 'API Gateway & RBAC',
      subtitle: 'Rate Limiting & Auth Guard',
      icon: Shield,
      description:
        'Granular multi-tenant Role-Based Access Control, token verification, and sliding-window rate limiting via Redis token bucket.',
      metrics: '< 2ms Auth Validation',
    },
    {
      id: 'services',
      title: 'Microservices Core',
      subtitle: 'PHP Laravel 11 & Node.js',
      icon: Server,
      description:
        'Stateless backend services executing AI prompt synthesis, dynamic print calculation, order pipelines, and ERP workflows.',
      metrics: 'Auto-scaled Containers • 99.9% SLA',
    },
    {
      id: 'redis',
      title: 'In-Memory Caching',
      subtitle: 'Redis 7 Cluster',
      icon: Zap,
      description:
        'Sub-millisecond cache-aside layer for real-time listing queries, distributed Redlock mutexes, and user session storage.',
      metrics: '0.3ms - 1.1ms • 99.4% Hit Rate',
    },
    {
      id: 'polyglot',
      title: 'Persistence Tier',
      subtitle: 'MySQL 8 & PostgreSQL',
      icon: Database,
      description:
        'Strict ACID relational schemas with composite B+Tree indexing, multi-tenant tenant_id isolation, and zero-drift balance commits.',
      metrics: '100% ACID Concurrency Safety',
    },
  ];

  const activeNodeData = nodes.find((n) => n.id === selectedNode) || nodes[3];

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5 sm:p-6 shadow-xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6">
        <div>
          <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
            System Design & HLD
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
            Distributed Production Pipeline
          </h3>
        </div>
        <p className="text-xs text-zinc-400 max-w-sm">
          Click any component below to inspect the architectural responsibilities and measured
          performance metrics.
        </p>
      </div>

      {/* Node Flow Diagram */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
        {nodes.map((node, i) => {
          const isSelected = node.id === selectedNode;
          const Icon = node.icon;
          return (
            <button
              key={node.id}
              onClick={() => setSelectedNode(node.id)}
              className={`p-4 rounded-xl border text-left transition-all relative flex flex-col justify-between min-h-[130px] ${
                isSelected
                  ? 'bg-zinc-800 border-zinc-500 shadow-sm'
                  : 'bg-zinc-900/50 border-zinc-800 hover:bg-zinc-900 hover:border-zinc-700'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      isSelected ? 'bg-zinc-700 text-white' : 'bg-zinc-800 text-zinc-400'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-mono text-zinc-500">0{i + 1}</span>
                </div>
                <h4 className="text-xs font-semibold text-white leading-tight mb-0.5">
                  {node.title}
                </h4>
                <p className="text-[10px] text-zinc-400 leading-snug">{node.subtitle}</p>
              </div>

              <div className="mt-3 pt-2 border-t border-zinc-800 flex items-center gap-1 text-[10px] font-mono text-zinc-400">
                <span>Inspect</span>
                <ArrowRight className="w-2.5 h-2.5" />
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Node Detail Callout */}
      <div className="mt-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 p-4 font-mono text-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-white font-semibold">{activeNodeData.title}</span>
            <span className="text-zinc-600">|</span>
            <span className="text-zinc-400">{activeNodeData.subtitle}</span>
          </div>
          <p className="text-zinc-400 text-xs font-sans leading-relaxed">
            {activeNodeData.description}
          </p>
        </div>

        <div className="shrink-0 px-3.5 py-1.5 rounded-lg bg-zinc-800/80 border border-zinc-700 text-right">
          <div className="text-[9px] text-zinc-400 uppercase tracking-wider">Measured Output</div>
          <div className="text-xs font-bold text-white mt-0.5 font-mono">
            {activeNodeData.metrics}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArchitectureDiagram;
