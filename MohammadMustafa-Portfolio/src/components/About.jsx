import Reveal from './Reveal';
import PortfolioBot from './PortfolioBot';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <Reveal>
          <div className="title"><div className="kicker">01 / PLAYER PROFILE</div><h2>LET'S START WITH MY NAME — MOHAMMAD MUSTAFA</h2><p className="sub">Ask the portfolio about my projects, stack, AI work or current learning path.</p></div>
          <PortfolioBot />
        </Reveal>
      </div>
    </section>
  );
}
