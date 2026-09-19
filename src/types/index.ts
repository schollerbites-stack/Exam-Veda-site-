export interface FeatureItem {
  id: string;
  title: string;
  iconName: string; // Lucide icon name identifier
  category: string;
  badge?: string;
  description: string;
  highlights: string[];
}

export interface ScreenshotItem {
  id: string;
  title: string;
  subtitle: string;
  path: string;
  tag: string;
  headline?: string;
  badge?: string;
  highlights?: string[];
}

export interface SocialLink {
  platform: string;
  label: string;
  url: string;
  placeholderText?: string;
  icon: 'github' | 'instagram' | 'email' | 'linkedin' | 'twitter' | 'telegram' | 'globe';
}

export interface DeveloperConfig {
  name: string;
  role: string;
  location: string;
  photoUrl: string;
  bio: string[];
  skills: string[];
  email: string;
  githubUrl: string;
  instagramUrl: string;
  linkedinUrl?: string;
  telegramUrl?: string;
}

export interface SiteConfig {
  appName: string;
  appTagline: string;
  appShortDescription: string;
  appType: string;
  apkDownloadUrl: string;
  apkDownloadNote: string;
  versionDisplay?: string; // Optional if provided
  developer: DeveloperConfig;
  features: FeatureItem[];
  screenshots: ScreenshotItem[];
  aboutApp: {
    title: string;
    description: string[];
    targetAudience: string[];
    keyHighlights: {
      title: string;
      description: string;
      icon: string;
    }[];
  };
  contact: {
    email: string;
    instagram: string;
    github: string;
    telegram?: string;
    linkedin?: string;
    supportNote: string;
  };
  privacyPolicy: {
    lastUpdated: string;
    sections: {
      title: string;
      content: string;
    }[];
  };
}
