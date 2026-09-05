import { milestones } from '../data/journey';
import Reveal from './Reveal';

export default function Journey() {
  return (
    <section className="section" id="journey">
      <div className="wrap">
        <Reveal>
          <div className="title"><div className="kicker">04 / ENGINEERING DIRECTION</div><h2>THE BUILD JOURNEY</h2><p className="sub">The current path from full-stack product engineering toward reliable AI systems and codebase-level intelligence.</p></div>
          <div className="journey">{milestones.map(([year, title, body]) => <div className="milestone" key={year}><div className="year">{year}</div><h3>{title}</h3><p>{body}</p></div>)}</div>
        </Reveal>
      </div>
    </section>
  );
}
