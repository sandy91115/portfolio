"use client";

import { useState } from "react";
import { Server, Database, Zap, Shield, Layers, ArrowRight } from "lucide-react";

export function ArchitectureDiagram() {
  const [selectedNode, setSelectedNode] = useState<string>("redis");

  const nodes = [
    {
      id: "client",
      title: "Client Layer",
      subtitle: "Web, Mobile & 3rd Party APIs",
      icon: Layers,
      color: "#00f2fe",
      description: "Incoming HTTPS requests, webhooks from ShipStation and marketing platforms with JWT Bearer authentication.",
      metrics: "15k - 20k Requests/sec",
    },
    {
      id: "gateway",
      title: "API Gateway & RBAC",
      subtitle: "Rate Limiting & Auth Validation",
      icon: Shield,
      color: "#ff2c2c",
      description: "Role-based access control (RBAC), token validation, distributed rate-limiting via Redis token-bucket algorithm.",
      metrics: "Sub-2ms Token Verification",
    },
    {
      id: "services",
      title: "Microservices Core",
      subtitle: "PHP Laravel & Node.js / Express",
      icon: Server,
      color: "#10b981",
      description: "Stateless backend services handling reservation workflows, lead generation pipelines, RFQ automation, and AI content analysis.",
      metrics: "Auto-scaled Pods • 99.99% SLA",
    },
    {
      id: "redis",
      title: "Redis Cache Layer",
      subtitle: "In-Memory Sub-Millisecond Store",
      icon: Zap,
      color: "#f59e0b",
      description: "High-read endpoints cached with aggressive TTLs, distributed mutex locks, and session serialization.",
      metrics: "1.1ms Latency • 99.4% Hit Rate",
    },
    {
      id: "polyglot",
      title: "Polyglot Database Tier",
      subtitle: "PostgreSQL 16 & MongoDB Atlas",
      icon: Database,
      color: "#a855f7",
      description: "PostgreSQL for ACID compliance, user auth, and financial ledger data. MongoDB for flexible listing schemas and audit logs.",
      metrics: "Zero Data Inconsistency",
    },
  ];

  const activeNodeData = nodes.find((n) => n.id === selectedNode) || nodes[3];

  return (
    <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-b from-[#0e111a] via-[#090b10] to-[#06070a] p-4 sm:p-6 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8">
        <div>
          <span className="text-[11px] sm:text-xs font-mono text-[#00f2fe] bg-[#00f2fe]/10 px-3 py-1 rounded-full border border-[#00f2fe]/20 uppercase tracking-wider">
            High-Level Architecture (HLD)
          </span>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-white mt-2">
            Distributed Polyglot Pipeline
          </h3>
        </div>
        <p className="text-xs text-white/50 max-w-sm">
          Click any component below to inspect the architectural decisions and latency performance.
        </p>
      </div>

      {/* Interactive Node Flow Diagram */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 sm:gap-3 relative">
        {nodes.map((node, i) => {
          const isSelected = node.id === selectedNode;
          const Icon = node.icon;
          return (
            <button
              key={node.id}
              onClick={() => setSelectedNode(node.id)}
              className={`p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border text-left transition-all relative group flex flex-col justify-between min-h-[120px] sm:min-h-[140px] active:scale-98 ${
                isSelected
                  ? "bg-white/[0.08] border-white/40 shadow-[0_0_25px_rgba(255,255,255,0.15)] sm:scale-[1.02]"
                  : "bg-white/[0.02] border-white/10 hover:bg-white/[0.05] hover:border-white/20"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${node.color}20`, color: node.color }}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-white/40">0{i + 1}</span>
                </div>
                <h4 className="text-xs font-bold text-white leading-tight mb-1">{node.title}</h4>
                <p className="text-[10px] text-white/40 leading-snug">{node.subtitle}</p>
              </div>

              <div className="mt-3 pt-2 border-t border-white/5 flex items-center gap-1 text-[10px] font-mono" style={{ color: node.color }}>
                <span>Inspect</span>
                <ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          );
        })}
      </div>

      {/* Detailed Architectural Breakdown Panel */}
      <div className="mt-6 rounded-2xl bg-black/60 border border-white/10 p-5 font-mono text-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: activeNodeData.color }} />
            <span className="text-white font-bold text-sm">{activeNodeData.title}</span>
            <span className="text-white/40">|</span>
            <span className="text-white/60">{activeNodeData.subtitle}</span>
          </div>
          <p className="text-white/70 text-xs font-sans leading-relaxed">{activeNodeData.description}</p>
        </div>

        <div className="shrink-0 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-right">
          <div className="text-[10px] text-white/40 uppercase tracking-widest">Measured Benchmark</div>
          <div className="text-sm font-bold" style={{ color: activeNodeData.color }}>
            {activeNodeData.metrics}
          </div>
        </div>
      </div>
    </div>
  );
}
