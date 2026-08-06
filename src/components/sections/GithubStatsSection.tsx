import React from 'react';
import { GitCommit, GitPullRequest, Star, Terminal, Code2 } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { GlassCard } from '../ui/GlassCard';

export const GithubStatsSection: React.FC = () => {
  // Generate 52 weeks x 7 days contribution visualizer matrix
  const days = Array.from({ length: 112 }, () => {
    const intensity = Math.floor(Math.random() * 5); // 0-4
    return intensity;
  });

  const getIntensityColor = (level: number) => {
    switch (level) {
      case 1: return 'bg-cyan-950 border-cyan-800/50';
      case 2: return 'bg-cyan-800 border-cyan-600/50';
      case 3: return 'bg-cyan-600 border-cyan-400/50 shadow-[0_0_8px_#38bdf8]';
      case 4: return 'bg-cyan-400 border-cyan-200 shadow-[0_0_12px_#38bdf8]';
      default: return 'bg-white/5 border-white/5';
    }
  };

  return (
    <section id="github-stats" className="py-24 px-4 md:px-8 relative z-10 max-w-6xl mx-auto">
      <SectionHeader
        number="10"
        badge="Open Source & Commits"
        title="Live GitHub Engineering Metrics"
        subtitle="Transparent commit stream, pull request activity, and open-source contributions."
      />

      <GlassCard glowColor="cyan" className="p-8 md:p-10 border border-cyan-500/30 space-y-8">
        {/* Top Summary Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
              <GitCommit className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-xl font-bold font-mono text-slate-100">3,840+</span>
              <span className="text-[10px] font-mono text-slate-400">Total Commits (2025)</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
              <GitPullRequest className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-xl font-bold font-mono text-slate-100">248</span>
              <span className="text-[10px] font-mono text-slate-400">PRs Merged</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400">
              <Star className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-xl font-bold font-mono text-slate-100">1,290</span>
              <span className="text-[10px] font-mono text-slate-400">GitHub Stars</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-pink-500/10 text-pink-400">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-xl font-bold font-mono text-slate-100">99.4%</span>
              <span className="text-[10px] font-mono text-slate-400">TypeScript / GLSL</span>
            </div>
          </div>
        </div>

        {/* Contribution Visualizer Matrix */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono text-slate-300 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>Contribution Activity Stream</span>
            </span>
            <div className="flex items-center gap-1 text-[10px] font-mono text-slate-400">
              <span>Less</span>
              <span className="w-2.5 h-2.5 rounded bg-white/5" />
              <span className="w-2.5 h-2.5 rounded bg-cyan-950" />
              <span className="w-2.5 h-2.5 rounded bg-cyan-800" />
              <span className="w-2.5 h-2.5 rounded bg-cyan-600" />
              <span className="w-2.5 h-2.5 rounded bg-cyan-400" />
              <span>More</span>
            </div>
          </div>

          <div className="grid grid-flow-col grid-rows-7 gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {days.map((level, idx) => (
              <div
                key={idx}
                className={`w-3.5 h-3.5 rounded-[3px] border ${getIntensityColor(level)} transition-all hover:scale-125 cursor-pointer`}
                title={`Day ${idx + 1}: ${level * 3 + 1} contributions`}
              />
            ))}
          </div>
        </div>

        {/* Top Languages Distribution Bar */}
        <div className="space-y-3 pt-4 border-t border-white/10">
          <div className="flex justify-between text-xs font-mono text-slate-300">
            <span>Language Composition</span>
            <span className="text-cyan-400">100% Verified Code</span>
          </div>

          <div className="h-3 rounded-full overflow-hidden flex bg-white/5 border border-white/10 p-0.5">
            <div className="h-full bg-cyan-400 rounded-l-full w-[65%]" title="TypeScript (65%)" />
            <div className="h-full bg-indigo-500 w-[20%]" title="React / TSX (20%)" />
            <div className="h-full bg-purple-500 w-[10%]" title="GLSL / WebGL (10%)" />
            <div className="h-full bg-pink-500 rounded-r-full w-[5%]" title="CSS / Tailwind (5%)" />
          </div>

          <div className="flex flex-wrap gap-4 text-[10px] font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400" /> TypeScript (65%)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-indigo-500" /> React / TSX (20%)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-purple-500" /> GLSL Shaders (10%)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-pink-500" /> Tailwind CSS (5%)
            </span>
          </div>
        </div>
      </GlassCard>
    </section>
  );
};
