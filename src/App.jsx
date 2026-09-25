import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Work from './components/Work'
import Recognition from './components/Recognition'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './styles/index.scss'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Work />
        <Recognition />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
