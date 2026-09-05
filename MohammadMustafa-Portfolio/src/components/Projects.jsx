import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import Reveal from './Reveal';

export default function Projects() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <Reveal>
          <div className="title"><div className="kicker">02 / QUEST LOG</div><h2>PROJECTS I'VE BUILT</h2><p className="sub">Real projects, real builds, and the systems behind them. Open the live product or inspect the source and project details.</p></div>
          <div className="projects">{projects.map((project) => <ProjectCard project={project} key={project.title} />)}</div>
          <div className="projectFooter"><span>{projects.length} PROJECTS LOADED</span><span>MORE BUILDS COMING SOON...</span></div>
        </Reveal>
      </div>
    </section>
  );
}
