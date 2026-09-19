import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ApkDownload } from './components/ApkDownload';
import { Features } from './components/Features';
import { Screenshots } from './components/Screenshots';
import { AboutApp } from './components/AboutApp';
import { AboutDeveloper } from './components/AboutDeveloper';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';

export default function App() {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-blue-600 selection:text-white transition-colors duration-300">
        
        {/* Navigation Bar */}
        <Header onOpenPrivacy={() => setPrivacyOpen(true)} />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* Hero Section */}
          <Hero />

          {/* Download APK Section */}
          <ApkDownload />

          {/* Features Section */}
          <Features />

          {/* Screenshots Gallery Section */}
          <Screenshots />

          {/* About Exam Veda */}
          <AboutApp />

          {/* About Developer Aarav Malik */}
          <AboutDeveloper />

          {/* Contact & Social Links */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer onOpenPrivacy={() => setPrivacyOpen(true)} />

        {/* Privacy Policy Modal */}
        <PrivacyPolicyModal
          isOpen={privacyOpen}
          onClose={() => setPrivacyOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}
