import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, FileText, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { GlassCard } from '../ui/GlassCard';
import { MagneticButton } from '../ui/MagneticButton';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { ResumeModal } from '../ui/ResumeModal';

export const ContactSection: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      <section id="contact" className="py-24 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto relative z-10">
        <SectionHeader
          number="06"
          badge="Contact"
          title="Get In Touch"
          subtitle={`Let's build something meaningful together.\nWhether it's an internship, freelance project or collaboration, I'd love to hear from you.`}
        />

        {/* 2-Column Desktop Layout (60% / 40%) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch"
        >
          {/* LEFT COLUMN (60% / col-span-7): Large Handcrafted Contact Card */}
          <div className="lg:col-span-7 flex flex-col">
            <GlassCard
              glowColor="cyan"
              tiltEffect={false}
              className="w-full h-full p-8 md:p-10 lg:p-12 rounded-3xl border border-white/10 bg-[#0A0A0A]/80 backdrop-blur-2xl shadow-2xl flex flex-col justify-between group hover:border-cyan-500/30 transition-all duration-600"
            >
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
                  Let's Connect
                </h3>
                
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal mt-3 mb-8 max-w-xl">
                  Feel free to reach out directly via email, phone, or connect on social platforms. I'm always open to discussing new engineering challenges, ideas, or opportunities.
                </p>

                {/* Direct Info List */}
                <div className="space-y-4 mb-8">
                  {/* Email */}
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all group/item"
                  >
                    <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover/item:scale-110 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block font-medium">
                        Email
                      </span>
                      <span className="text-sm font-mono font-bold text-slate-100 group-hover/item:text-cyan-300 transition-colors break-all">
                        {PERSONAL_INFO.email}
                      </span>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all group/item"
                  >
                    <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover/item:scale-110 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block font-medium">
                        Phone
                      </span>
                      <span className="text-sm font-mono font-bold text-slate-100 group-hover/item:text-cyan-300 transition-colors">
                        {PERSONAL_INFO.phone}
                      </span>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                    <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block font-medium">
                        Location
                      </span>
                      <span className="text-sm font-mono font-bold text-slate-100">
                        {PERSONAL_INFO.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-white/10">
                <MagneticButton
                  onClick={() => setIsResumeOpen(true)}
                  variant="primary"
                  className="py-2.5 px-5 text-xs font-mono"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  <span>View Resume</span>
                </MagneticButton>

              <MagneticButton
                href={PERSONAL_INFO.github}
                target="_blank"
                variant="secondary"
                className="py-2.5 px-4 text-xs font-mono"
              >
                <GithubIcon className="w-4 h-4 mr-2 text-slate-300" />
                <span>GitHub</span>
              </MagneticButton>

              <MagneticButton
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                variant="secondary"
                className="py-2.5 px-4 text-xs font-mono"
              >
                <LinkedinIcon className="w-4 h-4 mr-2 text-indigo-400" />
                <span>LinkedIn</span>
              </MagneticButton>
            </div>
          </GlassCard>
        </div>

        {/* RIGHT COLUMN (40% / col-span-5): Availability Card */}
        <div className="lg:col-span-5 flex flex-col">
          <GlassCard
            glowColor="cyan"
            tiltEffect={false}
            className="w-full h-full p-8 md:p-10 lg:p-12 rounded-3xl border border-white/10 bg-[#0A0A0A]/80 backdrop-blur-2xl shadow-2xl flex flex-col justify-between group hover:border-cyan-500/30 transition-all duration-600"
          >
            <div>
              <h3 className="text-2xl font-bold font-display text-white tracking-tight">
                Currently Available
              </h3>

              {/* Status Header */}
              <div className="flex items-center gap-2.5 mt-4 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_#34d399]" />
                <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider uppercase">
                  Open for
                </span>
              </div>

              {/* Open For Bullets */}
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-sm text-slate-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Software Engineering Internships</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Freelance Projects</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Open Source Collaboration</span>
                </li>
              </ul>

              {/* Response Time Indicator */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 mb-8">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block font-medium mb-1">
                  Response Time
                </span>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-slate-300 font-semibold">
                  <Clock className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Usually within 24 hours.</span>
                </div>
              </div>
            </div>

            {/* Premium CTA Button */}
            <MagneticButton
              href={`mailto:${PERSONAL_INFO.email}`}
              variant="primary"
              className="w-full py-3.5 justify-center text-sm font-bold shadow-lg shadow-cyan-500/10"
            >
              <Mail className="w-4 h-4 mr-2" />
              <span>Let's Talk</span>
            </MagneticButton>
          </GlassCard>
        </div>
      </motion.div>
      </section>

      {/* Interactive Resume Modal Popup */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </>
  );
};

export default ContactSection;
