import { SiteConfig } from '../types';

/**
 * ============================================================================
 * EXAM VEDA — WEBSITE & DOWNLOAD PORTAL CONFIGURATION
 * ============================================================================
 * 
 * Edit all your app, developer, download links, screenshots, and contact
 * details in this single file.
 */

// 1. APK DOWNLOAD LINK (Direct Download for Android)
export const APK_DOWNLOAD_URL = "https://files.catbox.moe/t5nqk6.apk";

// 2. DEVELOPER PHOTO (Supports local asset /images/aarav.svg, external URL, or user photo)
export const DEVELOPER_PHOTO = "/images/aarav.svg";

// 3. APP SCREENSHOTS (Official Exam Veda App Showcase)
export const APP_SCREENSHOTS = [
  {
    id: "screen-home-dashboard",
    title: "Home Dashboard",
    headline: "Unified Study Hub & Subject Topics",
    subtitle: "Categorized subjects (History, Polity, Geography) with chapter MCQs, study notes, and mock tests",
    path: "/screenshots/home-dashboard.png",
    tag: "Study Hub",
    badge: "Bilingual UI",
    highlights: ["इतिहास (History)", "सिंधु घाटी सभ्यता (Indus Valley)", "5 MCQs & Mock Tests"]
  },
  {
    id: "screen-learning-pathways",
    title: "Learning Pathways & Tracks",
    headline: "Complete Learning & Verified Pathways",
    subtitle: "Multi-layer security, Cloud learning sync, UPSC/State PSC track, and SSC/Banking exam boosters",
    path: "/screenshots/learning-pathways.png",
    tag: "Cloud Learning",
    badge: "Smart Sync",
    highlights: ["UPSC & State PSC Tracks", "Cloud Sync Across Devices", "60% Completed Progress"]
  },
  {
    id: "screen-veda-ai",
    title: "Veda AI Study Coach",
    headline: "Aura of Knowledge, Power of AI",
    subtitle: "Multi-model AI tutor (Groq, Gemini, DeepSeek & offline Vedmantra engine) for instant doubt solving",
    path: "/screenshots/veda-ai.png",
    tag: "AI Coach",
    badge: "24/7 Doubt Engine",
    highlights: ["Groq & Gemini Support", "Offline Vedmantra Engine", "1-Tap Concept Suggestions"]
  },
  {
    id: "screen-subject-chapters",
    title: "Subject & Chapter Explorer",
    headline: "Explore Detailed Subjects & Chapters",
    subtitle: "Structured syllabus breakdown with one-tap practice quizzes, comprehensive notes, and test series",
    path: "/screenshots/subject-chapters.png",
    tag: "Chapter Explorer",
    badge: "High-Yield",
    highlights: ["Detailed Chapter Breakdown", "Interactive Action Buttons", "Instant Revision Notes"]
  }
];

