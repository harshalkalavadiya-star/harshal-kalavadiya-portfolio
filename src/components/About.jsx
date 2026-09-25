import Reveal from './Reveal'
import { focusAreas, profile } from '../data/portfolio'

const About = () => {
  return (
    <section className="section section--tight" id="about">
      <div className="container">
        <Reveal>
          <p className="eyebrow">01 / Profile</p>
          <h2 className="section__title">A career in the useful middle.</h2>
          <p className="section__lead">
            Where product ambition meets engineering reality — and the work is to make both better.
          </p>
        </Reveal>

        <div className="about__grid">
          <Reveal className="about__copy" delay={0.05}>
            {profile.about.map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
          </Reveal>

          <div className="about__focus">
            {focusAreas.map((item, index) => (
              <Reveal key={item.title} delay={0.04 * index}>
                <article className="focus-item">
                  <span className="focus-item__index">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
