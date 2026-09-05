import HeroAvatar from './HeroAvatar';

export default function Navbar({ sectionData, activeIndex, signal, showSignal, resetSignal }) {
  const navSections = sectionData;
  const navActiveIndex = activeIndex;
  const showMessage = (item) => showSignal(item.messages[0]);

  return (
    <header className="hud">
      <div className="navReference">
        <nav className="pixelNav" aria-label="Portfolio sections">
          <div className="navTrack">
            {navSections.map((item, index) => index === navActiveIndex ? (
              <a
                className="navItem active"
                href={`#${item.id}`}
                aria-label={item.label}
                key={item.id}
                onMouseEnter={() => showMessage(item)}
                onMouseLeave={resetSignal}
              >
                {item.label}
              </a>
            ) : (
              <button
                className="navSquare"
                type="button"
                aria-label={`Go to ${item.label}`}
                title={item.label}
                key={item.id}
                onMouseEnter={() => showMessage(item)}
                onMouseLeave={resetSignal}
                onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
              />
            ))}
          </div>
        </nav>
        <div className="navRight">
          <div className="navSignal" aria-live="polite"><span className="signalText">{signal}</span><span className="signalCaret">_</span></div>
          <HeroAvatar className="navBrandMark" start={0} />
        </div>
      </div>
    </header>
  );
}
