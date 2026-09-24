'use client';

import { Check, CheckCircle2, Copy, ExternalLink, Play, RefreshCw, Terminal } from 'lucide-react';
import { useState } from 'react';

type Endpoint = {
  id: string;
  method: 'GET' | 'POST';
  path: string;
  label: string;
  tag: string;
  latency: string;
  project: string;
  projectUrl: string;
  response: Record<string, any>;
};

const ENDPOINTS: Endpoint[] = [
  {
    id: 'bizsync-ai',
    method: 'POST',
    path: '/api/v1/bizsync/ai/intelligence',
    label: 'BizSyncOS AI Business Brain',
    tag: 'Autonomous Commerce OS',
    latency: '1.4ms',
    project: 'BizSyncOS',
    projectUrl: 'https://bizsyncos.vercel.app/',
    response: {
      status: 200,
      platform: 'BizSyncOS v2.4 (Enterprise)',
      ai_agent: 'Business Brain Neural Core',
      telemetry: {
        active_channels: ['Omnichannel CRM', 'Dynamic Inventory', 'Order Reconciliation'],
        workflow_automation: 'RUNNING',
        system_load_pct: 14.2,
      },
      insights: [
        { category: 'Inventory Forecast', alert: 'Replenishment trigger dispatched for SKU-982' },
        { category: 'Revenue Velocity', velocity: '+28.4% WoW across integrated pipelines' },
      ],
      rbac: { role: 'EXECUTIVE_ADMIN', tenant: 'enterprise-multi-tenant-cluster' },
    },
  },
  {
    id: 'printworks-pricing',
    method: 'POST',
    path: '/api/v1/printworks/pricing/calculate',
    label: 'Printworks 23 Dynamic Price Matrix',
    tag: 'Web-to-Print Engine',
    latency: '0.8ms',
    project: 'Printworks 23',
    projectUrl: 'https://printworks23.com/',
    response: {
      status: 200,
      engine: 'Printworks Dynamic Matrix v4',
      quote: {
        product: 'Luxury Matte Spot-UV Catalog',
        units: 2500,
        specifications: {
          paper_gsm: 350,
          finish: 'Soft-Touch Lamination + Foil Stamping',
          dimensions_mm: '210x297',
        },
        calculated_price_inr: 48650.0,
        preflight_validation: 'PDF_VERIFIED_PASS (PDF.worker Engine)',
        turnaround_hours: 48,
      },
      csrf_verified: true,
    },
  },
  {
    id: 'wealthway-filter',
    method: 'GET',
    path: '/api/v1/wealthway/portfolio/filter?type=commercial&roi=gt_12',
    label: 'WealthWay Investment Valuation',
    tag: 'Global Realty Engine',
    latency: '1.1ms',
    project: 'WealthWay',
    projectUrl: 'https://wealth-way.in/',
    response: {
      status: 200,
      source: 'WealthWay Realty Discovery Engine',
      total_matches: 42,
      curated_investments: [
        {
          id: 'WW-GR-091',
          title: 'Apex High-Street Commercial Hub',
          location: 'Greater Noida & Yamuna Expressway Corridor',
          projected_roi_annual: '14.2%',
          asset_class: 'Grade-A Institutional Retail',
          investor_tier: 'HNW / Institutional',
        },
        {
          id: 'WW-GR-104',
          title: 'Skyline Global Business Park',
          location: 'Noida Sector 62',
          projected_roi_annual: '12.8%',
          asset_class: 'Pre-Leased Corporate IT Space',
          investor_tier: 'Accredited Syndicate',
        },
      ],
      lead_capture_status: 'AUTOMATED_DISPATCH',
    },
  },
  {
    id: 'rotary-card',
    method: 'GET',
    path: '/api/v1/rotary/members/digital-card/11850350',
    label: 'Rotary Digital ID Verification',
    tag: 'Governance & Identity',
    latency: '1.9ms',
    project: 'Rotary Club Delhi Vivek',
    projectUrl: 'https://rotaryclubofdelhivivek.com/',
    response: {
      status: 200,
      club: 'Rotary Club of Delhi Vivek (Charter 1988)',
      member_record: {
        rotary_id: '11850350',
        full_name: 'AJAY MITTAL',
        member_since: 2023,
        digital_card_url: 'https://rotaryclubofdelhivivek.com/digitalcard/11850350',
        recognition: {
          paul_harris_fellow: 'PHF Active',
          major_donor: false,
          bequest_society: false,
        },
      },
      governance: {
        tenure_database: '35+ Years Active Historical Records',
        csrf_secured: true,
      },
    },
  },
  {
    id: 'edigital-ai',
    method: 'POST',
    path: '/api/v1/edigital/exams/generate-ai',
    label: 'eDigital OpenAI Curriculum Generator',
    tag: 'AI Education ERP',
    latency: '2.8ms',
    project: 'eDigital SaaS',
    projectUrl: 'https://wheat-wolverine-542451.hostingersite.com/login',
    response: {
      status: 200,
      module: 'OpenAI Automatic Test Question Synthesis',
      rbac_authorization: 'GRANTED (School_Admin_Sanctum_JWT)',
      curriculum: {
        standard: 'Class 10th',
        subject: 'Computer Applications & Data Structures',
        difficulty: "Adaptive (Bloom's Taxonomy Level 4)",
      },
      generated_paper: {
        test_id: 'EXAM-2026-098',
        total_questions: 25,
        time_limit_minutes: 60,
        ai_pipeline: 'OpenAI gpt-4o-mini with schema guardrails',
      },
      multi_tenant_isolation: 'STRICT_SCHOOL_SCOPE',
    },
  },
  {
    id: 'redis-cache',
    method: 'GET',
    path: '/api/v1/cache/redis/sub-millisecond',
    label: 'Redis In-Memory Cache Query',
    tag: '0.3ms In-Memory Store',
    latency: '0.3ms',
    project: 'High-Concurrency Core',
    projectUrl: 'https://github.com/sandy91115',
    response: {
      status: 200,
      cache: 'HIT (Sub-Millisecond Read)',
      engine: 'Redis v7.2 Cluster',
      latency_ms: 0.31,
      telemetry: {
        throughput_tps: 18450,
        hit_ratio: '99.4%',
        memory_used: '42.8 MB',
        cluster_nodes: 3,
      },
      lock_strategy: 'Redlock Distributed Mutex',
    },
  },
];