// 4. MAIN SITE CONFIGURATION OBJECT
export const siteConfig: SiteConfig = {
  appName: "Exam Veda",
  appTagline: "Your Smart Companion for Competitive Exam Preparation",
  appShortDescription: "Exam Veda is a study app for students preparing for competitive and government exams. It provides Notes, Mock Tests, PYQs, quizzes and subject/topic-wise study material in a simple Hindi + English friendly interface.",
  appType: "Competitive Exam Preparation Android App",
  
  apkDownloadUrl: APK_DOWNLOAD_URL,
  apkDownloadNote: "Download and install the latest version of Exam Veda.",

  // Developer Profile
  developer: {
    name: "Aarav Malik",
    role: "Android Developer & Creator of Exam Veda",
    location: "India",
    photoUrl: DEVELOPER_PHOTO,
    bio: [
      "Passionate Android developer dedicated to building accessible, student-centric digital learning tools.",
      "Created Exam Veda to solve the challenge of fragmented study resources for government and competitive exam aspirants by unifying high-quality notes, mock exams, and previous year papers into a distraction-free mobile experience."
    ],
    skills: ["Android Development", "Kotlin", "Clean Architecture", "UI/UX Design", "EdTech Solutions"],
    email: "aaravmalik128@gmail.com",
    instagramUrl: "https://www.instagram.com/aarav_malik_128?stkn=MTA2aXl3Z2JtaW5vNA==",
    githubUrl: "https://github.com/aaravmalik",
    linkedinUrl: "", // Optional
    telegramUrl: ""   // Optional
  },

  // 6 Real Features of Exam Veda
  features: [
    {
      id: "notes",
      title: "Comprehensive Notes",
      iconName: "BookOpen",
      category: "Study Material",
      badge: "Topic-wise",
      description: "Concise, high-yield revision notes organized by subjects and specific exam topics to help retain key concepts effortlessly.",
      highlights: [
        "Well-structured chapter summaries",
        "Key formulas and quick-reference points",
        "Distraction-free offline reading support"
      ]
    },
    {
      id: "mock-tests",
      title: "Real Exam Mock Tests",
      iconName: "FileCheck",
      category: "Assessment",
      badge: "Timed & Ranked",
      description: "Simulate authentic exam conditions with timed mock tests, sectional evaluations, and immediate solution reviews.",
      highlights: [
        "Full-length and sectional test papers",
        "Instant scorecards with negative marking",
        "Detailed question-by-question explanations"
      ]
    },
    {
      id: "pyqs",
      title: "Previous Year Questions (PYQs)",
      iconName: "History",
      category: "Exam Archives",
      badge: "Year-wise",
      description: "Practice authentic past exam question papers categorized by year, examination tier, and subject difficulty.",
      highlights: [
        "Authentic papers from previous exam cycles",
        "Step-by-step verified answer keys",
        "Filter by exam type, year, and topic"
      ]
    },
    {
      id: "topic-practice",
      title: "Topic-wise Practice",
      iconName: "Target",
      category: "Mastery",
      badge: "Adaptive",
      description: "Strengthen specific weak areas through targeted practice drills, daily micro-quizzes, and custom question sets.",
      highlights: [
        "Dedicated question banks for every subject",
        "Difficulty filters: Easy, Moderate, Advanced",
        "Bookmark tough questions for later review"
      ]
    },
    {
      id: "ai-learning",
      title: "AI-assisted Learning",
      iconName: "Sparkles",
      category: "Smart Study",
      badge: "Intelligent",
      description: "Leverage smart study assistance to receive personalized revision suggestions and clear tricky conceptual doubts.",
      highlights: [
        "Smart identification of weak focus areas",
        "Personalized daily revision recommendations",
        "Concise conceptual doubt explanations"
      ]
    },
    {
      id: "bilingual-support",
      title: "Hindi + English Interface",
      iconName: "Languages",
      category: "Accessibility",
      badge: "Dual Language",
      description: "Switch seamlessly between Hindi and English across notes, mock tests, and question explanations without losing context.",
      highlights: [
        "One-tap language toggle on questions & notes",
        "Accurate Hindi & English terminology",
        "Equal coverage across both language mediums"
      ]
    }
  ],

  // App Screenshots
  screenshots: APP_SCREENSHOTS,

  // About Exam Veda Information
  aboutApp: {
    title: "Empowering Competitive Exam Aspirants",
    description: [
      "Exam Veda was built with a singular mission: to make competitive and government exam preparation more structured, accessible, and organized.",
      "Instead of juggling scattered PDFs, unorganized Telegram groups, and slow websites, Exam Veda brings authentic previous year questions, structured notes, timed mock assessments, and topic-wise practice into one intuitive Android app.",
      "Whether you are revising on the commute or attempting a full-length timed mock test at home, Exam Veda is engineered to be lightweight, responsive, and easy to use in both Hindi and English."
    ],
    targetAudience: [
      "Staff Selection Commission (SSC CGL, CHSL, CPO, MTS, GD)",
      "Banking Exams (IBPS PO/Clerk, SBI PO/Clerk, RBI Assistant)",
      "Railway Recruitment Board (RRB NTPC, Group D, ALP)",
      "State Public Service Commissions (State PSCs, SI, Police, Patwari)",
      "Teaching Eligibility Exams (CTET, State TETs, KVS, DSSSB)",
      "Defense & Other Central/State Government Recruitments"
    ],
    keyHighlights: [
      {
        title: "All-in-One Repository",
        description: "Study notes, test series, PYQs, and daily quizzes without switching between multiple apps.",
        icon: "Layers"
      },
      {
        title: "Bilingual Convenience",
        description: "Full Hindi and English language support designed specifically for Indian exam patterns.",
        icon: "Languages"
      },
      {
        title: "Distraction-Free Focus",
        description: "Fast, clean, student-first Android user interface with zero unnecessary clutter.",
        icon: "ShieldCheck"
      }
    ]
  },

  // Contact Information
  contact: {
    email: "aaravmalik128@gmail.com",
    instagram: "https://www.instagram.com/aarav_malik_128?stkn=MTA2aXl3Z2JtaW5vNA==",
    github: "https://github.com/aaravmalik",
    telegram: "",
    linkedin: "",
    supportNote: "Have feedback, found a bug, or want to suggest study material? Reach out via email or connect on social platforms."
  },

  // Privacy Policy
  privacyPolicy: {
    lastUpdated: "January 2026",
    sections: [
      {
        title: "1. Information We Collect",
        content: "Exam Veda is built with user privacy as a priority. The app stores study progress, bookmarks, and quiz scores locally on your device. We do not sell or monetize personal student data."
      },
      {
        title: "2. App Permissions",
        content: "Exam Veda requires minimal device permissions strictly necessary for app functionality, such as standard Internet access to download updated notes and mock tests, and local storage access for offline revision."
      },
      {
        title: "3. Third-Party Services",
        content: "Any third-party analytics or crash reporting tools used in the app follow standard data protection frameworks and do not collect personally identifiable private educational data."
      },
      {
        title: "4. Updates to This Policy",
        content: "Any future modifications to this Privacy Policy will be published directly on this website. Users are encouraged to review this page periodically."
      },
      {
        title: "5. Contact & Inquiries",
        content: "If you have any questions or suggestions regarding our Privacy Policy or data handling practices, please contact the developer via the official contact information listed on this website."
      }
    ]
  }
};
