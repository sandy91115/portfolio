'use client';

import {
  Check,
  CheckCircle2,
  Code2,
  Copy,
  ExternalLink,
  Globe,
  Layers,
  Shield,
  X,
  Zap,
} from 'lucide-react';
import { useState } from 'react';

export type ProjectItem = {
  id: string;
  category: 'enterprise' | 'ecommerce' | 'realty' | 'backend' | 'ai';
  title: string;
  domainUrl: string;
  roleBadge: string;
  description: string;
  tags: string[];
  github: string | null;
  repoLabel?: string;
  live: string | null;
  secondaryLive?: string | null;
  benchmarks: {
    label1: string;
    val1: string;
    label2: string;
    val2: string;
    label3: string;
    val3: string;
  };
  highlights: string[];
  codePreview: string;
  architectureDetails?: {
    frontend: string;
    backend: string;
    database: string;
    infra: string;
  };
};

function GitHubIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function ProjectModal({ project, onClose }: { project: ProjectItem; onClose: () => void }) {
  const [modalTab, setModalTab] = useState<'overview' | 'arch' | 'code'>('overview');
  const [copiedCode, setCopiedCode] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(project.codePreview);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
      <div className="w-full max-w-3xl rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl max-h-[90vh] flex flex-col overflow-hidden">
        {/* Top Header */}
        <div className="p-5 sm:p-6 border-b border-zinc-800 flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-zinc-900 border border-zinc-750 text-zinc-300">
                {project.roleBadge}
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Live Production System
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono text-zinc-400 hover:text-white flex items-center gap-1 mt-1 transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-zinc-500" />
                <span>{project.domainUrl}</span>
                <ExternalLink className="w-3 h-3 text-zinc-500" />
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="px-5 sm:px-6 pt-3 flex items-center gap-2 border-b border-zinc-800 font-mono text-xs">
          <button
            onClick={() => setModalTab('overview')}
            className={`pb-2.5 px-3 border-b-2 transition-all flex items-center gap-1.5 ${
              modalTab === 'overview'
                ? 'border-white text-white font-medium'
                : 'border-transparent text-zinc-500 hover:text-zinc-300'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Overview & Deliverables</span>
          </button>
          <button
            onClick={() => setModalTab('arch')}
            className={`pb-2.5 px-3 border-b-2 transition-all flex items-center gap-1.5 ${
              modalTab === 'arch'
                ? 'border-white text-white font-medium'
                : 'border-transparent text-zinc-500 hover:text-zinc-300'
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Architecture Breakdown</span>
          </button>
          <button
            onClick={() => setModalTab('code')}
            className={`pb-2.5 px-3 border-b-2 transition-all flex items-center gap-1.5 ${
              modalTab === 'code'
                ? 'border-white text-white font-medium'
                : 'border-transparent text-zinc-500 hover:text-zinc-300'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Architecture Snippet</span>
          </button>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 text-sm select-text flex-1">
          {modalTab === 'overview' && (
            <div className="space-y-5">
              <div>
                <h4 className="text-xs font-mono uppercase text-zinc-500 tracking-wider mb-2">
                  Executive Summary
                </h4>
                <p className="text-zinc-300 leading-relaxed text-sm">{project.description}</p>
              </div>

              {/* Benchmarks Matrix */}
              <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 font-mono text-center">
                <div className="p-3 rounded-lg bg-zinc-950/60 border border-zinc-800/80">
                  <div className="text-[10px] text-zinc-500 uppercase">
                    {project.benchmarks.label1}
                  </div>
                  <div className="text-sm sm:text-base font-bold text-white mt-1">
                    {project.benchmarks.val1}
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-zinc-950/60 border border-zinc-800/80">
                  <div className="text-[10px] text-zinc-500 uppercase">
                    {project.benchmarks.label2}
                  </div>
                  <div className="text-sm sm:text-base font-bold text-emerald-400 mt-1">
                    {project.benchmarks.val2}
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-zinc-950/60 border border-zinc-800/80">
                  <div className="text-[10px] text-zinc-500 uppercase">
                    {project.benchmarks.label3}
                  </div>
                  <div className="text-sm sm:text-base font-bold text-sky-400 mt-1">
                    {project.benchmarks.val3}
                  </div>
                </div>
              </div>

              {/* Core Features */}
              <div>
                <h4 className="text-xs font-mono uppercase text-zinc-500 tracking-wider mb-2.5">
                  Key Engineering Deliverables
                </h4>
                <div className="space-y-2">
                  {project.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 text-xs text-zinc-300 font-sans"
                    >
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" />
                      <span className="leading-relaxed">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Tags */}
              <div>
                <h4 className="text-xs font-mono uppercase text-zinc-500 tracking-wider mb-2">
                  Technical Stack
                </h4>
                <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-zinc-900 text-zinc-300 border border-zinc-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {modalTab === 'arch' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-3 font-mono text-xs">
                <div className="flex items-start gap-3">
                  <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 font-bold shrink-0">
                    Frontend
                  </span>
                  <span className="text-zinc-300">
                    {project.architectureDetails?.frontend ||
                      'Component architecture with clean state boundaries and fast edge asset delivery.'}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 font-bold shrink-0">
                    Backend API
                  </span>
                  <span className="text-zinc-300">
                    {project.architectureDetails?.backend ||
                      'Stateless RESTful APIs with CSRF protection, token authorization, and rate limiting.'}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 font-bold shrink-0">
                    Database
                  </span>
                  <span className="text-zinc-300">
                    {project.architectureDetails?.database ||
                      'Relational MySQL / PostgreSQL with indexed queries, transactional integrity, and Redis caching.'}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 font-bold shrink-0">
                    Infrastructure
                  </span>
                  <span className="text-zinc-300">
                    {project.architectureDetails?.infra ||
                      'CI/CD automated deployment with cloud-hosted SSL certificates and CDN asset distribution.'}
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 text-xs text-zinc-400 leading-relaxed font-sans">
                <div className="font-semibold text-zinc-200 mb-1 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Production Reliability Guarantee</span>
                </div>
                Architected with decoupled tiers to guarantee failover isolation, high read
                scalability, and strict role-based permission control.
              </div>
            </div>
          )}

          {modalTab === 'code' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
                <span>Architecture Implementation Pattern</span>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1 px-2.5 py-1 rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-300 transition-colors"
                >
                  {copiedCode ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                  <span>{copiedCode ? 'Copied' : 'Copy Snippet'}</span>
                </button>
              </div>
              <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 font-mono text-xs text-zinc-300 overflow-x-auto">
                <pre className="whitespace-pre-wrap">{project.codePreview}</pre>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-zinc-800 bg-zinc-950 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs font-mono text-zinc-500">
            {project.repoLabel ? (
              <span className="flex items-center gap-1.5">
                <GitHubIcon className="w-3.5 h-3.5" />
                <span>{project.repoLabel}</span>
              </span>
            ) : project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white flex items-center gap-1.5"
              >
                <GitHubIcon className="w-3.5 h-3.5" />
                <span>View GitHub Repository</span>
              </a>
            ) : (
              <span>Commercial Production Platform</span>
            )}
          </div>

          <div className="flex items-center gap-2">
            {project.secondaryLive && (
              <a
                href={project.secondaryLive}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-mono text-xs transition-colors border border-zinc-800 flex items-center gap-1.5"
              >
                <span>Alternate Portal</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg bg-white hover:bg-zinc-200 text-zinc-950 font-semibold font-mono text-xs transition-colors shadow-sm flex items-center gap-1.5"
              >
                <span>Launch Live Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
