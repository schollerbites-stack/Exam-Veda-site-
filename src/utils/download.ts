import { siteConfig } from '../config/siteConfig';

export const APK_FILE_URL = siteConfig.apkDownloadUrl || 'https://github.com/schollerbites-stack/Edu-Veda-apk-/releases/download/v1.2.0/Edu-Veda-2.0.1.apk';
export const CUSTOM_FILE_NAME = siteConfig.apkFileName || 'Edu-Veda-2.0.1.apk';

/**
 * Downloads the Edu Veda APK immediately without blocking JavaScript memory buffering.
 * Triggers native multi-threaded browser download instantly with clean file name.
 */
export function downloadEduVeda(e?: React.MouseEvent<HTMLElement> | MouseEvent) {
  if (e && typeof e.preventDefault === 'function') {
    e.preventDefault();
  }

  const fileUrl = APK_FILE_URL;
  const customFileName = CUSTOM_FILE_NAME;

  try {
    // 1. Instant Direct Anchor trigger (zero memory overhead, multi-thread native download)
    const a = document.createElement('a');
    a.href = fileUrl;
    a.setAttribute('download', customFileName);
    a.setAttribute('target', '_self');
    a.rel = 'noopener noreferrer';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();

    setTimeout(() => {
      if (document.body.contains(a)) {
        document.body.removeChild(a);
      }
    }, 1500);
  } catch (err) {
    // 2. Direct browser navigation fallback
    console.warn('Anchor download fallback:', err);
    window.location.assign(fileUrl);
  }
}

export const downloadExamVeda = downloadEduVeda;
