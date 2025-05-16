import { useEffect, useState } from 'react'
import Navbar from './Layouts/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Feedbacks from './Components/Feedbacks/Feedbacks'
import Contact from './Components/Contact/Contact'
import Footer from './Layouts/Footer/Footer' // Make sure to import Footer
import Loader from './Components/Loader/Loader' // Import the Loader component
// import AllProjects from './Components/AllProjects/AllProjects'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)
    
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
        <About />
        <Projects />
        {/* <AllProjects /> */}
        <Feedbacks />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App