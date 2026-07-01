import toast from 'react-hot-toast'

/**
 * Track user behavior events.
 * Currently logs to console. Can be extended to send to analytics services.
 */
export function trackEvent(eventName: string, payload?: Record<string, unknown>): void {
  const timestamp = new Date().toISOString()
  const eventData = {
    event: eventName,
    timestamp,
    ...payload,
  }

  console.log(
    `%c[PulseAI Tracking] %c${eventName}`,
    'color: #14b8a6; font-weight: bold;',
    'color: #38bdf8; font-weight: bold;',
    eventData
  )
}

/**
 * Track CTA click and show a toast notification.
 */
export function trackCtaClick(location: string): void {
  trackEvent('cta_click', { location })
  toast('Bạn đang quan tâm đến PulseAI Band. Hãy để lại email để nhận thông tin mới nhất.', {
    icon: '💡',
    duration: 3000,
    style: {
      background: '#f0fdfa',
      color: '#0f766e',
      border: '1px solid #99f6e4',
      fontSize: '14px',
    },
  })
}

/**
 * Track section view and show a toast notification.
 */
export function trackSectionView(section: string, message: string): void {
  trackEvent('section_view', { section })
  toast(message, {
    icon: '👀',
    duration: 3000,
    style: {
      background: '#f0f9ff',
      color: '#0369a1',
      border: '1px solid #bae6fd',
      fontSize: '14px',
    },
  })
}
