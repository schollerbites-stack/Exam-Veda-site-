import React, { useState } from 'react';
import {
  Download,
  Smartphone,
  CheckCircle,
  ShieldCheck,
  Lock,
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { ExamVedaLogo } from './ExamVedaLogo';
import { downloadExamVeda } from '../utils/download';

export const ApkDownload: React.FC = () => {
  const [downloadStarted, setDownloadStarted] = useState(false);

  const appMeta = {
    version: "v2.4.0",
    releaseDate: "Latest Stable 2026",
    fileSize: "5.42 MB",
    packageId: "com.aaravmalik.examveda",
    minAndroid: "Android 7.0 & above",
    developer: siteConfig.developer.name,
    license: "Free & Ad-Free",
    sha256: "Verified SHA-256 Checksum",
  };

  const handleDownload = async (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    setDownloadStarted(true);
    await downloadExamVeda(e);
    setTimeout(() => {
      setDownloadStarted(false);
    }, 4000);
  };

  return (
    <section id="download" className="py-16 md:py-24 bg-gradient-to-b from-transparent via-blue-50/40 to-transparent dark:via-blue-950/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Official Android APK Package</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Download Exam Veda
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Get the full version of Exam Veda for Android. Free, secure, and built specifically for competitive exam aspirants.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* MAIN PROFESSIONAL DOWNLOAD CARD */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-slate-800 shadow-xl relative overflow-hidden">
            
            {/* Top Accent Gradient Bar */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-400" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: App Icon, Info & Primary Download CTA */}
              <div className="lg:col-span-7 flex flex-col items-start space-y-5">
                
                {/* Logo & Title */}
                <div className="flex items-center gap-4">
                  <div className="relative group">
                    <ExamVedaLogo size={72} className="rounded-2xl shadow-lg shadow-blue-900/30" />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900 flex items-center justify-center text-white text-[10px]">
                      ✓
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                        {siteConfig.appName}
                      </h3>
                      <span className="text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                        {appMeta.version}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Developed by <strong className="text-slate-800 dark:text-slate-200 font-semibold">{appMeta.developer}</strong>
                    </p>
                  </div>
                </div>

                {/* App Specs Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 w-full pt-1">
                  <div className="bg-slate-50 dark:bg-slate-800/80 p-2.5 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">File Size</span>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200">{appMeta.fileSize}</span>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-800/80 p-2.5 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Requirement</span>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Android 7.0+</span>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-800/80 p-2.5 rounded-xl border border-slate-200/60 dark:border-slate-700/60 col-span-2 sm:col-span-1">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Architecture</span>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Universal ARM</span>
                  </div>
                </div>

                {/* Primary Download CTA Button */}
                <div className="pt-2 w-full">
                  <button
                    id="apk-primary-download-btn"
                    onClick={handleDownload}
                    className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 shadow-xl shadow-blue-600/30 hover:shadow-2xl hover:shadow-blue-600/40 transition-all text-base active:scale-98 cursor-pointer group"
                  >
                    <Download className={`w-5 h-5 transition-transform ${downloadStarted ? 'animate-bounce' : 'group-hover:translate-y-0.5'}`} />
                    <span>{downloadStarted ? 'Starting Download...' : 'Download APK (5.42 MB)'}</span>
                  </button>
                </div>

                {/* Safety & Integrity Guarantees */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400 pt-1">
                  <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
                    <ShieldCheck className="w-4 h-4" />
                    Clean & Virus-Free Package
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                    Google Play Protect Compatible
                  </span>
                </div>

              </div>

              {/* Right Column: 3-Step Simple Installation Guide */}
              <div className="lg:col-span-5 bg-slate-50 dark:bg-slate-800/70 p-6 rounded-2xl border border-slate-200/70 dark:border-slate-700/70">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xs uppercase tracking-wider font-bold text-slate-700 dark:text-slate-300">
                    How to Install on Android
                  </h4>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold">
                    3 Simple Steps
                  </span>
                </div>
                
                <ol className="space-y-3.5 text-xs text-slate-600 dark:text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-[10px]">
                      1
                    </span>
                    <div>
                      <strong className="text-slate-900 dark:text-white block">Tap "Download APK":</strong>
                      Save the <code className="text-[11px] bg-slate-200 dark:bg-slate-700 px-1 py-0.5 rounded">ExamVeda.apk</code> file to your device.
                    </div>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-[10px]">
                      2
                    </span>
                    <div>
                      <strong className="text-slate-900 dark:text-white block">Allow Unknown Sources:</strong>
                      If prompted by Android, enable <em>"Install unknown apps"</em> for your browser.
                    </div>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-[10px]">
                      3
                    </span>
                    <div>
                      <strong className="text-slate-900 dark:text-white block">Open & Study:</strong>
                      Launch Exam Veda and start preparing with Notes, Tests, & PYQs!
                    </div>
                  </li>
                </ol>

                <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-700 text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                  <span>No login or payment required to begin revision.</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
