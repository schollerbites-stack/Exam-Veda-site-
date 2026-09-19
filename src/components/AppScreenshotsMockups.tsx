import React from 'react';
import {
  Smartphone,
  BookOpen,
  Sparkles,
  ShieldCheck,
  CheckCircle,
  Clock,
  Award,
  Search,
  ChevronLeft,
  Volume2,
  Lock,
  Layers,
  FileText,
  Play,
  Copy,
  Send,
  Zap,
  Cpu,
  Brain,
  Check,
  Compass,
  Star,
  Globe,
  Share2,
  UserCheck,
} from 'lucide-react';
import { ExamVedaLogo } from './ExamVedaLogo';

// ============================================================================
// SCREEN 1: COMPLETE LEARNING & VERIFIED PATHWAYS
// ============================================================================
export const LearningPathwaysScreen: React.FC<{ isModal?: boolean }> = ({ isModal = false }) => {
  return (
    <div className="w-full h-full bg-gradient-to-b from-[#0F1E42] via-[#091530] to-[#050C1F] text-white flex flex-col justify-between p-3 select-none text-[11px] font-sans">
      
      {/* Top Status Bar & App Header */}
      <div>
        <div className="flex items-center justify-between text-[10px] text-slate-400 mb-2 px-1">
          <span className="font-semibold text-white">10:46</span>
          <div className="flex items-center gap-1.5 text-[9px]">
            <span>4G</span>
            <span>20%</span>
          </div>
        </div>

        {/* In-App Header */}
        <div className="flex items-center justify-between bg-slate-900/90 border border-slate-800 rounded-xl px-2.5 py-1.5 mb-2.5 shadow-sm">
          <div className="flex items-center gap-1.5">
            <ExamVedaLogo size={20} className="rounded-md" />
            <span className="font-bold text-xs text-white">Exam Veda</span>
          </div>
          <div className="flex items-center gap-2">
            <Volume2 className="w-3.5 h-3.5 text-slate-400" />
            <span className="bg-indigo-600/90 text-white text-[9px] font-bold px-2 py-0.5 rounded-md">
              + + एडमिन
            </span>
          </div>
        </div>

        {/* VEDA CLOUD LEARNING BOX */}
        <div className="bg-[#12234D]/80 border border-blue-500/30 rounded-2xl p-2.5 mb-2.5 shadow-md">
          <div className="text-center font-black text-[11px] text-blue-200 tracking-wider uppercase mb-2">
            VEDA CLOUD LEARNING
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            <div className="bg-slate-900/70 border border-slate-700/50 rounded-xl p-2 flex flex-col items-center text-center">
              <div className="text-blue-400 text-sm mb-1">💻📱</div>
              <span className="text-[9px] font-bold leading-tight text-slate-200 uppercase">
                SYNC PROGRESS ACROSS DEVICES
              </span>
            </div>
            <div className="bg-slate-900/70 border border-slate-700/50 rounded-xl p-2 flex flex-col items-center text-center">
              <div className="text-emerald-400 text-sm mb-1">👥📊</div>
              <span className="text-[9px] font-bold leading-tight text-slate-200 uppercase">
                JOIN STUDY GROUPS & SHARE
              </span>
            </div>
            <div className="bg-slate-900/70 border border-slate-700/50 rounded-xl p-2 flex flex-col items-center text-center">
              <div className="text-amber-400 text-sm mb-1">🔒📜</div>
              <span className="text-[9px] font-bold leading-tight text-slate-200 uppercase">
                ENCRYPTED & VERIFIED CONTENT
              </span>
            </div>
            <div className="bg-slate-900/70 border border-slate-700/50 rounded-xl p-2 flex flex-col items-center text-center">
              <div className="text-purple-400 text-sm mb-1">🏛️🇮🇳</div>
              <span className="text-[9px] font-bold leading-tight text-slate-200 uppercase">
                LIVE SESSIONS WITH COACHES
              </span>
            </div>
          </div>
        </div>

        {/* TRACK CARD 1: UPSC/STATE PSC */}
        <div className="bg-gradient-to-r from-slate-900 via-[#102044] to-slate-900 border-2 border-indigo-500/50 rounded-2xl p-2.5 mb-2 shadow-lg relative overflow-hidden">
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center text-[10px] font-bold">
                🏛️
              </div>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/30 text-amber-200 font-bold uppercase text-[8px]">
                PRO PATHWAY
              </span>
            </div>
            <span className="font-extrabold text-[10px] text-white leading-tight">
              UPSC / STATE PSC TRACK - Phase-1
            </span>
          </div>

          <div className="flex items-center justify-between text-[9px] mb-2">
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40">
              60% COMPLETED
            </span>
            <span className="text-slate-300">📖 3 Chapters Verified</span>
          </div>

          <button className="w-full py-1.5 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-bold text-[10px] uppercase tracking-wider shadow-md hover:brightness-110">
            RESUME LEARNING
          </button>
        </div>

        {/* TRACK CARD 2: SSC/BANK EXAM BOOSTER */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-2 shadow-sm">
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-1.5">
              <span className="text-xs">🎖️</span>
              <span className="font-bold text-[10px] text-slate-200">
                SSC/BANK EXAM BOOSTER - Quant
              </span>
            </div>
            <span className="text-[8px] px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 font-semibold">
              Adaptive Practice
            </span>
          </div>
          <div className="flex items-center justify-between text-[9px] mb-1.5">
            <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold">
              25% COMPLETED
            </span>
          </div>
          <button className="w-full py-1 rounded-xl bg-slate-800 text-slate-300 font-semibold text-[9px] uppercase">
            RESUME LEARNING
          </button>
        </div>
      </div>

      {/* Bottom Floating Pill & Navigation Bar */}
      <div className="pt-2">
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-1.5 flex items-center justify-around text-slate-400 text-[8px]">
          <div className="flex flex-col items-center text-blue-400 font-bold">
            <span>🏠</span>
            <span>Home</span>
          </div>
          <div className="flex flex-col items-center">
            <span>📖</span>
            <span>नोट्स</span>
          </div>
          <div className="flex flex-col items-center">
            <span>🕉️</span>
            <span>हिन्दी</span>
          </div>
          <div className="flex flex-col items-center">
            <span>✨</span>
            <span>Veda AI</span>
          </div>
          <div className="flex flex-col items-center">
            <span>➕</span>
            <span>+ एडमिन</span>
          </div>
        </div>
      </div>

    </div>
  );
};

// ============================================================================
// SCREEN 2: HOME DASHBOARD & SUBJECT HUB
// ============================================================================
export const HomeDashboardScreen: React.FC<{ isModal?: boolean }> = ({ isModal = false }) => {
  return (
    <div className="w-full h-full bg-slate-950 text-slate-100 flex flex-col justify-between p-3 select-none text-[11px] font-sans">
      
      <div>
        {/* Top Status */}
        <div className="flex items-center justify-between text-[10px] text-slate-400 mb-2 px-1">
          <span className="font-semibold text-white">10:46</span>
          <div className="flex items-center gap-1.5 text-[9px]">
            <span>4G</span>
            <span>20%</span>
          </div>
        </div>

        {/* In-App Header */}
        <div className="flex items-center justify-between bg-slate-900 border border-slate-800 rounded-xl px-2.5 py-1.5 mb-2">
          <div className="flex items-center gap-1.5">
            <ExamVedaLogo size={20} className="rounded-md" />
            <span className="font-bold text-xs text-white">Exam Veda</span>
          </div>
          <div className="flex items-center gap-2">
            <Volume2 className="w-3.5 h-3.5 text-slate-400" />
            <span className="bg-indigo-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-md">
              + + एडमिन
            </span>
          </div>
        </div>

        {/* Back Link & Add Note Button */}
        <div className="flex items-center justify-between mb-2 text-[10px]">
          <span className="text-slate-400 flex items-center gap-1 hover:text-white cursor-pointer">
            ← सभी श्रेणियों पर वापस जाएं
          </span>
          <span className="bg-indigo-700/80 text-white text-[9px] px-2 py-0.5 rounded font-bold">
            + + नया लेसन / नोट्स
          </span>
        </div>

        {/* Subject Header Banner: History / इतिहास */}
        <div className="bg-gradient-to-r from-[#172554] to-[#1E1B4B] border border-blue-500/40 rounded-2xl p-2.5 mb-2 shadow-md">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-lg">📜</span>
            <div>
              <span className="text-[9px] text-blue-200 block font-medium">
                श्रेणी / विषय • 2 लेसन्स • 10 कुल प्रश्न • 2 अध्याय नोट्स
              </span>
              <h4 className="font-black text-xs text-white">
                इतिहास (History)
              </h4>
            </div>
          </div>
          <p className="text-[9px] text-blue-100/80 line-clamp-1">
            प्राचीन, मध्यकालीन और आधुनिक भारत का संपूर्ण इतिहास और वस्तुनिष्ठ प्रश्न।
          </p>
        </div>

        {/* Dual Tab Buttons */}
        <div className="grid grid-cols-2 gap-1.5 mb-2">
          <button className="py-1 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-[9px] shadow-sm flex items-center justify-center gap-1">
            <span>📝 प्रश्न व मॉक टेस्ट (2)</span>
          </button>
          <button className="py-1 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-semibold text-[9px] flex items-center justify-center gap-1">
            <span>📖 अध्ययन नोट्स (Notes)</span>
          </button>
        </div>

        {/* Search Bar */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl px-2.5 py-1.5 mb-2 flex items-center gap-1.5 text-slate-400 text-[10px]">
          <Search className="w-3 h-3 text-slate-500" />
          <span>लेसन खोजें (जैसे: वैदिक काल)...</span>
        </div>

        {/* Chapter 1: Indus Valley Civilization */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-2.5 mb-2 shadow-sm">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[8px] font-bold text-slate-400 uppercase">
              अध्याय #1 <span className="text-emerald-400 font-bold bg-emerald-500/20 px-1 py-0.5 rounded ml-1">नोट्स उपलब्ध</span>
            </span>
          </div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm">🏛️</span>
            <span className="font-bold text-[10px] text-white">
              सिंधु घाटी सभ्यता (Indus Valley Civilization)
            </span>
          </div>
          <p className="text-[8px] text-slate-400 line-clamp-1 mb-2">
            हड़प्पा, मोहनजोदड़ो, लोथल, कालीबंगन एवं नगरीय योजना पर आधारित वस्तुनिष्ठ प्रश्न।
          </p>
          <div className="flex items-center gap-1.5">
            <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[8px] font-bold border border-slate-700">
              📚 5 MCQs
            </span>
            <span className="px-2 py-0.5 rounded bg-blue-900/50 text-blue-300 text-[8px] font-bold border border-blue-800">
              📖 नोट्स पढ़ें
            </span>
            <span className="px-2 py-0.5 rounded bg-emerald-600 text-white text-[8px] font-bold shadow-xs">
              ▶ मॉक टेस्ट दें
            </span>
          </div>
        </div>

        {/* Chapter 2: Vedic Age */}
        <div className="bg-slate-900/70 border border-slate-800/80 rounded-2xl p-2 shadow-sm">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[8px] font-bold text-slate-400">
              अध्याय #2 <span className="text-emerald-400 font-bold bg-emerald-500/20 px-1 py-0.5 rounded ml-1">नोट्स उपलब्ध</span>
            </span>
          </div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm text-amber-400 font-bold">ॐ</span>
            <span className="font-bold text-[10px] text-slate-200">
              वैदिक काल (Vedic Age)
            </span>
          </div>
          <div className="flex justify-end">
            <span className="px-2 py-0.5 rounded bg-emerald-700 text-white text-[8px] font-bold">
              ▶ क्विज़ दें
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="pt-2">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-1.5 flex items-center justify-around text-slate-400 text-[8px]">
          <div className="flex flex-col items-center text-blue-400 font-bold">
            <span>🏠</span>
            <span>होम</span>
          </div>
          <div className="flex flex-col items-center">
            <span>📖</span>
            <span>नोट्स</span>
          </div>
          <div className="flex flex-col items-center">
            <span>🕉️</span>
            <span>हिन्दी</span>
          </div>
          <div className="flex flex-col items-center">
            <span>✨</span>
            <span>Veda AI</span>
          </div>
          <div className="flex flex-col items-center">
            <span>➕</span>
            <span>+ एडमिन</span>
          </div>
        </div>
      </div>

    </div>
  );
};

// ============================================================================
// SCREEN 3: VEDA AI & MULTI-MODEL COACH
// ============================================================================
export const VedaAiCoachScreen: React.FC<{ isModal?: boolean }> = ({ isModal = false }) => {
  return (
    <div className="w-full h-full bg-gradient-to-b from-[#0B1528] via-[#091122] to-[#040A17] text-white flex flex-col justify-between p-3 select-none text-[11px] font-sans">
      
      <div>
        {/* Top Status */}
        <div className="flex items-center justify-between text-[10px] text-slate-400 mb-2 px-1">
          <span className="font-semibold text-white">10:46</span>
          <div className="flex items-center gap-1.5 text-[9px]">
            <span>4G</span>
            <span>20%</span>
          </div>
        </div>

        {/* AI Model Header */}
        <div className="flex items-center justify-between bg-slate-900 border border-slate-800 rounded-xl px-2.5 py-1.5 mb-2">
          <div className="flex items-center gap-1.5">
            <span className="text-amber-400 font-bold">ॐ</span>
            <span className="font-bold text-xs text-white">Veda AI</span>
            <span className="text-[9px] bg-blue-900/60 text-blue-300 px-1.5 py-0.5 rounded font-bold">
              वेद AI
            </span>
          </div>
          <div className="bg-slate-800 border border-slate-700 px-2 py-0.5 rounded-lg text-[9px] font-bold text-slate-200 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>GPT-OSS 1208</span>
          </div>
        </div>

        {/* AI Engine Selector Badges */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 mb-2 no-scrollbar text-[8px]">
          <span className="px-2 py-0.5 rounded-lg bg-indigo-600/80 text-white font-bold shrink-0 flex items-center gap-1">
            <Zap className="w-2.5 h-2.5" /> Groq 120B लाइटनिंग LPU
          </span>
          <span className="px-2 py-0.5 rounded-lg bg-purple-900/70 text-purple-200 font-bold shrink-0 border border-purple-700">
            🕉 वेदमंत्र 160% ऑफलाइन
          </span>
        </div>

        {/* AI Chat Bubble */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-2.5 mb-2 shadow-md">
          <div className="flex items-center justify-between mb-1 text-[9px] text-blue-400 font-bold">
            <span className="flex items-center gap-1">
              <span>🤖</span> Veda AI Study Coach
            </span>
            <Copy className="w-3 h-3 text-slate-500 cursor-pointer" />
          </div>
          <p className="text-[9px] text-slate-200 leading-relaxed mb-2 font-normal">
            <strong>नमस्ते! 🙏</strong> मैं Veda AI (वेद AI) हूँ — आपका मल्टी-एजेंट स्टडी गुरु व प्रतियोगी परीक्षा कोच।
            <br /><br />
            आप यहाँ <strong>Google Gemini, Groq Llama 3.3, DeepSeek</strong> या हमारे <strong>वेदमंत्र ऑफलाइन इंजन</strong> से इतिहास, संविधान, गणित एवं करंट अफेयर्स के डाउट पूछ सकते हैं।
          </p>
          <div className="text-[8px] text-slate-500 text-right">10:46 PM</div>
        </div>

        {/* Quick Suggestion Pills */}
        <div className="mb-2">
          <span className="text-[8px] text-amber-300 font-bold block mb-1">
            💡 त्वरित सुझाव (Quick Suggestions):
          </span>
          <div className="flex flex-wrap gap-1">
            <span className="bg-slate-800 border border-slate-700 text-slate-300 px-1.5 py-0.5 rounded-md text-[8px]">
              हड़प्पा सभ्यता
            </span>
            <span className="bg-slate-800 border border-slate-700 text-slate-300 px-1.5 py-0.5 rounded-md text-[8px]">
              मौलिक अधिकार
            </span>
            <span className="bg-slate-800 border border-slate-700 text-slate-300 px-1.5 py-0.5 rounded-md text-[8px]">
              भारत की नदियाँ
            </span>
          </div>
        </div>

        {/* Input Simulation */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl px-2.5 py-1.5 flex items-center justify-between text-slate-400 text-[9px]">
          <span className="line-clamp-1">Groq Cloud AI से कोई भी प्रश्न पूछें...</span>
          <div className="w-5 h-5 rounded-lg bg-indigo-600 text-white flex items-center justify-center shrink-0">
            <Send className="w-2.5 h-2.5" />
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="pt-2">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-1.5 flex items-center justify-around text-slate-400 text-[8px]">
          <div className="flex flex-col items-center">
            <span>🏠</span>
            <span>होम</span>
          </div>
          <div className="flex flex-col items-center">
            <span>📖</span>
            <span>नोट्स</span>
          </div>
          <div className="flex flex-col items-center">
            <span>🕉️</span>
            <span>हिन्दी</span>
          </div>
          <div className="flex flex-col items-center text-blue-400 font-bold">
            <span>✨</span>
            <span>Veda AI</span>
          </div>
          <div className="flex flex-col items-center">
            <span>➕</span>
            <span>+ एडमिन</span>
          </div>
        </div>
      </div>

    </div>
  );
};

// ============================================================================
// SCREEN 4: SUBJECT & CHAPTER EXPLORER
// ============================================================================
export const ChapterExplorerScreen: React.FC<{ isModal?: boolean }> = ({ isModal = false }) => {
  return (
    <div className="w-full h-full bg-gradient-to-b from-[#091224] via-[#050B17] to-[#02050D] text-white flex flex-col justify-between p-3 select-none text-[11px] font-sans">
      
      <div>
        {/* Top Status */}
        <div className="flex items-center justify-between text-[10px] text-slate-400 mb-2 px-1">
          <span className="font-semibold text-white">10:46</span>
          <div className="flex items-center gap-1.5 text-[9px]">
            <span>4G</span>
            <span>20%</span>
          </div>
        </div>

        {/* In-App Header */}
        <div className="flex items-center justify-between bg-slate-900 border border-slate-800 rounded-xl px-2.5 py-1.5 mb-2">
          <div className="flex items-center gap-1.5">
            <ExamVedaLogo size={20} className="rounded-md" />
            <span className="font-bold text-xs text-white">Exam Veda</span>
          </div>
          <div className="flex items-center gap-2">
            <Volume2 className="w-3.5 h-3.5 text-slate-400" />
            <span className="bg-indigo-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-md">
              + + एडमिन
            </span>
          </div>
        </div>

        {/* Section Header */}
        <div className="bg-[#101F42] border border-blue-500/40 rounded-2xl p-2.5 mb-2">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-base">🏛️</span>
            <div>
              <span className="text-[8px] text-blue-300 font-bold uppercase">SYLLABUS MODULE</span>
              <h4 className="font-extrabold text-xs text-white">इतिहास (History) Mastery</h4>
            </div>
          </div>
          <p className="text-[8px] text-slate-300">
            Chapter-wise breakdown with authentic previous year questions.
          </p>
        </div>

        {/* Highlighted Popup Card with Actions */}
        <div className="bg-slate-900 border-2 border-indigo-500/70 rounded-2xl p-2.5 mb-2 shadow-xl relative">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[8px] font-bold text-indigo-400 uppercase">
              अध्याय #1 • INDUS VALLEY
            </span>
            <span className="text-[8px] bg-emerald-500/20 text-emerald-300 font-bold px-1.5 py-0.5 rounded border border-emerald-500/30">
              नोट्स उपलब्ध
            </span>
          </div>
          
          <h4 className="font-extrabold text-[11px] text-white mb-1">
            सिंधु घाटी सभ्यता (Indus Valley Civilization)
          </h4>
          
          <p className="text-[8px] text-slate-300 line-clamp-2 mb-2">
            हड़प्पा, मोहनजोदड़ो, लोथल, कालीबंगन एवं नगरीय योजना पर आधारित महत्वपूर्ण वस्तुनिष्ठ प्रश्न।
          </p>

          <div className="grid grid-cols-3 gap-1">
            <button className="py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 text-[8px] font-bold">
              📚 5 MCQs
            </button>
            <button className="py-1 rounded-lg bg-blue-600 text-white text-[8px] font-bold shadow-xs">
              📖 नोट्स
            </button>
            <button className="py-1 rounded-lg bg-emerald-600 text-white text-[8px] font-bold shadow-xs">
              ▶ मॉक टेस्ट
            </button>
          </div>
        </div>

        {/* Chapter 2 */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-2 shadow-sm">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[8px] font-bold text-slate-400">अध्याय #2</span>
            <span className="text-[8px] text-amber-400 font-semibold">क्विज़ तैयार</span>
          </div>
          <div className="font-bold text-[10px] text-slate-200 mb-1">
            वैदिक काल (Vedic Age)
          </div>
          <div className="flex justify-between items-center text-[8px] text-slate-400">
            <span>ऋग्वैदिक व उत्तर वैदिक काल</span>
            <span className="text-emerald-400 font-bold">▶ क्विज़ दें</span>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="pt-2">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-1.5 flex items-center justify-around text-slate-400 text-[8px]">
          <div className="flex flex-col items-center">
            <span>🏠</span>
            <span>होम</span>
          </div>
          <div className="flex flex-col items-center text-blue-400 font-bold">
            <span>📖</span>
            <span>नोट्स</span>
          </div>
          <div className="flex flex-col items-center">
            <span>🕉️</span>
            <span>हिन्दी</span>
          </div>
          <div className="flex flex-col items-center">
            <span>✨</span>
            <span>Veda AI</span>
          </div>
          <div className="flex flex-col items-center">
            <span>➕</span>
            <span>+ एडमिन</span>
          </div>
        </div>
      </div>

    </div>
  );
};
