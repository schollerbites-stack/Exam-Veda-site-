import React from 'react';
import { Layers, Languages, ShieldCheck, CheckCircle2, GraduationCap } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const AboutApp: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>About The Application</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About {siteConfig.appName}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {siteConfig.aboutApp.title}
          </p>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Purpose & Philosophy */}
          <div className="lg:col-span-7 space-y-5 bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Why {siteConfig.appName} Exists
            </h3>
            
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              {siteConfig.aboutApp.description.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Core Value Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-100 dark:border-slate-800">
              {siteConfig.aboutApp.keyHighlights.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60">
                  <div className="font-bold text-xs text-slate-900 dark:text-white mb-1">
                    {item.title}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Target Exams & Categories */}
          <div className="lg:col-span-5 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white shadow-xl flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-blue-200 bg-white/15 px-3 py-1 rounded-full">
                Supported Exams
              </span>
              <h3 className="text-2xl font-bold mt-4 mb-2 text-white">
                Who Is Exam Veda For?
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 mb-6 leading-relaxed">
                Exam Veda is tailored for dedicated students and job aspirants preparing for government examinations across India:
              </p>

              <ul className="space-y-3 text-xs sm:text-sm">
                {siteConfig.aboutApp.targetAudience.map((target, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 bg-white/10 backdrop-blur-xs p-3 rounded-xl border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0 mt-0.5" />
                    <span className="text-blue-50 font-medium">{target}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-white/15 text-xs text-blue-100">
              Designed with a lightweight architecture so students can practice effectively even on basic mobile devices.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
