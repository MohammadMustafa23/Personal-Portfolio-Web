import { useEffect, useState } from 'react';
import { pixelAvatars } from '../data/pixelAvatars';

const heroAvatars = pixelAvatars;

export default function HeroAvatar({ className = '', start = 0 }) {
  const [index, setIndex] = useState(start % heroAvatars.length);
  const hero = heroAvatars[index];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % heroAvatars.length);
    }, 3600);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className={`heroAvatar ${className}`} aria-label={hero.name} title={hero.name}>
      <img key={hero.src} src={hero.src} alt={hero.name} />
      <span className="heroAvatarScan" aria-hidden="true" />
    </div>
  );
}
