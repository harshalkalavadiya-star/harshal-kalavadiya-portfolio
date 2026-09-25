import Reveal from './Reveal'
import { awards, education, profile } from '../data/portfolio'

const Recognition = () => {
  return (
    <section className="section section--tight" id="recognition">
      <div className="container">
        <Reveal>
          <p className="eyebrow">05 / Recognition</p>
          <h2 className="section__title">The details that stay.</h2>
        </Reveal>

        <div className="recognition">
          <Reveal className="recognition__edu" delay={0.05}>
            <p className="label">Education</p>
            <h3>{education.degree}</h3>
            <p>
              {education.school}
              <br />
              {education.period}
            </p>
            <p className="label" style={{ marginTop: '1.25rem' }}>
              Languages
            </p>
            <p>{profile.languages.join(' · ')}</p>
            <p className="label" style={{ marginTop: '1.25rem' }}>
              Based in
            </p>
            <p>{profile.location}</p>
          </Reveal>

          <Reveal className="recognition__awards" delay={0.1}>
            <p className="label">Awards</p>
            <ul>
              {awards.map((award) => (
                <li key={`${award.year}-${award.title}`}>
                  <span>{award.year}</span>
                  <strong>{award.title}</strong>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Recognition
