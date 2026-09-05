import { useEffect, useRef } from 'react';

export function useScrollReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        node.classList.add('show');
        observer.unobserve(node);
      }
    }, { threshold: 0.12 });

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return ref;
}
