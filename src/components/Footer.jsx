import { ArrowUp } from 'lucide-react'
import { profile } from '../data/portfolio'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <strong>{profile.name}</strong>
          <p>Mobile applications · Technical leadership · India</p>
        </div>
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <a className="btn btn--ghost" href="#top">
          Back to top
          <ArrowUp size={16} />
        </a>
      </div>
    </footer>
  )
}

export default Footer
