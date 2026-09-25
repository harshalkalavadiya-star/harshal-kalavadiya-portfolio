import Reveal from './Reveal'
import { domains, process, projects, stats } from '../data/portfolio'

const Work = () => {
  const project = projects[0]

  return (
    <section className="section section--alt" id="work">
      <div className="container">
        <Reveal>
          <p className="eyebrow">04 / Selected work</p>
          <h2 className="section__title">The work behind the work.</h2>
          <p className="section__lead">
            Case studies from the recurring problems worth solving in senior mobile engineering.
          </p>
        </Reveal>

        <Reveal className="project" delay={0.08}>
          <p className="project__role">{project.role}</p>
          <h3>{project.title}</h3>
          <p>{project.summary}</p>
          <ul className="project__highlights">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="chip-row">
            {project.stack.map((item) => (
              <span className="chip" key={item}>
                {item}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="stats">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={0.04 * index}>
              <article className="stat">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="domains-head">
          <p className="eyebrow">Domains</p>
          <h3 className="section__subtitle">Experience across different contexts.</h3>
        </Reveal>

        <div className="domains">
          {domains.map((domain, index) => (
            <Reveal key={domain.title} delay={0.03 * index}>
              <article className="domain">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h4>{domain.title}</h4>
                <p>{domain.description}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="process-head">
          <p className="eyebrow">Process</p>
          <h3 className="section__subtitle">From requirement to release.</h3>
        </Reveal>

        <div className="process">
          {process.map((item, index) => (
            <Reveal key={item.step} delay={0.03 * index}>
              <article className="process__item">
                <span>{item.step}</span>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
