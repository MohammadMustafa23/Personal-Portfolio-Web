import { gsap, canAnimate } from './gsap';

export function initCardAnimations() {
  if (!canAnimate()) return undefined;
  const cards = [...document.querySelectorAll('.project, .skillCard, .achievement')];
  if (!cards.length) return undefined;

  const handlers = cards.map((card) => {
    const enter = () => gsap.to(card, { y: -6, duration: 0.2, overwrite: true });
    const leave = () => gsap.to(card, { y: 0, duration: 0.2, overwrite: true });
    card.addEventListener('mouseenter', enter);
    card.addEventListener('mouseleave', leave);
    return () => {
      card.removeEventListener('mouseenter', enter);
      card.removeEventListener('mouseleave', leave);
    };
  });

  return () => handlers.forEach((cleanup) => cleanup());
}
