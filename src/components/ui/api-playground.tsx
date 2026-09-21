"use client";

import { useState } from "react";
import { Terminal, Play, CheckCircle2, RefreshCw } from "lucide-react";

type Endpoint = {
  id: string;
  method: "GET" | "POST";
  path: string;
  label: string;
  tag: string;
  latency: string;
  cached: boolean;
  response: Record<string, any>;
};

const ENDPOINTS: Endpoint[] = [
  {
    id: "redis-cache",
    method: "GET",
    path: "/api/v1/listings/cached?category=penthouses",
    label: "Redis In-Memory Query",
    tag: "Redis Sub-ms Cache",
    latency: "1.2ms",
    cached: true,
    response: {
      status: 200,
      cache: "HIT",
      engine: "Redis v7.2 Cluster",
      latency_ms: 1.2,
      data: {
        total: 148,
        page: 1,
        source: "in-memory-replica-node-3",
        results: [
          { id: "res_982", title: "Amalfi Ocean Villa", price_usd: 12500, status: "AVAILABLE" },
          { id: "res_983", title: "Cyber Tower Penthouse", price_usd: 18900, status: "RESERVED" },
        ],
      },
      telemetry: { throughput_tps: 18450, memory_used: "42.8 MB" },
    },
  },
  {
    id: "polyglot-tx",
    method: "POST",
    path: "/api/v1/reservations/checkout",
    label: "Polyglot Transaction (PostgreSQL + Mongo)",
    tag: "ACID + Document Sync",
    latency: "14.8ms",
    cached: false,
    response: {
      status: 201,
      message: "Transactional reservation committed successfully",
      architecture: {
        relational_auth: "PostgreSQL 16 (Row-Level Security + ACID)",
        document_store: "MongoDB Atlas (Flexible Schema Metadata)",
        distributed_lock: "Redis Redlock Mutex (Released in 4ms)",
      },
      audit: {
        transaction_id: "tx_01HX98K2LPM",
        user_id: "usr_backend_lead",
        timestamp: new Date().toISOString(),
      },
    },
  },
  {
    id: "rbac-auth",
    method: "GET",
    path: "/api/v1/admin/multi-tenant/audit-log",
    label: "Multi-Tenant RBAC & Audit",
    tag: "Laravel Sanctum / RBAC",
    latency: "4.6ms",
    cached: false,
    response: {
      status: 200,
      auth: {
        authenticated: true,
        role: "ADMIN",
        permissions: ["TENANT_READ", "TRANSACTIONS_AUDIT", "WEBHOOK_DISPATCH"],
      },
      tenant_isolation: "Enforced via Scoped Database Queries",
      compliance: { audit_logging: "ACTIVE", retention_days: 90 },
    },
  },
];

export function ApiPlayground() {
  const [activeId, setActiveId] = useState<string>("redis-cache");
  const [executing, setExecuting] = useState(false);
  const [executionOutput, setExecutionOutput] = useState<Endpoint>(ENDPOINTS[0]);

  const handleExecute = (endpoint: Endpoint) => {
    setActiveId(endpoint.id);
    setExecuting(true);
    setTimeout(() => {
      setExecutionOutput(endpoint);
      setExecuting(false);
    }, 280);
  };

  return (
    <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-b from-[#0e111a] via-[#090b10] to-[#06070a] p-4 sm:p-6 md:p-7 shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pb-5 sm:pb-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-xl bg-[#00f2fe]/10 border border-[#00f2fe]/30 flex items-center justify-center text-[#00f2fe] shrink-0">
            <Terminal className="w-4 sm:w-5 h-4 sm:h-5" />
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <span>Interactive API Console</span>
              <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                LIVE DEMO
              </span>
            </h4>
            <p className="text-[11px] sm:text-xs text-white/50">Test Sandeep's REST API & Redis caching architecture</p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 font-mono text-[11px] sm:text-xs text-white/60">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Redis Active</span>
          </span>
          <span>•</span>
          <span className="text-[#00f2fe] truncate">PostgreSQL + Mongo</span>
        </div>
      </div>

      {/* Endpoint Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 my-5">
        {ENDPOINTS.map((ep) => {
          const isActive = ep.id === activeId;
          return (
            <button
              key={ep.id}
              onClick={() => handleExecute(ep)}
              className={`p-3.5 rounded-2xl text-left transition-all border font-mono ${
                isActive
                  ? "bg-white/[0.08] border-[#00f2fe]/50 shadow-[0_0_20px_rgba(0,242,254,0.15)]"
                  : "bg-white/[0.02] border-white/5 hover:bg-white/[0.05] hover:border-white/10 text-white/70"
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    ep.method === "GET"
                      ? "bg-emerald-500/20 text-emerald-400"
                      : "bg-[#ff2c2c]/20 text-[#ff2c2c]"
                  }`}
                >
                  {ep.method}
                </span>
                <span className="text-[10px] text-white/40">{ep.latency}</span>
              </div>
              <div className="text-xs font-semibold text-white truncate">{ep.label}</div>
              <div className="text-[10px] text-white/40 truncate mt-0.5">{ep.tag}</div>
            </button>
          );
        })}
      </div>

      {/* Console Viewer */}
      <div className="rounded-2xl bg-black/80 border border-white/10 overflow-hidden font-mono text-xs">
        {/* URL Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-white/[0.03] border-b border-white/5">
          <div className="flex items-center gap-2 text-white/70 truncate mr-2">
            <span
              className={`font-bold text-[11px] px-1.5 py-0.5 rounded ${
                executionOutput.method === "GET"
                  ? "bg-emerald-500/20 text-emerald-400"
                  : "bg-[#ff2c2c]/20 text-[#ff2c2c]"
              }`}
            >
              {executionOutput.method}
            </span>
            <span className="text-white/90 truncate">{executionOutput.path}</span>
          </div>

          <button
            onClick={() => handleExecute(executionOutput)}
            disabled={executing}
            className="shrink-0 flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[11px] transition-all disabled:opacity-50"
          >
            {executing ? (
              <RefreshCw className="w-3 h-3 animate-spin text-[#00f2fe]" />
            ) : (
              <Play className="w-3 h-3 text-emerald-400 fill-emerald-400" />
            )}
            <span>{executing ? "Dispatching..." : "Re-Execute"}</span>
          </button>
        </div>

        {/* JSON Response Body */}
        <div className="p-4 overflow-x-auto max-h-[260px] text-[12px] leading-relaxed select-text">
          <div className="flex items-center justify-between text-[11px] text-white/40 pb-2 mb-2 border-b border-white/5">
            <span className="text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> 200 OK (Response: {executionOutput.latency})
            </span>
            <span>Content-Type: application/json</span>
          </div>
          <pre className="text-[#00f2fe] whitespace-pre-wrap">
            {JSON.stringify(executionOutput.response, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}