export function ApiPlayground() {
  const [activeId, setActiveId] = useState<string>('bizsync-ai');
  const [executing, setExecuting] = useState(false);
  const [executionOutput, setExecutionOutput] = useState<Endpoint>(ENDPOINTS[0]);
  const [copied, setCopied] = useState(false);

  const handleExecute = (endpoint: Endpoint) => {
    setActiveId(endpoint.id);
    setExecuting(true);
    setTimeout(() => {
      setExecutionOutput(endpoint);
      setExecuting(false);
    }, 220);
  };

  const handleCopyResponse = () => {
    navigator.clipboard.writeText(JSON.stringify(executionOutput.response, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5 sm:p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-zinc-800">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300">
            <Terminal className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white flex items-center gap-2">
              <span>Interactive Production API Console</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                LIVE TELEMETRY
              </span>
            </h4>
            <p className="text-xs text-zinc-400">
              Dispatch simulated requests across Sandeep's production endpoints and Redis caching
              layers
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-zinc-300">Redis Active</span>
          </span>
          <span>•</span>
          <span className="text-zinc-400">0.3ms Cluster HIT</span>
        </div>
      </div>

      {/* Endpoint Selector Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 my-4">
        {ENDPOINTS.map((ep) => {
          const isActive = ep.id === activeId;
          return (
            <button
              key={ep.id}
              onClick={() => handleExecute(ep)}
              className={`p-2.5 rounded-xl text-left transition-all border font-mono flex flex-col justify-between ${
                isActive
                  ? 'bg-zinc-800/90 border-zinc-600 text-white shadow-sm'
                  : 'bg-zinc-900/40 border-zinc-850 hover:bg-zinc-900 hover:border-zinc-800 text-zinc-400'
              }`}
            >
              <div className="flex items-center justify-between gap-1 mb-1">
                <span
                  className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                    ep.method === 'GET'
                      ? 'bg-emerald-500/15 text-emerald-400'
                      : 'bg-blue-500/15 text-blue-400'
                  }`}
                >
                  {ep.method}
                </span>
                <span className="text-[10px] text-zinc-500">{ep.latency}</span>
              </div>
              <div className="text-[11px] font-medium text-zinc-200 truncate">{ep.project}</div>
              <div className="text-[9px] text-zinc-500 truncate mt-0.5">{ep.tag}</div>
            </button>
          );
        })}
      </div>

      {/* Terminal View */}
      <div className="rounded-xl border border-zinc-800 bg-zinc-900/90 overflow-hidden font-mono text-xs">
        {/* Request Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-950 border-b border-zinc-800">
          <div className="flex items-center gap-2 text-zinc-300 truncate mr-2 min-w-0">
            <span
              className={`font-bold text-[10px] px-1.5 py-0.5 rounded shrink-0 ${
                executionOutput.method === 'GET'
                  ? 'bg-emerald-500/20 text-emerald-400'
                  : 'bg-blue-500/20 text-blue-400'
              }`}
            >
              {executionOutput.method}
            </span>
            <span className="text-zinc-200 truncate font-mono text-[11px]">
              {executionOutput.path}
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={executionOutput.projectUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-[11px] transition-colors"
            >
              <span>{executionOutput.project}</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>

            <button
              onClick={() => handleExecute(executionOutput)}
              disabled={executing}
              className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white hover:bg-zinc-200 text-zinc-950 font-medium text-[11px] transition-colors disabled:opacity-50"
            >
              {executing ? (
                <RefreshCw className="w-3 h-3 animate-spin text-zinc-950" />
              ) : (
                <Play className="w-3 h-3 fill-zinc-950 text-zinc-950" />
              )}
              <span>{executing ? 'Sending...' : 'Send Request'}</span>
            </button>
          </div>
        </div>

        {/* JSON Response Area */}
        <div className="p-4 overflow-x-auto max-h-[260px] text-[12px] leading-relaxed select-text">
          <div className="flex items-center justify-between text-[11px] text-zinc-500 pb-2 mb-2 border-b border-zinc-800">
            <span className="text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3 h-3" /> 200 OK • Response Time: {executionOutput.latency}
            </span>
            <button
              onClick={handleCopyResponse}
              className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors"
            >
              {copied ? (
                <Check className="w-3 h-3 text-emerald-400" />
              ) : (
                <Copy className="w-3 h-3" />
              )}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
          <pre className="text-zinc-300 font-mono">
            {JSON.stringify(executionOutput.response, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default ApiPlayground;
