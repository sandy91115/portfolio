"use client";

import { useState, useId } from "react";
import { TechCore3D } from "./tech-core-3d";
import { RotateCw, ArrowLeft, CheckCircle2 } from "lucide-react";

export type SystemInfrastructureFrameProps = {
  className?: string;
};

interface TechTooltip {
  id: string;
  title: string;
  badge: string;
  color: string;
  glow: string;
  bullets: string[];
}

const TOOLTIPS: Record<string, TechTooltip> = {
  php: {
    id: "php",
    title: "PHP 8.3 / Laravel — Enterprise API Backend",
    badge: "50k+ Req/m",
    color: "#ff2c55",
    glow: "rgba(255, 44, 85, 0.4)",
    bullets: [
      "High-concurrency microservice APIs with <45ms response time",
      "Redis-backed asynchronous queue workers & event dispatchers",
      "Custom JWT & OAuth2 RBAC authorization middleware",
      "Zero-downtime deployment pipelines with atomic symlinks",
    ],
  },
  redis: {
    id: "redis",
    title: "Redis v7.2.1 — Sub-ms In-Memory Caching",
    badge: "0.3ms Latency",
    color: "#00f2fe",
    glow: "rgba(0, 242, 254, 0.4)",
    bullets: [
      "Sub-millisecond cache-aside architecture (99.4% hit ratio)",
      "Distributed locking via Redlock to prevent race conditions",
      "Token-bucket sliding-window API rate limiting",
      "Pub/Sub messaging pipelines for real-time WebSocket sync",
    ],
  },
  dsa: {
    id: "dsa",
    title: "C++ DSA (AIR 32) — Algorithmic Mastery",
    badge: "AIR 32 (Rank 1)",
    color: "#38bdf8",
    glow: "rgba(56, 189, 248, 0.4)",
    bullets: [
      "All India Rank 32 & State Rank 1 in national competitive exams",
      "500+ algorithmic problems solved on LeetCode & GeeksforGeeks",
      "Advanced Graph Algorithms (Dijkstra, Tarjan SCC), DP & Segment Trees",
      "Low-level memory optimization with cache-conscious data structures",
    ],
  },
  mysql: {
    id: "mysql",
    title: "MySQL 8.0.16 — Persistent Storage Tier",
    badge: "ACID Guaranteed",
    color: "#c084fc",
    glow: "rgba(192, 132, 252, 0.4)",
    bullets: [
      "InnoDB MVCC multi-version concurrency control",
      "B+ Tree composite index tuning (85% query speedup)",
      "Master-slave read replicas with connection pooling",
      "Zero-deadlock transactional integrity for mission-critical writes",
    ],
  },
  rack: {
    id: "rack",
    title: "Bare-Metal 4-Blade Server Rack",
    badge: "4x Nodes Online",
    color: "#00f2fe",
    glow: "rgba(0, 242, 254, 0.35)",
    bullets: [
      "4-Blade high-availability load-balanced cluster",
      "Nginx reverse proxy with TLS 1.3 & HTTP/2 multiplexing",
      "Dockerized microservice container orchestration & health probes",
    ],
  },
  cylinder: {
    id: "cylinder",
    title: "Tiered Data Pipeline (Redis + MySQL)",
    badge: "99.4% Cache Hit",
    color: "#38bdf8",
    glow: "rgba(56, 189, 248, 0.35)",
    bullets: [
      "Two-tier cache-aside pattern shielding primary storage",
      "Automatic cache invalidation on write transactions",
      "Durable ACID persistence on disk with sub-millisecond cached reads",
    ],
  },
};

