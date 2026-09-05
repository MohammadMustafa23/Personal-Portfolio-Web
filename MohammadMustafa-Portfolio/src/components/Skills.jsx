import { useState } from 'react';
import { initialSkills } from '../data/skills';
import Reveal from './Reveal';
import SkillCard from './SkillCard';

function shuffleItems(items) {
  const next = [...items];
  for (let index = next.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [next[index], next[randomIndex]] = [next[randomIndex], next[index]];
  }
  return next;
}

export default function Skills() {
  const [skills, setSkills] = useState(initialSkills);
  const [isShuffling, setIsShuffling] = useState(false);

  const shuffle = () => {
    if (isShuffling) return;
    setIsShuffling(true);
    window.setTimeout(() => {
      setSkills((current) => shuffleItems(current));
      setIsShuffling(false);
    }, 300);
  };

  return (
    <section className="section" id="skills">
      <div className="wrap">
        <Reveal>
          <div className="title"><div className="kicker">03 / SKILL DECK</div><h2>MY SKILL DECK</h2><p className="sub">The technologies and engineering foundations I currently work with across full-stack development, AI and systems.</p></div>
          <div className={`skillDeck show ${isShuffling ? 'shuffling' : ''}`}>{skills.map((skill, index) => <SkillCard skill={skill} index={index} key={`${skill[3]}-${skill[0]}`} />)}</div>
          <div className="skillControls"><button className="shuffleBtn" type="button" onClick={shuffle}><span>✦</span> SHUFFLE DECK</button></div>
          <div className="skillLegend"><span><b>CORE</b> languages + web</span><span><b>AI</b> LLM + retrieval</span><span><b>CONCEPTS</b> systems foundations</span><span><b>TOOLS</b> Git + Docker</span></div>
        </Reveal>
      </div>
    </section>
  );
}
