import './App.css'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import { Footer } from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import Projects from './Components/Projects/Projects'
import Skills from './Components/Skills/Skills'

function App() {

  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar></Navbar>
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
      <Contact></Contact>
      <Footer></Footer>
    </main>
  )
}

export default App
