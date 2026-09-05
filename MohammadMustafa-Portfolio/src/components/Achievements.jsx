import { achievements } from '../data/achievements';
import Reveal from './Reveal';

export default function Achievements() {
  return (
    <section className="section">
      <div className="wrap">
        <Reveal>
          <div className="title"><div className="kicker">05 / VERIFIED RESUME</div><h2>PROGRESS &amp; FOUNDATIONS</h2><p className="sub">Selected education, certifications and accomplishments provided in Mohammad's resume.</p></div>
          <div className="achievements realAchievements">
            {achievements.map(([badge, icon, title, body, width, meta]) => <article className="achievement" key={title}><span className="badge">{badge}</span><div className="achievementIcon">{icon}</div><h3>{title}</h3><p>{body}</p><div className={`meter meter-${width}`}><i /></div><small className="achievementMeta">{meta}</small></article>)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
