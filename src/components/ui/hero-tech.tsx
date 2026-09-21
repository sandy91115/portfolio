import { SystemInfrastructureFrame } from "./system-infrastructure-frame";
import { ArrowRight, ExternalLink } from "lucide-react";

export type HeroTechProps = {
  name?: string;
  role?: string;
  experience?: string;
  email?: string;
  githubUrl?: string;
  linkedinUrl?: string;
};

export function HeroTech({
  name = "Sandeep Chaudhary",
  role = "Full-Stack Backend Architect & Senior Software Developer",
  experience = "2.6+ Years Commercial Exp",
  email = "sandeepchaudhary46140@gmail.com",
  githubUrl = "https://github.com/sandy91115",
  linkedinUrl = "https://www.linkedin.com/in/sandeepchaudhary-dev/",
}: HeroTechProps) {

  return (
    <section className="relative pt-24 sm:pt-32 md:pt-36 pb-16 sm:pb-20 px-4 sm:px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Background Ambient Glowing Orbs */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] h-[300px] sm:h-[400px] bg-[#00f2fe]/10 blur-[100px] sm:blur-[140px] rounded-full" />
      <div className="pointer-events-none absolute top-1/3 left-1/3 w-[280px] sm:w-[500px] h-[200px] sm:h-[300px] bg-[#ff2c2c]/10 blur-[90px] sm:blur-[130px] rounded-full" />

      {/* Top Tagline & Status Pill - Classic & Refined */}
      <div className="flex flex-col items-center text-center space-y-4 sm:space-y-5 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-xl shadow-sm text-xs font-mono text-white/80">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
          </span>
          <span className="tracking-wide text-white/90 font-medium">Available for Senior Roles</span>
          <span className="text-white/30">•</span>
          <span className="text-[#00f2fe] font-semibold">{experience}</span>
          <span className="text-white/30">•</span>
          <span className="text-white/70 font-semibold">AIR 32 (Rank 1)</span>
        </div>

        {/* Classic, Elegant, Professional Name Heading */}
        <div className="relative group max-w-full my-1">
          {/* Subtle luxury ambient backglow */}
          <div className="absolute -inset-x-6 -inset-y-4 bg-gradient-to-r from-white/[0.08] via-[#00f2fe]/[0.08] to-white/[0.08] blur-3xl rounded-full opacity-60 pointer-events-none" />

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-tight break-words max-w-full relative select-none">
            <span className="bg-gradient-to-b from-white via-[#f8fafc] to-[#94a3b8] bg-clip-text text-transparent drop-shadow-[0_4px_35px_rgba(255,255,255,0.25)]">
              {name}
            </span>
          </h1>

          {/* Refined subtle accent rule */}
          <div className="w-24 sm:w-36 h-[1px] mx-auto mt-4 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </div>

        {/* Elegant Professional Subtitle & Bio */}
        <div className="max-w-3xl space-y-3 pt-1">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight text-white/95">
            {role}
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-white/65 leading-relaxed max-w-2xl mx-auto px-2 font-normal">
            Architecting high-concurrency microservices, sub-millisecond Redis caching layers, and enterprise RESTful backends that scale reliably under heavy traffic.
          </p>
        </div>

        {/* Eye-Catching Quick Tech Stack Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-1 font-mono text-[11px] sm:text-xs text-white/80 max-w-3xl">
          <span className="px-3 py-1.5 rounded-xl bg-black/60 border border-[#ff2c2c]/40 hover:border-[#ff2c2c] hover:bg-[#ff2c2c]/15 text-white transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(255,44,44,0.15)] hover:scale-105 cursor-default">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff2c2c] shadow-[0_0_6px_#ff2c2c]" />
            <span className="font-semibold">PHP 8.3 / Laravel</span>
          </span>
          <span className="px-3 py-1.5 rounded-xl bg-black/60 border border-emerald-400/40 hover:border-emerald-400 hover:bg-emerald-400/15 text-white transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(52,211,153,0.15)] hover:scale-105 cursor-default">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
            <span className="font-semibold">Node.js / Express</span>
          </span>
          <span className="px-3 py-1.5 rounded-xl bg-black/60 border border-[#00f2fe]/40 hover:border-[#00f2fe] hover:bg-[#00f2fe]/15 text-white transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,242,254,0.15)] hover:scale-105 cursor-default">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00f2fe] shadow-[0_0_6px_#00f2fe]" />
            <span className="font-semibold">PostgreSQL & MongoDB</span>
          </span>
          <span className="px-3 py-1.5 rounded-xl bg-black/60 border border-cyan-400/50 hover:border-cyan-400 hover:bg-cyan-400/15 text-[#00f2fe] transition-all flex items-center gap-1.5 shadow-[0_0_20px_rgba(0,242,254,0.25)] hover:scale-105 cursor-default">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00f2fe] animate-pulse shadow-[0_0_8px_#00f2fe]" />
            <span className="font-bold">Redis Caching (0.3ms)</span>
          </span>
          <span className="px-3 py-1.5 rounded-xl bg-black/60 border border-purple-400/40 hover:border-purple-400 hover:bg-purple-400/15 text-white transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(192,132,252,0.15)] hover:scale-105 cursor-default">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_6px_#c084fc]" />
            <span className="font-semibold">System Design (HLD/LLD)</span>
          </span>
          <span className="px-3 py-1.5 rounded-xl bg-black/60 border border-amber-400/50 hover:border-amber-400 hover:bg-amber-400/15 text-amber-300 transition-all flex items-center gap-1.5 shadow-[0_0_20px_rgba(251,191,36,0.2)] hover:scale-105 cursor-default">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_#fbbf24]" />
            <span className="font-bold">C++ DSA (AIR 32)</span>
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 pt-3 sm:pt-4 w-full max-w-md sm:max-w-none">
          <a
            href="#projects"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#ff2c2c] to-[#ff4141] hover:from-[#ff3838] hover:to-[#ff5252] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all shadow-[0_0_30px_rgba(255,44,44,0.55)] hover:shadow-[0_0_45px_rgba(255,44,44,0.8)] hover:scale-105 active:scale-95"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${email}`}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-black/60 hover:bg-white/15 border border-[#00f2fe]/40 hover:border-[#00f2fe] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase backdrop-blur-md transition-all shadow-[0_0_25px_rgba(0,242,254,0.2)] hover:shadow-[0_0_35px_rgba(0,242,254,0.45)] hover:scale-105 active:scale-95"
          >
            <span>Hire Sandeep</span>
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/15 text-white/90 hover:text-white text-xs sm:text-sm font-mono transition-all hover:scale-105 active:scale-95 shadow-sm"
          >
            <span>GitHub (29+)</span>
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-5 py-3.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/15 text-white/90 hover:text-white text-xs sm:text-sm font-mono transition-all hover:scale-105 active:scale-95 shadow-sm"
          >
            <span>LinkedIn</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#00f2fe]" />
          </a>
        </div>
      </div>

      {/* Centerpiece: High-Tech System Infrastructure Blueprint & 3D Interactive Centerpiece */}
      <div className="mt-8 sm:mt-12 relative z-20">
        <SystemInfrastructureFrame />
      </div>
    </section>
  );
}
