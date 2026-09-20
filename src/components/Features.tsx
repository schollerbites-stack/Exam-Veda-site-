import React from 'react';
import { BookOpen, FileCheck, History, Target, Sparkles, Languages, Check, Layers } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { ScrollReveal } from './ScrollReveal';

export const Features: React.FC = () => {
  // Helper to render proper icon based on icon name
  const renderIcon = (name: string) => {
    switch (name) {
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
      case 'FileCheck':
        return <FileCheck className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />;
      case 'History':
        return <History className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Target':
        return <Target className="w-6 h-6 text-purple-600 dark:text-purple-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-amber-600 dark:text-amber-400" />;
      case 'Languages':
        return <Languages className="w-6 h-6 text-rose-600 dark:text-rose-400" />;
      default:
        return <Layers className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
    }
  };

  return (
    <section id="features" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Built For Aspirants</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Key Features of {siteConfig.appName}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A comprehensive study suite designed to streamline preparation for competitive and government recruitments.
          </p>
        </div>

        {/* Feature Cards Grid (6 real features) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {siteConfig.features.map((feature, index) => (
            <ScrollReveal
              key={feature.id}
              direction="up"
              distance={20}
              delay={index * 80}
              duration={500}
              className="h-full"
            >
              <div
                id={`feature-card-${feature.id}`}
                className="h-full bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  {/* Header: Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {renderIcon(feature.iconName)}
                    </div>
                    {feature.badge && (
                      <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700">
                        {feature.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                    {feature.description}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                    {feature.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
