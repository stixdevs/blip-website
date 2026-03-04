import { useEffect, useRef, useState, useCallback } from "react";

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {}
) {
  const { threshold = 0.15, rootMargin = "0px 0px -60px 0px" } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  const reset = useCallback(() => {
    setIsVisible(false);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, isVisible]);

  return { ref, isVisible, reset };
}
