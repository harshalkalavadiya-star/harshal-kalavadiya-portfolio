import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from './Reveal'
import { experience } from '../data/portfolio'

const Experience = () => {
  const [active, setActive] = useState(experience[0].id)
  const current = experience.find((item) => item.id === active) ?? experience[0]

  return (
    <section className="section section--alt" id="experience">
      <div className="container">
        <Reveal>
          <p className="eyebrow">02 / Career</p>
          <h2 className="section__title">A decade-plus of useful tension.</h2>
          <p className="section__lead">
            The title changes. The responsibility keeps getting wider: understand the system,
            improve the system, help others improve it too.
          </p>
        </Reveal>

        <div className="experience">
          <Reveal className="experience__list" delay={0.05}>
            {experience.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={`experience__tab ${active === item.id ? 'is-active' : ''}`}
                onClick={() => setActive(item.id)}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <span>
                  <strong>{item.role}</strong>
                  <em>{item.period}</em>
                </span>
              </button>
            ))}
          </Reveal>

          <Reveal className="experience__panel" delay={0.1}>
            <AnimatePresence mode="wait">
              <motion.article
                key={current.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
              >
                <p className="experience__company">{current.company}</p>
                <h3>{current.role}</h3>
                <p className="experience__period">{current.period}</p>
                <p>{current.description}</p>
                <div className="chip-row">
                  {current.tags.map((tag) => (
                    <span className="chip" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            </AnimatePresence>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Experience
