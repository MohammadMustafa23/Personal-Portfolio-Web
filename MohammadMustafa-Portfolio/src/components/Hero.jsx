import Reveal from './Reveal';
import HeroAvatar from './HeroAvatar';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="scene" aria-hidden="true">
        <div className="grid" />
      </div>
      <div className="wrap heroGrid">
        <Reveal>
          <div className="kicker">PLAYER 01 · FULL-STACK DEVELOPER · GENERATIVE AI</div>
          <h1>HI, I'M<br /><span className="orange">MOHAMMAD MUSTAFA.</span></h1>
          <p className="heroCopy">I'm a Full-Stack Developer focused on building modern web applications, backend systems and Generative AI products. I enjoy turning ideas into complete, practical software — from frontend experience to APIs, databases and intelligent workflows. <span className="cursorText">_</span></p>
          <div className="buttons"><a className="btn" href="#work">EXPLORE MY PROJECTS ↗</a><a className="btn alt" href="mailto:mohammadmustafa.dev@gmail.com">LET'S CONNECT</a></div>
        </Reveal>
        <Reveal as="aside" className="player">
          <div className="playerTop"><HeroAvatar className="bigface mLogo" start={1} /><div className="playerName">MOHAMMAD MUSTAFA<br /><small>FULL-STACK DEVELOPER · GEN AI</small></div></div>
          <div className="stat"><span>ROLE</span><strong>FULL-STACK</strong></div>
          <div className="stat"><span>FOCUS</span><strong>GENERATIVE AI</strong></div>
          <div className="stat"><span>FEATURED</span><strong>NEWSMINT</strong></div>
          <div className="stat"><span>BUILD MODE</span><strong>PRODUCT ENGINEERING</strong></div>
          <div className="missionLabel">CURRENT MISSION</div><div className="bar missionBar"><i /></div>
        </Reveal>
      </div>
    </section>
  );
}
