import React, { useState } from 'react';
import { Smartphone, ZoomIn, X } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { ScreenshotItem } from '../types';
import {
  LearningPathwaysScreen,
  HomeDashboardScreen,
  VedaAiCoachScreen,
  ChapterExplorerScreen,
} from './AppScreenshotsMockups';

export const Screenshots: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<ScreenshotItem | null>(null);

  const renderScreenMockup = (id: string, isModal = false) => {
    switch (id) {
      case 'screen-home-dashboard':
        return <HomeDashboardScreen isModal={isModal} />;
      case 'screen-learning-pathways':
        return <LearningPathwaysScreen isModal={isModal} />;
      case 'screen-veda-ai':
        return <VedaAiCoachScreen isModal={isModal} />;
      case 'screen-subject-chapters':
        return <ChapterExplorerScreen isModal={isModal} />;
      default:
        return <HomeDashboardScreen isModal={isModal} />;
    }
  };

  return (
    <section id="screenshots" className="py-16 md:py-24 bg-slate-100/60 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Official Android App Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            App Screenshots & Interface
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A real look into the {siteConfig.appName} Android interface — clean chapters, bilingual mock tests, and smart AI study assistance.
          </p>
        </div>

        {/* 4 App Screenshots Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteConfig.screenshots.map((screen) => (
            <div
              key={screen.id}
              id={`screenshot-${screen.id}`}
              className="group flex flex-col items-center"
            >
                {/* Device container */}
                <div className="w-full max-w-[280px] aspect-[9/19] rounded-[38px] p-3 bg-slate-900 dark:bg-slate-950 border-[3px] border-slate-700 dark:border-slate-800 shadow-xl group-hover:shadow-2xl group-hover:border-blue-500/60 transition-all duration-300 relative flex flex-col justify-between overflow-hidden">
                  
                  {/* Phone Notch */}
                  <div className="w-20 h-3.5 bg-slate-950 rounded-full mx-auto mb-1.5 flex items-center justify-center shrink-0 z-20">
                    <div className="w-6 h-1 bg-slate-800 rounded-full" />
                  </div>

                  {/* Screen viewport */}
                  <div className="flex-1 w-full rounded-[26px] overflow-hidden bg-slate-950 relative flex flex-col justify-between shadow-inner">
                    {/* Live High-Fidelity App Screen Mockup */}
                    <div className="w-full h-full relative">
                      {renderScreenMockup(screen.id, false)}
                      
                      {/* Hover Zoom overlay */}
                      <button
                        onClick={() => setSelectedImage(screen)}
                        aria-label={`View ${screen.title} screenshot`}
                        className="absolute inset-0 bg-blue-950/75 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white cursor-pointer gap-2 p-4 text-center z-30 backdrop-blur-[2px]"
                      >
                        <ZoomIn className="w-8 h-8 drop-shadow text-white" />
                        <span className="text-xs font-bold uppercase tracking-wider bg-blue-600 hover:bg-blue-500 text-white px-3 py-1 rounded-full shadow-md">
                          Tap to Enlarge
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Android Bottom Navigation Bar */}
                  <div className="py-1.5 flex justify-center shrink-0 z-20">
                    <div className="w-16 h-1 bg-slate-700 dark:bg-slate-800 rounded-full" />
                  </div>
                </div>

                {/* Caption below device */}
                <div className="mt-4 text-center max-w-[260px]">
                  <div className="flex items-center justify-center gap-1.5 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200/80 dark:border-blue-900">
                      {screen.tag}
                    </span>
                  </div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white">
                    {screen.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    {screen.subtitle}
                  </p>
                </div>
              </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-md w-full bg-slate-900 rounded-3xl p-5 text-white border border-slate-800 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-lg text-white">{selectedImage.title}</h3>
                  <span className="text-[10px] bg-blue-900/60 text-blue-300 font-bold px-2 py-0.5 rounded">
                    {selectedImage.tag}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">{selectedImage.subtitle}</p>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                aria-label="Close image modal"
                className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Inner Phone Canvas */}
            <div className="w-full max-w-[320px] mx-auto aspect-[9/18.5] rounded-[38px] p-3 bg-slate-950 border-[3px] border-slate-700 shadow-2xl overflow-hidden flex flex-col justify-between">
              
              {/* Notch */}
              <div className="w-20 h-3 bg-slate-950 rounded-full mx-auto mb-1 flex items-center justify-center shrink-0">
                <div className="w-6 h-1 bg-slate-800 rounded-full" />
              </div>

              {/* Screen Body */}
              <div className="flex-1 w-full rounded-[24px] overflow-hidden bg-slate-950">
                {renderScreenMockup(selectedImage.id, true)}
              </div>

              {/* Bottom bar */}
              <div className="py-1 flex justify-center shrink-0">
                <div className="w-14 h-1 bg-slate-700 rounded-full" />
              </div>
            </div>

            {/* Modal Footer Note */}
            <div className="mt-4 pt-3 border-t border-slate-800 text-center text-xs text-slate-400">
              Exam Veda Android Application • High Performance Study Hub
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

