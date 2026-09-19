import React, { useState } from 'react';
import { Mail, Instagram, Github, Send, Copy, Check, ExternalLink, MessageSquare, Info } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const Contact: React.FC = () => {
  const { contact, developer } = siteConfig;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [message, setMessage] = useState({ name: '', subject: '', body: '' });

  const isEmailSet = contact.email && !contact.email.includes('YOUR_');
  const isInstaSet = contact.instagram && !contact.instagram.includes('YOUR_');
  const isGithubSet = contact.github && !contact.github.includes('YOUR_');

  const handleCopyEmail = () => {
    if (isEmailSet) {
      navigator.clipboard.writeText(contact.email);
    } else {
      navigator.clipboard.writeText("contact@examveda.app");
    }
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const recipient = isEmailSet ? contact.email : "contact@examveda.app";
    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(message.subject || 'Exam Veda Inquiry')}&body=${encodeURIComponent(`Hi Aarav,\n\n${message.body}\n\nFrom: ${message.name}`)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Contact & Support
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {contact.supportNote}
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Left: Contact Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            {/* Email Card */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white">Email Address</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Direct inquiries & feedback</p>
                </div>
              </div>

              <div className="flex items-center justify-between bg-slate-50 dark:bg-slate-800/80 p-2.5 rounded-xl border border-slate-200/60 dark:border-slate-700/60 text-xs">
                <span className="font-mono text-slate-800 dark:text-slate-200 truncate mr-2">
                  {contact.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  title="Copy email address"
                  className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 shrink-0"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Instagram Card */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900 dark:text-white">Instagram</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">App updates & community</p>
                  </div>
                </div>

                {isInstaSet ? (
                  <a
                    href={contact.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-rose-50 dark:bg-rose-950/70 text-rose-700 dark:text-rose-300 hover:bg-rose-100 dark:hover:bg-rose-900 text-xs font-semibold flex items-center gap-1"
                  >
                    <span>Visit</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                    {contact.instagram}
                  </span>
                )}
              </div>
            </div>

            {/* GitHub Card */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white flex items-center justify-center">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900 dark:text-white">GitHub</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Code repositories & releases</p>
                  </div>
                </div>

                {isGithubSet ? (
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-semibold flex items-center gap-1"
                  >
                    <span>Visit</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                    {contact.github}
                  </span>
                )}
              </div>
            </div>

            {/* Quick config note */}
            <div className="p-3 bg-slate-100/70 dark:bg-slate-800/50 rounded-xl text-[11px] text-slate-500 dark:text-slate-400 flex items-start gap-2">
              <Info className="w-4 h-4 shrink-0 text-slate-400 mt-0.5" />
              <span>
                Edit your contact email and social accounts anytime in <code className="font-mono">src/config/siteConfig.ts</code>.
              </span>
            </div>

          </div>

          {/* Right: Quick Direct Message Form */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Send a Message to Developer
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-6">
                Have a question or suggestion? Fill out this quick form to open your default email client with your message pre-composed.
              </p>

              <form onSubmit={handleSendMessage} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={message.name}
                    onChange={(e) => setMessage({ ...message, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Subject / Topic
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    required
                    value={message.subject}
                    onChange={(e) => setMessage({ ...message, subject: e.target.value })}
                    placeholder="e.g. Study Material Suggestion, Bug Report"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="contact-body" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    id="contact-body"
                    rows={4}
                    required
                    value={message.body}
                    onChange={(e) => setMessage({ ...message, body: e.target.value })}
                    placeholder="Type your message here..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                  />
                </div>

                <button
                  id="send-message-btn"
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md shadow-blue-600/20 hover:shadow-lg transition-all active:scale-98 cursor-pointer text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Send via Email</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
