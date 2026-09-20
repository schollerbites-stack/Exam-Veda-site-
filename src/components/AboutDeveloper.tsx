import React, { useState } from 'react';
import { Github, Instagram, Mail, Terminal, MapPin } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const AboutDeveloper: React.FC = () => {
  const [imgError, setImgError] = useState(false);
  const { developer } = siteConfig;

  const activePhotoSrc = developer.photoUrl || "/images/aarav.svg";

  // Safe checks for placeholders
  const isEmailSet = developer.email && !developer.email.includes('YOUR_');
  const isGithubSet = developer.githubUrl && !developer.githubUrl.includes('YOUR_');
  const isInstaSet = developer.instagramUrl && !developer.instagramUrl.includes('YOUR_');

  return (
    <section id="developer" className="py-16 md:py-24 bg-slate-100/50 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950/70 text-purple-700 dark:text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>Behind The Project</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About the Developer
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Meet the developer behind {siteConfig.appName}.
          </p>
        </div>

        {/* Developer Profile Card */}
        <div className="max-w-3xl mx-auto bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-200/80 dark:border-slate-800 shadow-md">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
            
            {/* Circular Profile Photo */}
            <div className="shrink-0 flex flex-col items-center">
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 shadow-lg relative">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 dark:bg-slate-800 flex items-center justify-center relative shadow-inner">
                  {!imgError ? (
                    <img
                      src={activePhotoSrc}
                      alt={developer.name}
                      referrerPolicy="no-referrer"
                      onError={() => setImgError(true)}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    /* Elegant Initials / Avatar placeholder when photo fails */
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white select-none">
                      <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                        {developer.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <span className="mt-3 inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                <MapPin className="w-3 h-3 text-blue-500" />
                <span>{developer.location}</span>
              </span>
            </div>

            {/* Profile Bio & Content */}
            <div className="flex-1 text-center sm:text-left space-y-4">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                  {developer.name}
                </h3>
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-1">
                  {developer.role}
                </p>
              </div>

              {/* Bio paragraphs */}
              <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {developer.bio.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Skills / Focus Pills */}
              <div className="pt-2 flex flex-wrap gap-2 justify-center sm:justify-start">
                {developer.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Social / Connect Buttons */}
              <div className="pt-4 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                {/* GitHub */}
                <a
                  id="developer-github-link"
                  href={isGithubSet ? developer.githubUrl : "#contact"}
                  target={isGithubSet ? "_blank" : undefined}
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-900 text-white dark:bg-slate-800 dark:text-slate-100 hover:bg-slate-800 dark:hover:bg-slate-700 transition-colors shadow-2xs"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>

                {/* Instagram */}
                <a
                  id="developer-instagram-link"
                  href={isInstaSet ? developer.instagramUrl : "#contact"}
                  target={isInstaSet ? "_blank" : undefined}
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 hover:bg-rose-100 dark:hover:bg-rose-900/60 transition-colors border border-rose-200 dark:border-rose-800/60"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                </a>

                {/* Email Direct */}
                <a
                  id="developer-email-link"
                  href={isEmailSet ? `mailto:${developer.email}` : "#contact"}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/60 transition-colors border border-blue-200 dark:border-blue-800/60"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};


