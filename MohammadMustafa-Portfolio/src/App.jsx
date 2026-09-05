import { useCallback, useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Journey from './components/Journey';
import Achievements from './components/Achievements';
import Footer from './components/Footer';
import { initHeroAnimations } from './animations/heroAnimations';
import { initScrollAnimations } from './animations/scrollAnimations';
import './styles/App.css';

const sectionData = [
  { id: 'top', label: 'INTRO', messages: ['SYSTEM READY', 'START THE JOURNEY', 'WELCOME TO MY BUILD'] },
  { id: 'about', label: 'ABOUT', messages: ['MEET THE DEVELOPER', 'PROFILE LOADED', 'GET TO KNOW MUSTAFA'] },
  { id: 'work', label: 'PROJECTS', messages: ['PROJECTS UNLOCKED', 'SEE WHAT I BUILT', 'QUEST LOG OPEN'] },
  { id: 'skills', label: 'SKILLS', messages: ['LOADOUT ONLINE', 'MY SKILL DECK', 'STACK CHECK'] },
  { id: 'journey', label: 'JOURNEY', messages: ['PROGRESS DETECTED', 'FOLLOW THE JOURNEY', 'NEXT LEVEL LOADING'] },
];

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [signal, setSignal] = useState('');
  const typingTimer = useRef(null);
  const cycleTimer = useRef(null);
  const messageIndex = useRef(0);
  const hoverLock = useRef(false);

  const typeSignal = useCallback((message) => {
    window.clearInterval(typingTimer.current);
    window.clearTimeout(cycleTimer.current);

    const text = message || '';
    let index = 0;
    setSignal('');

    typingTimer.current = window.setInterval(() => {
      index += 1;
      setSignal(text.slice(0, index));
      if (index >= text.length) {
        window.clearInterval(typingTimer.current);
        cycleTimer.current = window.setTimeout(() => setSignal(text), 2200);
      }
    }, 42);
  }, []);

  const resetSignal = useCallback(() => {
    typeSignal(sectionData[activeIndex].messages[0]);
  }, [activeIndex, typeSignal]);

  useEffect(() => {
    typeSignal(sectionData[0].messages[0]);
    return () => {
      window.clearInterval(typingTimer.current);
      window.clearTimeout(cycleTimer.current);
    };
  }, [typeSignal]);

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.3;
      let nextIndex = 0;

      sectionData.forEach((section, index) => {
        const node = document.getElementById(section.id);
        if (node && node.offsetTop <= scrollPosition) nextIndex = index;
      });

      if (nextIndex !== activeIndex) {
        setActiveIndex(nextIndex);
        if (!hoverLock.current) typeSignal(sectionData[nextIndex].messages[0]);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [activeIndex, typeSignal]);

  useEffect(() => {
    messageIndex.current = 0;
    const interval = window.setInterval(() => {
      if (hoverLock.current) return;
      const messages = sectionData[activeIndex].messages;
      messageIndex.current = (messageIndex.current + 1) % messages.length;
      typeSignal(messages[messageIndex.current]);
    }, 5200);

    return () => window.clearInterval(interval);
  }, [activeIndex, typeSignal]);

  useEffect(() => {
    const cleanupHero = initHeroAnimations();
    const cleanupScroll = initScrollAnimations();
    return () => {
      cleanupHero?.();
      cleanupScroll?.();
    };
  }, []);

  const handleFooterEnter = (message) => {
    hoverLock.current = true;
    typeSignal(message);
  };

  const handleFooterLeave = () => {
    hoverLock.current = false;
    resetSignal();
  };

  return (
    <>
      <div className="siteImageBg" aria-hidden="true" />
      <div className="siteImageShade" aria-hidden="true" />
      <Navbar sectionData={sectionData} activeIndex={activeIndex} signal={signal} showSignal={typeSignal} resetSignal={resetSignal} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Journey />
        <Achievements />
      </main>
      <Footer onMessage={handleFooterEnter} onLeaveMessage={handleFooterLeave} />
    </>
  );
}
