import React, { useState } from 'react';
import { Sparkles, Check, ArrowRight, Calculator } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { GlassCard } from '../ui/GlassCard';
import { MagneticButton } from '../ui/MagneticButton';
import { SERVICES } from '../../data/portfolioData';

export const ServicesSection: React.FC = () => {
  // Scope Calculator State
  const [selectedService, setSelectedService] = useState(SERVICES[0].id);
  const [has3D, setHas3D] = useState(true);
  const [needDesign, setNeedDesign] = useState(false);
  const [urgency, setUrgency] = useState<'standard' | 'express'>('standard');

  const calculateEstimate = () => {
    let base = 4500;
    if (selectedService === '3d-webgl') base = 6500;
    if (selectedService === 'perf-audit') base = 2800;

    if (has3D && selectedService !== '3d-webgl') base += 2000;
    if (needDesign) base += 1500;
    if (urgency === 'express') base *= 1.3;

    return Math.round(base);
  };

  return (
    <section id="services" className="py-24 px-4 md:px-8 relative z-10 max-w-7xl mx-auto">
      <SectionHeader
        number="08"
        badge="Engineering Services"
        title="High-End Consulting & Build Offerings"
        subtitle="Specialized engagement models for startups and design studios aiming to build world-class digital products."
      />

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {SERVICES.map((service) => (
          <GlassCard
            key={service.id}
            glowColor={service.popular ? 'cyan' : 'purple'}
            className="p-8 flex flex-col justify-between relative"
          >
            {service.popular && (
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-[10px] font-mono uppercase font-bold">
                Most Requested
              </div>
            )}

            <div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 w-fit text-cyan-400 mb-6">
                <Sparkles className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold font-display text-slate-100 mb-2">{service.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-6 font-normal">
                {service.shortDescription}
              </p>

              <div className="space-y-2.5 mb-8">
                {service.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="block text-[10px] font-mono text-slate-400 uppercase">Starting From</span>
                <span className="text-xl font-bold font-mono text-cyan-400">{service.startingPrice}</span>
              </div>
              <span className="text-xs font-mono text-slate-400">{service.estimatedDays}</span>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Interactive Project Scope & Cost Estimator Card */}
      <GlassCard glowColor="indigo" className="p-8 md:p-10 border border-indigo-500/30">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-indigo-500/20 text-indigo-400">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold font-display text-slate-100">Interactive Scope & Cost Estimator</h3>
            <p className="text-xs text-slate-400">Configure your project specs for an instant estimated budget range.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
          {/* Select Service */}
          <div>
            <label className="block text-xs font-mono text-slate-300 uppercase mb-2">Service Type</label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full p-3 rounded-xl glass-panel text-xs font-mono text-slate-200 border border-white/10 focus:border-indigo-400 outline-none"
            >
              {SERVICES.map((s) => (
                <option key={s.id} value={s.id} className="bg-slate-900 text-slate-200">
                  {s.title}
                </option>
              ))}
            </select>
          </div>

          {/* Options Toggles */}
          <div className="space-y-3">
            <label className="block text-xs font-mono text-slate-300 uppercase">Add-On Features</label>
            <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={has3D}
                onChange={(e) => setHas3D(e.target.checked)}
                className="rounded accent-indigo-500"
              />
              <span>Interactive 3D WebGL Scenes</span>
            </label>
            <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={needDesign}
                onChange={(e) => setNeedDesign(e.target.checked)}
                className="rounded accent-indigo-500"
              />
              <span>Full Figma UI/UX Design Token Suite</span>
            </label>
          </div>

          {/* Urgency */}
          <div>
            <label className="block text-xs font-mono text-slate-300 uppercase mb-2">Timeline Velocity</label>
            <div className="flex gap-2">
              <button
                onClick={() => setUrgency('standard')}
                className={`flex-1 py-2.5 rounded-xl text-xs font-mono transition-all ${
                  urgency === 'standard'
                    ? 'bg-indigo-600 text-white font-bold'
                    : 'glass-panel text-slate-400 hover:text-white'
                }`}
              >
                Standard (2-3 Wks)
              </button>
              <button
                onClick={() => setUrgency('express')}
                className={`flex-1 py-2.5 rounded-xl text-xs font-mono transition-all ${
                  urgency === 'express'
                    ? 'bg-indigo-600 text-white font-bold'
                    : 'glass-panel text-slate-400 hover:text-white'
                }`}
              >
                Express Surge (1 Wk)
              </button>
            </div>
          </div>
        </div>

        {/* Calculated Result Row */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="block text-xs font-mono text-slate-400 uppercase">Estimated Investment</span>
            <span className="text-3xl font-bold font-mono text-gradient-cyan">
              ${calculateEstimate().toLocaleString()} USD
            </span>
          </div>

          <MagneticButton href="#contact" variant="primary">
            <span>Lock In Scope & Book Call</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </MagneticButton>
        </div>
      </GlassCard>
    </section>
  );
};