export function SystemInfrastructureFrame({ className = "" }: SystemInfrastructureFrameProps) {
  const [is3DMode, setIs3DMode] = useState(false);
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const svgId = useId();

  const currentTooltip = activeNode ? TOOLTIPS[activeNode] : null;

  return (
    <div className={`relative w-full max-w-5xl mx-auto select-none ${className}`}>
      {/* Subtle Ambient Backglow matching the card palette */}
      <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-r from-[#00f2fe]/15 via-[#ff2c55]/10 to-[#00f2fe]/15 blur-3xl opacity-60 pointer-events-none" />

      {/* Main Container */}
      <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_20px_90px_rgba(0,0,0,0.9)] transition-all duration-300">
        {!is3DMode ? (
          /* High-Definition 1:1 Blueprint View (Exact Image from User) */
          <div className="relative w-full aspect-[945/306] rounded-2xl md:rounded-3xl overflow-hidden">
            {/* 2x Razor-Sharp Clean Image */}
            <img
              src="/system-infrastructure-hd.png"
              alt="System Infrastructure — 3D Cloud Server Rack & Data Pipeline"
              className="w-full h-full object-contain object-center pointer-events-none select-none"
              draggable={false}
            />

            {/* SVG Interactive Micro-Animations Layer */}
            <svg
              viewBox="0 0 945 306"
              className="absolute inset-0 w-full h-full pointer-events-none z-10"
            >
              <defs>
                <filter id={`${svgId}-laser-glow`} x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Operational Status Pulse Beacon */}
              <circle cx="56" cy="30" r="4.5" fill="none" stroke="#10b981" strokeWidth="1" opacity="0.6">
                <animate attributeName="r" values="3.5;7;3.5" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.8;0;0.8" dur="2s" repeatCount="indefinite" />
              </circle>

              {/* Latency Live Pulse Dot */}
              <circle cx="806" cy="30" r="1.5" fill="#00f2fe" filter={`url(#${svgId}-laser-glow)`}>
                <animate attributeName="opacity" values="1;0.3;1" dur="1.2s" repeatCount="indefinite" />
              </circle>

              {/* Animated Traveling Data Packet Pulses on Cables */}
              {/* 1. PHP/Laravel -> Server Blade 1 (Pink Pulse) */}
              <circle r="3" fill="#ff2c55" filter={`url(#${svgId}-laser-glow)`}>
                <animateMotion
                  dur="1.8s"
                  repeatCount="indefinite"
                  path="M 285 91 C 320 91, 335 120, 368 120"
                />
              </circle>

              {/* 2. C++ DSA -> Server Blade 4 (Cyan Pulse) */}
              <circle r="3" fill="#38bdf8" filter={`url(#${svgId}-laser-glow)`}>
                <animateMotion
                  dur="2.2s"
                  repeatCount="indefinite"
                  path="M 265 210 C 310 210, 330 196, 368 196"
                />
              </circle>

              {/* 3. Server -> Redis In-Memory Cache (Cyan Pulse) */}
              <circle r="3" fill="#00f2fe" filter={`url(#${svgId}-laser-glow)`}>
                <animateMotion
                  dur="1.6s"
                  repeatCount="indefinite"
                  path="M 488 116 C 520 116, 540 92, 585 92"
                />
              </circle>

              {/* 4. Server -> DB Cylinder Top Tier (Cyan Pulse) */}
              <circle r="2.5" fill="#38bdf8" filter={`url(#${svgId}-laser-glow)`}>
                <animateMotion
                  dur="2.0s"
                  repeatCount="indefinite"
                  path="M 488 116 C 510 116, 520 152, 542 152"
                />
              </circle>

              {/* 5. DB Cylinder -> MySQL Storage Tier (Purple Pulse) */}
              <circle r="2.5" fill="#c084fc" filter={`url(#${svgId}-laser-glow)`}>
                <animateMotion
                  dur="2.4s"
                  repeatCount="indefinite"
                  path="M 660 212 C 670 212, 675 214, 684 214"
                />
              </circle>

              {/* Blinking Micro LEDs on Server Rack Faceplates */}
              <circle cx="378" cy="115" r="1.5" fill="#10b981">
                <animate attributeName="opacity" values="1;0.2;1" dur="0.8s" repeatCount="indefinite" />
              </circle>
              <circle cx="383" cy="115" r="1.5" fill="#00f2fe">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="1.2s" repeatCount="indefinite" />
              </circle>
              <circle cx="378" cy="148" r="1.5" fill="#10b981">
                <animate attributeName="opacity" values="0.8;0.1;0.8" dur="1.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="378" cy="182" r="1.5" fill="#f59e0b">
                <animate attributeName="opacity" values="0.2;1;0.2" dur="0.9s" repeatCount="indefinite" />
              </circle>
              <circle cx="383" cy="182" r="1.5" fill="#00f2fe">
                <animate attributeName="opacity" values="1;0.4;1" dur="0.7s" repeatCount="indefinite" />
              </circle>
            </svg>

            {/* Interactive Hotspots Over the 4 Cards & Components */}
            {/* 1. PHP / Laravel Card Hotspot */}
            <div
              onClick={() => setActiveNode(activeNode === "php" ? null : "php")}
              onMouseEnter={() => setActiveNode("php")}
              onMouseLeave={() => setActiveNode(null)}
              className="absolute cursor-pointer z-20 rounded-xl transition-all"
              style={{
                left: "16.8%",
                top: "24.0%",
                width: "12.8%",
                height: "13.2%",
              }}
              title="Click or hover to inspect PHP/Laravel specifications"
            >
              <div
                className={`w-full h-full rounded-xl transition-all ${
                  activeNode === "php"
                    ? "bg-[#ff2c55]/20 shadow-[0_0_20px_rgba(255,44,85,0.6)] ring-1 ring-[#ff2c55]"
                    : "hover:bg-[#ff2c55]/10 hover:ring-1 hover:ring-[#ff2c55]/40"
                }`}
              />
            </div>

            {/* 2. C++ DSA (AIR 32) Card Hotspot */}
            <div
              onClick={() => setActiveNode(activeNode === "dsa" ? null : "dsa")}
              onMouseEnter={() => setActiveNode("dsa")}
              onMouseLeave={() => setActiveNode(null)}
              className="absolute cursor-pointer z-20 rounded-xl transition-all"
              style={{
                left: "13.8%",
                top: "62.8%",
                width: "14.2%",
                height: "13.2%",
              }}
              title="Click or hover to inspect C++ DSA specifications"
            >
              <div
                className={`w-full h-full rounded-xl transition-all ${
                  activeNode === "dsa"
                    ? "bg-[#38bdf8]/20 shadow-[0_0_20px_rgba(56,189,248,0.6)] ring-1 ring-[#38bdf8]"
                    : "hover:bg-[#38bdf8]/10 hover:ring-1 hover:ring-[#38bdf8]/40"
                }`}
              />
            </div>

            {/* 3. Redis v7.2.1 Card Hotspot */}
            <div
              onClick={() => setActiveNode(activeNode === "redis" ? null : "redis")}
              onMouseEnter={() => setActiveNode("redis")}
              onMouseLeave={() => setActiveNode(null)}
              className="absolute cursor-pointer z-20 rounded-xl transition-all"
              style={{
                left: "61.8%",
                top: "24.0%",
                width: "18.6%",
                height: "17.0%",
              }}
              title="Click or hover to inspect Redis caching specifications"
            >
              <div
                className={`w-full h-full rounded-xl transition-all ${
                  activeNode === "redis"
                    ? "bg-[#00f2fe]/20 shadow-[0_0_20px_rgba(0,242,254,0.6)] ring-1 ring-[#00f2fe]"
                    : "hover:bg-[#00f2fe]/10 hover:ring-1 hover:ring-[#00f2fe]/40"
                }`}
              />
            </div>

            {/* 4. MySQL 8.0.16 Card Hotspot */}
            <div
              onClick={() => setActiveNode(activeNode === "mysql" ? null : "mysql")}
              onMouseEnter={() => setActiveNode("mysql")}
              onMouseLeave={() => setActiveNode(null)}
              className="absolute cursor-pointer z-20 rounded-xl transition-all"
              style={{
                left: "72.4%",
                top: "62.8%",
                width: "14.0%",
                height: "13.8%",
              }}
              title="Click or hover to inspect MySQL storage specifications"
            >
              <div
                className={`w-full h-full rounded-xl transition-all ${
                  activeNode === "mysql"
                    ? "bg-purple-500/20 shadow-[0_0_20px_rgba(192,132,252,0.6)] ring-1 ring-purple-400"
                    : "hover:bg-purple-500/10 hover:ring-1 hover:ring-purple-400/40"
                }`}
              />
            </div>

            {/* 5. Server Rack Hotspot */}
            <div
              onClick={() => setActiveNode(activeNode === "rack" ? null : "rack")}
              onMouseEnter={() => setActiveNode("rack")}
              onMouseLeave={() => setActiveNode(null)}
              className="absolute cursor-pointer z-20 rounded-xl transition-all"
              style={{
                left: "37.0%",
                top: "24.5%",
                width: "13.8%",
                height: "54.0%",
              }}
              title="Click or hover to inspect Server Cluster specifications"
            >
              <div
                className={`w-full h-full rounded-xl transition-all ${
                  activeNode === "rack"
                    ? "bg-[#00f2fe]/15 shadow-[0_0_25px_rgba(0,242,254,0.4)] ring-1 ring-[#00f2fe]"
                    : "hover:bg-[#00f2fe]/5 hover:ring-1 hover:ring-[#00f2fe]/30"
                }`}
              />
            </div>

            {/* 6. Database Cylinder Hotspot */}
            <div
              onClick={() => setActiveNode(activeNode === "cylinder" ? null : "cylinder")}
              onMouseEnter={() => setActiveNode("cylinder")}
              onMouseLeave={() => setActiveNode(null)}
              className="absolute cursor-pointer z-20 rounded-xl transition-all"
              style={{
                left: "56.6%",
                top: "42.5%",
                width: "13.2%",
                height: "41.0%",
              }}
              title="Click or hover to inspect Database Storage specifications"
            >
              <div
                className={`w-full h-full rounded-xl transition-all ${
                  activeNode === "cylinder"
                    ? "bg-[#38bdf8]/15 shadow-[0_0_25px_rgba(56,189,248,0.4)] ring-1 ring-[#38bdf8]"
                    : "hover:bg-[#38bdf8]/5 hover:ring-1 hover:ring-[#38bdf8]/30"
                }`}
              />
            </div>

            {/* 7. Bottom-Left: "TOUCH & DRAG 360° TO INSPECT" Interactive Switcher Button */}
            <button
              onClick={() => setIs3DMode(true)}
              className="absolute z-30 cursor-pointer group flex items-center gap-1.5 transition-all rounded-md px-2 py-1"
              style={{
                left: "4.5%",
                bottom: "4.2%",
                width: "22%",
                height: "6.5%",
              }}
              title="Click to launch interactive 3D Orbit inspect mode"
            >
              <div className="w-full h-full flex items-center justify-start opacity-0 group-hover:opacity-100 bg-[#00f2fe]/15 rounded border border-[#00f2fe]/40 px-2 text-[9px] sm:text-[10px] font-mono text-[#00f2fe] font-bold tracking-wider transition-all">
                <span>ROTATE 3D ORBIT ↺</span>
              </div>
            </button>
          </div>
        ) : (
          /* Interactive 3D WebGL Canvas Mode */
          <div className="relative w-full h-[320px] sm:h-[420px] md:h-[480px] bg-[#04060c]">
            <TechCore3D
              mode="normal"
              accentColor="#00f2fe"
              secondaryColor="#3b82f6"
            />
            {/* Top Return Button */}
            <div className="absolute top-4 left-4 z-30 flex items-center gap-2">
              <button
                onClick={() => setIs3DMode(false)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/85 border border-[#00f2fe]/40 text-xs font-mono text-white hover:text-[#00f2fe] hover:border-[#00f2fe] backdrop-blur-md transition-all shadow-lg"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to Blueprint</span>
              </button>
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 border border-white/10 text-[11px] font-mono text-white/70">
                <RotateCw className="w-3 h-3 text-[#00f2fe] animate-spin" style={{ animationDuration: "8s" }} />
                <span>Touch & Drag anywhere to rotate 360°</span>
              </div>
            </div>
          </div>
        )}

        {/* Dynamic Architectural Tech Spec HUD (Appears when a node is hovered or clicked) */}
        {currentTooltip && (
          <div
            className="absolute bottom-3 left-1/2 -translate-x-1/2 z-40 w-[94%] max-w-2xl p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-black/90 border backdrop-blur-xl shadow-2xl animate-in fade-in zoom-in-95 duration-150"
            style={{
              borderColor: `${currentTooltip.color}60`,
              boxShadow: `0 10px 40px -10px ${currentTooltip.glow}`,
            }}
          >
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: currentTooltip.color, boxShadow: `0 0 8px ${currentTooltip.color}` }}
                />
                <h4 className="text-xs sm:text-sm font-bold text-white font-mono tracking-wide">
                  {currentTooltip.title}
                </h4>
              </div>
              <span
                className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold"
                style={{
                  backgroundColor: `${currentTooltip.color}20`,
                  color: currentTooltip.color,
                  border: `1px solid ${currentTooltip.color}50`,
                }}
              >
                {currentTooltip.badge}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px] text-white/80 font-sans">
              {currentTooltip.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-1.5">
                  <CheckCircle2
                    className="w-3 h-3 shrink-0 mt-0.5"
                    style={{ color: currentTooltip.color }}
                  />
                  <span className="leading-tight">{bullet}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
