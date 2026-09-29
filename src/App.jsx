import Navbar from './components/Navbar'
import Hero from './components/Hero'

import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'

import Footer from './components/Footer'

const name = "Ivan Ryle Aquino"

function App() {
  
  return (
    <>
      <Navbar/>

      <Hero/>

      <main>

        <AboutSection/>
        <SkillsSection/>
        <ProjectsSection/>

        <section id="experience" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
          <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
          <p className="mt-2 text-stone-600">Where I have learned.</p>
          <ol className="mt-8 space-y-8 border-l border-stone-200">
            <li className="pl-6">
              <p className="text-sm text-stone-500">2019 – 2021</p>
              <h3 className="mt-1 font-semibold">Senior High School, STEM Strand</h3>
              <p className="text-sm text-stone-600">Saint Cecilia's College</p>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">Created my own Arduino fire suppressant and got hooked.</p>
            </li>
            <li className="pl-6">
              <p className="text-sm text-stone-500">2022 – Present</p>
              <h3 className="mt-1 font-semibold">BS Information Technology</h3>
              <p className="text-sm text-stone-600">Cebu Institute of Technology – University</p>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">Taking up web development, databases, and systems analysis.</p>
            </li>
            <li className="pl-6">
              <p className="text-sm text-stone-500">2024 - Present</p>
              <h3 className="mt-1 font-semibold">Developing apps</h3>
              <p className="text-sm text-stone-600">Hobbyist Software Dev.</p>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">Set up machines and testing AI models other people trained.</p>
            </li>
          </ol>
        </section>

        <section id="contact" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
          <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
          <p className="mt-2 text-stone-600">Hit me up.</p>
          <ul className="mt-8 space-y-3">
            <li>
              <span className="inline-block w-24 text-sm text-stone-500">Email</span>
              <a href="mailto:ivan.aquino@cit.edu" className="font-medium hover:underline">ivan.aquino@cit.edu</a>
            </li>
            <li>
              <span className="inline-block w-24 text-sm text-stone-500">GitHub</span>
              <a href="https://github.com/ivanrylevaquino" className="font-medium hover:underline">github.com/ivanrylevaquino</a>
            </li>
            <li>
              <span className="inline-block w-24 text-sm text-stone-500">LinkedIn</span>
              <a href="https://www.linkedin.com/in/ivan-aquino-431666375/" className="font-medium hover:underline">https://www.linkedin.com/in/ivan-aquino-431666375</a>
            </li>
          </ul>
        </section>

      </main>
      <Footer/>
    </>
  )
}

export default App
