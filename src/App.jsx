import { useState, useEffect, lazy, Suspense } from 'react'
import './App.css'
import Header from './components/Header'
import BackgroundAnimation from './components/BackgroundAnimation'

// Carga diferida de componentes no críticos
const Main = lazy(() => import('./components/Main'))
const About = lazy(() => import('./components/About'))
const Projects = lazy(() => import('./components/Projects'))
const Experience = lazy(() => import('./components/Experience'))
const Contact = lazy(() => import('./components/Contact'))

function App() {
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const preloader = document.getElementById('preloader')
    if (preloader) {
      setTimeout(() => {
        preloader.style.display = 'none'
        setLoading(false)
      }, 1000)
    }
  }, [])
  
  return (
    <>
      {!loading && (
        <>
          <BackgroundAnimation />
          <Header />
          {/* Usa Suspense para manejar la carga de componentes lazy */}
          <Suspense fallback={<div>Cargando...</div>}>
            <Main />
            <About />
            <Projects />
            <Experience />
            <Contact />
          </Suspense>
          <div style={{ color: 'wheat', zIndex: 20, fontSize: 10 }}>
            Last Updated: 08/2024
          </div>
        </>
      )}
    </>
  )
}

export default App
