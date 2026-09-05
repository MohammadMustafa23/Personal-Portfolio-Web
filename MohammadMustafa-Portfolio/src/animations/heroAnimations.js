import { gsap, canAnimate } from './gsap';

export function initHeroAnimations() {
  if (!canAnimate()) return undefined;

  const targets = ['.hero .kicker', '.hero h1', '.hero .heroCopy', '.hero .buttons'];
  const elements = targets.flatMap((selector) => [...document.querySelectorAll(selector)]);
  if (!elements.length) return undefined;

  gsap.fromTo(elements, { opacity: 0, y: 18 }, {
    opacity: 1,
    y: 0,
    duration: 0.55,
    stagger: 0.08,
    ease: 'power2.out',
    delay: 0.1,
    clearProps: 'transform,opacity',
  });

  return () => gsap.killTweensOf(elements);
}
