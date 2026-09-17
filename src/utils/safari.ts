/**
 * Safari & Mobile WebKit Compatibility Utilities
 */

/**
 * Checks if the current browser environment is Safari / iOS WebKit
 */
export function isSafariOrIOS(): boolean {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') return false;
  const ua = navigator.userAgent;
  const isIOS =
    /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const isSafari =
    /Safari/i.test(ua) && !/Chrome/i.test(ua) && !/Chromium/i.test(ua) && !/Android/i.test(ua);

  return isIOS || isSafari;
}

/**
 * Safely opens a WhatsApp link without getting blocked by Safari's aggressive popup blocker.
 * On iOS/iPadOS Safari, navigating directly triggers the native WhatsApp app prompt seamlessly.
 */
export function openWhatsAppSafely(phoneNumber: string, message: string): void {
  const encodedMessage = encodeURIComponent(message);
  const waUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  const isIOS =
    typeof navigator !== 'undefined' &&
    (/iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1));

  if (isIOS) {
    // iOS Safari opens WhatsApp app seamlessly when setting window.location.href
    window.location.href = waUrl;
  } else {
    // For Desktop Safari and other browsers, try window.open with a fallback
    const newWindow = window.open(waUrl, '_blank', 'noopener,noreferrer');
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      window.location.href = waUrl;
    }
  }
}

/**
 * Safari-safe text copy with fallback to document.execCommand
 */
export async function copyTextSafely(text: string): Promise<boolean> {
  if (typeof navigator !== 'undefined' && navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fall through to fallback
    }
  }

  try {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    textArea.setAttribute('readonly', '');
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    const successful = document.execCommand('copy');
    document.body.removeChild(textArea);
    return successful;
  } catch {
    return false;
  }
}
