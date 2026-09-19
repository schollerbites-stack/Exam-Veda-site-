export const APK_FILE_URL = 'https://files.catbox.moe/t5nqk6.apk';
export const CUSTOM_FILE_NAME = 'Exam Veda.apk';

/**
 * Downloads the Exam Veda APK file with custom file name 'Exam Veda.apk'
 * Uses Blob fetch with seamless fallback to direct link.
 */
export async function downloadExamVeda(e?: React.MouseEvent<HTMLElement> | MouseEvent) {
  if (e && typeof e.preventDefault === 'function') {
    e.preventDefault();
  }
  const fileUrl = APK_FILE_URL;
  const customFileName = CUSTOM_FILE_NAME;

  try {
    const response = await fetch(fileUrl);
    if (!response.ok) throw new Error(`HTTP error ${response.status}`);
    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = blobUrl;
    a.download = customFileName;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => {
      window.URL.revokeObjectURL(blobUrl);
    }, 2000);
  } catch (err) {
    // Agar fetch fail ho to normal download par bhej de
    console.warn('Direct blob download failed, falling back to direct URL navigation:', err);
    window.location.href = fileUrl;
  }
}
