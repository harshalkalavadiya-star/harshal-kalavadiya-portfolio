import { useState } from 'react'
import { Check, Copy, Download, Github, Linkedin, Mail, Phone } from 'lucide-react'
import Reveal from './Reveal'
import { profile } from '../data/portfolio'

const Contact = () => {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section className="section section--contact" id="contact">
      <div className="container">
        <Reveal>
          <p className="eyebrow">06 / Contact</p>
          <h2 className="section__title">Let’s build the next mobile experience.</h2>
          <p className="section__lead">
            Have a product idea, mobile application challenge, or engineering opportunity?
          </p>
        </Reveal>

        <Reveal className="contact__actions" delay={0.08}>
          <a className="btn btn--solid" href={`mailto:${profile.email}`}>
            <Mail size={16} />
            Send a note
          </a>
          <button className="btn btn--ghost" type="button" onClick={copyEmail}>
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? 'Copied' : 'Copy email'}
          </button>
          <a className="btn btn--ghost" href={profile.phoneHref}>
            <Phone size={16} />
            {profile.phone}
          </a>
        </Reveal>

        <Reveal className="contact__links" delay={0.12}>
          <a href={profile.social.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={18} />
            LinkedIn
          </a>
          <a href={profile.social.github} target="_blank" rel="noreferrer">
            <Github size={18} />
            GitHub
          </a>
          <a href={profile.resumeUrl} download>
            <Download size={18} />
            Download resume
          </a>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="contact__note">Good engineering is a conversation with the future.</p>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact
