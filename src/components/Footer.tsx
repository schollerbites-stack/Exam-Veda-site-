import React from 'react';
import { ArrowUp, ShieldCheck, Heart, Github, Instagram, Mail } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { EduVedaLogo } from './EduVedaLogo';

interface FooterProps {
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/80 pt-12 pb-8 text-slate-600 dark:text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100 dark:border-slate-800/80">
          
          {/* Logo & Info */}
          <div className="flex items-center gap-3">
            <EduVedaLogo size={38} className="rounded-xl" />
            <div>
              <span className="font-bold text-slate-900 dark:text-white text-base">
                {siteConfig.appName}
              </span>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Competitive Exam Preparation Android App
              </p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Home
            </a>
            <a
              href="#features"
              onClick={(e) => handleNavClick(e, '#features')}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Features
            </a>
            <a
              href="#screenshots"
              onClick={(e) => handleNavClick(e, '#screenshots')}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Screenshots
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, '#about')}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              About
            </a>
            <a
              href="#developer"
              onClick={(e) => handleNavClick(e, '#developer')}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Developer
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Contact
            </a>
            <button
              id="footer-privacy-link"
              onClick={onOpenPrivacy}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
          </div>

          {/* Back to Top */}
          <button
            id="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors flex items-center gap-1.5 text-xs font-semibold"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Copyright & Credit */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400 text-center sm:text-left">
          <div>
            © 2026 {siteConfig.appName}. All rights reserved.
          </div>
          <div className="font-medium text-slate-700 dark:text-slate-300">
            Developed by <span className="font-bold text-blue-600 dark:text-blue-400">{siteConfig.developer.name}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
