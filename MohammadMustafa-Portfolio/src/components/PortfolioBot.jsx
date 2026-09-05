import { useEffect, useRef, useState } from 'react';
import { typeBotReply } from '../animations/botAnimations';
import HeroAvatar from './HeroAvatar';
const botAnswers = {
  q1: 'Mohammad builds production-oriented full-stack products and is expanding that foundation into Generative AI applications, automation and intelligent workflows.',
  q2: 'NewsMint is his daily digest sender: it collects articles from APIs and RSS feeds, removes duplicates, creates concise English and Hindi summaries with Gemini, and delivers personalized digests through Telegram.',
  q3: 'His current stack spans C++, JavaScript, SQL, HTML/CSS, React.js, Node.js, Express.js, MongoDB, REST APIs, Tailwind CSS, Generative AI, LangChain, LangGraph, RAG, GraphDB, Git, GitHub, Postman, VS Code and Docker.',
  q4: 'His next focus is reliable AI application engineering, system design and AI-Tester: understanding project structure, relationships, behavior, change impact and test evidence.',
};

export default function PortfolioBot() {
  const [reply, setReply] = useState('Pick a quick question or type a command below.');
  const [input, setInput] = useState('');
  const timer = useRef(null);

  useEffect(() => () => timer.current?.(), []);

  const runBotAnswer = (key) => {
    timer.current?.();
    const answer = botAnswers[key] || 'Try asking about projects, NewsMint, stack, AI, journey or LLD.';
    timer.current = typeBotReply(answer, setReply);
  };

  const ask = () => {
    const query = input.toLowerCase().trim();
    if (!query) return;
    if (/newsmint|news/.test(query)) return runBotAnswer('q2');
    if (/stack|skill|technology|tech/.test(query)) return runBotAnswer('q3');
    if (/journey|next|future|lld|architecture|learning|learn/.test(query)) return runBotAnswer('q4');
    return runBotAnswer('q1');
  };

  return (
    <div className="aboutAI">
      <div className="aiConsole">
        <div className="consoleTop"><span><i /><i /><i /></span><b>mustafa.ai</b><em>● ONLINE</em></div>
        <div className="consoleBody">
          <div className="botIntro"><HeroAvatar className="botAvatar mBotLogo" start={2} /><div><strong>MOHAMMAD'S PORTFOLIO BOT</strong><small>Personal profile assistant · command mode</small></div></div>
          <div className="botLine"><span className="promptMark">&gt;</span><span>{reply}</span></div>
          <div className="quickQuestions">
            {[
              ['q1', 'What does Mohammad build?'],
              ['q2', 'Tell me about NewsMint'],
              ['q3', "What's his current stack?"],
              ['q4', "What's he learning next?"],
            ].map(([key, label]) => <button type="button" key={key} onClick={() => { setInput(label); runBotAnswer(key); }}>▸ {label}</button>)}
          </div>
          <div className="commandRow"><span className="commandPrompt">mustafa@bot:~$</span><input value={input} onChange={(event) => setInput(event.target.value)} onKeyDown={(event) => event.key === 'Enter' && ask()} type="text" autoComplete="off" spellCheck="false" placeholder="ask --about-projects" /><button type="button" onClick={ask}>RUN ↵</button></div>
        </div>
      </div>
      <aside className="aboutSide">
        <div className="sideKicker">ONE-LINE PROFILE</div><h3>BUILDING PRODUCTS WHERE CODE MEETS AI.</h3><p>Full-stack development is my foundation. Now I'm going deeper into AI applications, intelligent workflows and better software architecture.</p>
        <div className="commandList"><div><span>01</span><b>/projects</b><small>See what I've built</small></div><div><span>02</span><b>/skills</b><small>Open my skill deck</small></div><div><span>03</span><b>/journey</b><small>Follow my progression</small></div><a href="mailto:mohammadmustafa.dev@gmail.com"><span>04</span><b>/email</b><small>Start a conversation</small></a></div>
      </aside>
    </div>
  );
}
