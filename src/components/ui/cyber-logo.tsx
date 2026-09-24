import type { FC } from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showText?: boolean;
}

export const CyberLogo: FC<LogoProps> = ({ size = 'md', className = '', showText = false }) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-9 h-9 text-xs',
    lg: 'w-11 h-11 text-sm',
  };

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <div
        className={`relative ${sizeClasses[size]} rounded-xl bg-gradient-to-b from-zinc-800 to-zinc-900 border border-zinc-700/60 flex items-center justify-center font-bold tracking-tight shadow-sm overflow-hidden group`}
      >
        {/* Subtle top light sheen */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Initials */}
        <span className="text-zinc-100 font-mono tracking-tighter">SC</span>

        {/* Subtle active status indicator */}
        <span className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.8)]" />
      </div>

      {showText && (
        <div className="leading-tight">
          <div className="font-semibold text-sm text-zinc-100">Sandeep Chaudhary</div>
          <div className="text-[11px] text-zinc-400 font-mono">Backend Architect</div>
        </div>
      )}
    </div>
  );
};

export default CyberLogo;
