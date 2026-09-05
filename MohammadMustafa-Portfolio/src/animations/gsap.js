import { gsap } from 'gsap';

export { gsap };

export function canAnimate() {
  return typeof window !== 'undefined' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
