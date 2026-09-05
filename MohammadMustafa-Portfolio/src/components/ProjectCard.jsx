export default function ProjectCard({ project }) {
  const detailsHref = project.details || project.href;

  return (
    <article className="project">
      <div className="projectNo">{project.number}</div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="tags">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
      <div className="projectActions">
        {project.href ? <a className="projectBtn live" href={project.href} target="_blank" rel="noreferrer">{project.live}</a> : <span className="projectBtn live disabled">{project.live}</span>}
        {detailsHref ? <a className="projectBtn details" href={detailsHref} target="_blank" rel="noreferrer">VIEW DETAILS</a> : <span className="projectBtn details disabled">DETAILS SOON</span>}
      </div>
    </article>
  );
}
