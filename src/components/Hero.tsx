import React from 'react';
import { Download, Compass, Sparkles, CheckCircle, Smartphone, Clock, Award, ShieldCheck, Languages } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { ExamVedaLogo } from './ExamVedaLogo';

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
    >
      {/* Background glowing ambiance */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Tag / Category Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/70 border border-blue-200/80 dark:border-blue-800/80 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-6 shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600 dark:bg-blue-400"></span>
              </span>
              <span>Official Android App • Hindi & English</span>
            </div>

            {/* Main App Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              {siteConfig.appName}
            </h1>

            {/* Sub-headline */}
            <p className="mt-3 text-xl sm:text-2xl font-semibold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {siteConfig.appTagline}
            </p>

            {/* Description */}
            <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              {siteConfig.appShortDescription}
            </p>

            {/* Key feature check bullets */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-xl text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Chapter-wise & Subject Notes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Real-time Timed Mock Tests</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Solved Previous Year Papers (PYQs)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>One-tap Hindi ↔ English Switching</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                id="hero-download-btn"
                onClick={() => scrollToSection('#download')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/35 transition-all transform active:scale-98 cursor-pointer text-base"
              >
                <Download className="w-5 h-5" />
                <span>Download APK</span>
              </button>

              <button
                id="hero-explore-btn"
                onClick={() => scrollToSection('#features')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 hover:bg-slate-50 dark:hover:bg-slate-700/60 shadow-xs transition-all active:scale-98 cursor-pointer text-base"
              >
                <Compass className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>Explore Features</span>
              </button>
            </div>

            {/* Quick Status Note */}
            <div className="mt-5 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Direct Android APK package. Clean, ad-free focus and 100% free to install.</span>
            </div>
          </div>

          {/* Right Hero: Professional Android App Mockup */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            
            {/* Decorative background aura */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-indigo-500/20 to-purple-500/20 rounded-3xl blur-2xl -z-10" />

            {/* Android Device Mockup Frame */}
            <div className="w-[300px] sm:w-[330px] rounded-[42px] p-3.5 bg-slate-900 dark:bg-slate-950 border-[3px] border-slate-700 dark:border-slate-800 shadow-2xl relative">
              
              {/* Phone Speaker & Notch */}
              <div className="w-32 h-4.5 bg-slate-950 rounded-full mx-auto mb-2 flex items-center justify-center gap-2 px-3">
                <div className="w-10 h-1 bg-slate-800 rounded-full" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-800" />
              </div>

              {/* Phone Inner Screen */}
              <div className="rounded-[32px] overflow-hidden bg-slate-50 dark:bg-slate-900 border border-slate-200/40 dark:border-slate-800 text-slate-900 dark:text-white select-none">
                
                {/* App Bar */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ExamVedaLogo size={30} className="rounded-lg shadow-sm" />
                      <div>
                        <div className="text-xs font-bold leading-tight">Exam Veda</div>
                        <div className="text-[10px] text-blue-100 opacity-90">Target: SSC & Banking 2026</div>
                      </div>
                    </div>
                    
                    {/* Bilingual toggle indicator */}
                    <div className="flex items-center gap-1 bg-white/20 backdrop-blur-xs px-2 py-0.5 rounded-full text-[10px] font-medium">
                      <Languages className="w-3 h-3" />
                      <span>हिं / EN</span>
                    </div>
                  </div>

                  {/* Daily Target Banner */}
                  <div className="mt-3 bg-white/15 backdrop-blur-xs rounded-xl p-2.5 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-amber-300" />
                      <span>Daily Mock Test #42</span>
                    </div>
                    <span className="text-[10px] font-bold bg-amber-400 text-slate-900 px-2 py-0.5 rounded-md">
                      Active
                    </span>
                  </div>
                </div>

                {/* App Content Scroll Simulation */}
                <div className="p-3.5 space-y-3 bg-slate-100/60 dark:bg-slate-900/90 text-xs">
                  
                  {/* Quick Category Grid */}
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-white dark:bg-slate-800 p-2.5 rounded-xl border border-slate-200/60 dark:border-slate-700/60 shadow-2xs">
                      <span className="text-base block">📚</span>
                      <span className="font-medium text-[11px] text-slate-700 dark:text-slate-200">Notes</span>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-2.5 rounded-xl border border-slate-200/60 dark:border-slate-700/60 shadow-2xs">
                      <span className="text-base block">📝</span>
                      <span className="font-medium text-[11px] text-slate-700 dark:text-slate-200">Mocks</span>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-2.5 rounded-xl border border-slate-200/60 dark:border-slate-700/60 shadow-2xs">
                      <span className="text-base block">📄</span>
                      <span className="font-medium text-[11px] text-slate-700 dark:text-slate-200">PYQs</span>
                    </div>
                  </div>

                  {/* Study Progress Card */}
                  <div className="bg-white dark:bg-slate-800 p-3 rounded-xl border border-slate-200/60 dark:border-slate-700/60 shadow-2xs">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-semibold text-slate-800 dark:text-slate-200 text-[11px]">General Knowledge & GS</span>
                      <span className="text-[10px] text-blue-600 dark:text-blue-400 font-bold">78%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-blue-600 h-full rounded-full w-[78%]" />
                    </div>
                    <div className="mt-2 flex items-center justify-between text-[10px] text-slate-500 dark:text-slate-400">
                      <span>42 Chapters Done</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-medium">Ready for Quiz</span>
                    </div>
                  </div>

                  {/* PYQ Recommended Set */}
                  <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-900/30 dark:to-purple-900/30 p-3 rounded-xl border border-indigo-200/50 dark:border-indigo-800/50">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-bold text-slate-800 dark:text-slate-100 text-[11px]">SSC CGL 2024 Tier-1</div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400">100 Questions • Solved</div>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[10px] font-bold">
                        →
                      </div>
                    </div>
                  </div>

                  {/* Quick Bottom Navigation Simulation */}
                  <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex justify-around text-slate-400 text-[10px]">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">Home</span>
                    <span>Subjects</span>
                    <span>Tests</span>
                    <span>Profile</span>
                  </div>
                </div>

                {/* Android Navigation Bar */}
                <div className="py-2 bg-slate-100 dark:bg-slate-900 flex justify-center">
                  <div className="w-24 h-1 bg-slate-400 dark:bg-slate-600 rounded-full" />
                </div>
              </div>
            </div>

            {/* Floating Highlights Badges */}
            <div className="absolute -left-6 top-1/4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-3 rounded-2xl shadow-xl flex items-center gap-2.5 hidden sm:flex animate-bounce duration-1000">
              <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <Award className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <p className="font-bold text-slate-800 dark:text-slate-100">PYQ Archive</p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">All Solved Papers</p>
              </div>
            </div>

            <div className="absolute -right-4 bottom-1/4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-3 rounded-2xl shadow-xl flex items-center gap-2.5 hidden sm:flex">
              <div className="w-8 h-8 rounded-xl bg-purple-100 dark:bg-purple-950/70 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <p className="font-bold text-slate-800 dark:text-slate-100">Smart Quizzes</p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">Hindi + English</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
