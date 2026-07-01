import { useEffect, useRef } from 'react'
import { trackSectionView } from '../utils/tracking'

/**
 * Hook that tracks when a section becomes visible using IntersectionObserver.
 * Only fires the tracking event once per section.
 */
export function useSectionTracking(
  sectionId: string,
  message: string,
  options?: { threshold?: number }
) {
  const hasTracked = useRef(false)
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const element = ref.current
    if (!element || hasTracked.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTracked.current) {
          hasTracked.current = true
          trackSectionView(sectionId, message)
          observer.disconnect()
        }
      },
      { threshold: options?.threshold ?? 0.3 }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [sectionId, message, options?.threshold])

  return ref
}
