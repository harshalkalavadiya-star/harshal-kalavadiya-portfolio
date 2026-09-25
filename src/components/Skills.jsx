import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from './Reveal'
import { leadership, skillGroups } from '../data/portfolio'

const Skills = () => {
  const [active, setActive] = useState(0)

  return (
    <section className="section section--tight" id="skills">
      <div className="container">
        <Reveal>
          <p className="eyebrow">03 / Skills</p>
          <h2 className="section__title">The tools matter. The thinking matters more.</h2>
          <p className="section__lead">
            A practical universe of disciplines that keeps the mobile work honest — from
            architecture through the conversations that make architecture work.
          </p>
        </Reveal>

        <Reveal className="skills" delay={0.05}>
          <div className="skills__tabs" role="tablist" aria-label="Skill groups">
            {skillGroups.map((group, index) => (
              <button
                key={group.label}
                type="button"
                role="tab"
                aria-selected={active === index}
                className={active === index ? 'is-active' : ''}
                onClick={() => setActive(index)}
              >
                {String(index + 1).padStart(2, '0')} {group.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={skillGroups[active].label}
              className="skills__panel"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="chip-row chip-row--lg">
                {skillGroups[active].items.map((item) => (
                  <span className="chip chip--lg" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </Reveal>

        <div className="leadership">
          <Reveal>
            <p className="eyebrow">Leadership</p>
            <h3 className="section__subtitle">Build the team with the product.</h3>
          </Reveal>
          <div className="leadership__grid">
            {leadership.map((item, index) => (
              <Reveal key={item.title} delay={0.05 * index}>
                <article className="lead-card">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
