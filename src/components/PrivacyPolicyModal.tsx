import React from 'react';
import { X, ShieldCheck, Lock, FileText } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const { privacyPolicy } = siteConfig;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-policy-title"
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 shadow-2xl max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 id="privacy-policy-title" className="text-xl font-bold">
                Privacy Policy
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Exam Veda • Last updated {privacyPolicy.lastUpdated}
              </p>
            </div>
          </div>
          <button
            id="close-privacy-btn"
            onClick={onClose}
            aria-label="Close Privacy Policy"
            className="p-2 rounded-xl text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Policy Body */}
        <div className="overflow-y-auto py-5 space-y-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed pr-2">
          <div className="p-3.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/50 text-xs text-blue-800 dark:text-blue-200">
            This Privacy Policy applies to the <strong>Exam Veda</strong> mobile application and official download website developed by <strong>{siteConfig.developer.name}</strong>.
          </div>

          {privacyPolicy.sections.map((section, idx) => (
            <div key={idx} className="space-y-1.5">
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                {section.title}
              </h3>
              <p>{section.content}</p>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-xs"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
