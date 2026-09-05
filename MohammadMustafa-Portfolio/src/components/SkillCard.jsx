import { pixelAvatars } from '../data/pixelAvatars';

export default function SkillCard({ skill, index }) {
  const [, , , name, type, className] = skill;
  const skillNumber = String(index + 1).padStart(2, '0');
  const hero = pixelAvatars[index % pixelAvatars.length];
  const heroInitial = hero.name.charAt(0);

  return (
    <article className={`skillCard ${className}`}>
      <div className="skillCardTop">
        <div className="cardCorner"><b>{heroInitial}</b><span>{hero.name}</span></div>
        <span className="skillNumber">SKILL / {skillNumber}</span>
      </div>
      <div className="skillHeroFrame"><img src={hero.src} alt={`${hero.name} pixel art`} /></div>
      <div className="skillInfo"><div className="skillName">{name}</div><div className="skillType">{type}</div></div>
      <div className="skillCardBottom"><span>{hero.name}</span><b>{heroInitial}</b></div>
    </article>
  );
}
