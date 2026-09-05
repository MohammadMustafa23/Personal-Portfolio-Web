export function initScrollAnimations() {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return undefined;

  const sections = document.querySelectorAll('.section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('section-visible');
    });
  }, { threshold: 0.12 });

  sections.forEach((section) => observer.observe(section));
  return () => observer.disconnect();
}
