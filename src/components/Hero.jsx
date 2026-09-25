import { motion } from 'framer-motion'
import { ArrowDownRight, Download } from 'lucide-react'
import { profile } from '../data/portfolio'

const Hero = () => {
  return (
    <section className="hero" id="top">
      <div className="hero__layout">
        <div className="hero__content">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            {profile.title}
          </motion.p>

          <motion.h1
            className="hero__brand"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            {profile.name}
          </motion.h1>

          <motion.p
            className="hero__headline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.55 }}
          >
            {profile.headline}
          </motion.p>

          <motion.p
            className="hero__tagline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.55 }}
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            className="hero__cta"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.62, duration: 0.5 }}
          >
            <a className="btn btn--solid" href="#work">
              Explore the work
              <ArrowDownRight size={18} />
            </a>
            <a className="btn btn--ghost" href={profile.resumeUrl} download>
              <Download size={16} />
              Download resume
            </a>
          </motion.div>

          <motion.p
            className="hero__meta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            Based in {profile.location.split(',')[0]} · Working across contexts
          </motion.p>
        </div>

        <motion.div
          className="hero__portrait"
          initial={{ opacity: 0, x: 36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero__portrait-frame">
            <img src={profile.photo} alt={profile.name} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
