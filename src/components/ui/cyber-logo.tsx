import type { FC } from "react";

interface CyberLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  showText?: boolean;
}

export const CyberLogo: FC<CyberLogoProps> = ({
  size = "md",
  className = "",
  showText = false,
}) => {
  const sizeMap = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-14 h-14 text-lg",
  };

  const ringSizes = {
    sm: "w-9 h-9",
    md: "w-11 h-11",
    lg: "w-16 h-16",
  };

  return (
    <div className={`relative inline-flex items-center gap-3 select-none group cursor-pointer ${className}`}>
      {/* Outer Rotating Cyber Accent Ring */}
      <div className="relative flex items-center justify-center">
        <div
          className={`absolute ${ringSizes[size]} rounded-2xl border border-dashed border-[#00f2fe]/40 group-hover:border-[#ff2c2c]/70 transition-all duration-700 animate-spin`}
          style={{ animationDuration: "14s" }}
        />

        {/* Ambient Neon Glow */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-[#ff2c2c] to-[#00f2fe] opacity-50 blur-md group-hover:opacity-100 group-hover:blur-lg transition-all duration-300" />

        {/* Core Shield Shape */}
        <div
          className={`relative ${sizeMap[size]} rounded-xl bg-gradient-to-br from-[#0e111a] via-[#090b10] to-[#06070a] border border-white/20 group-hover:border-white/40 flex items-center justify-center font-black tracking-tighter shadow-[0_0_20px_rgba(0,242,254,0.35)] overflow-hidden transition-transform duration-300 group-hover:scale-105`}
        >
          {/* Internal diagonal cyber sheen */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />

          {/* Monogram SC with Stylized Tech Typography */}
          <div className="relative z-10 flex items-center font-mono">
            <span className="text-[#ff2c2c] font-black drop-shadow-[0_0_8px_rgba(255,44,44,0.8)]">S</span>
            <span className="text-[#00f2fe] font-black drop-shadow-[0_0_8px_rgba(0,242,254,0.8)]">C</span>
          </div>

          {/* Corner Cyber Accent Dots */}
          <div className="absolute top-0.5 right-0.5 w-1 h-1 rounded-full bg-[#00f2fe] opacity-80" />
          <div className="absolute bottom-0.5 left-0.5 w-1 h-1 rounded-full bg-[#ff2c2c] opacity-80" />
        </div>

        {/* Active System Pulse Reactor Beacon */}
        <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.9)]" />
        </span>
      </div>

      {/* Optional Accompanying Text */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 font-bold tracking-tight text-white text-sm">
            <span className="group-hover:text-[#00f2fe] transition-colors">Sandeep Chaudhary</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded bg-gradient-to-r from-[#ff2c2c]/20 to-[#00f2fe]/20 text-[#00f2fe] border border-[#00f2fe]/30 font-mono">
              AIR 32
            </span>
          </div>
          <div className="text-[11px] text-white/50 font-mono flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Senior Backend Architect</span>
          </div>
        </div>
      )}
    </div>
  );
};
