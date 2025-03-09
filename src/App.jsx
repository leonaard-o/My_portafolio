import {  useState, useEffect } from 'react'
import './App.css'

import About from './components/About'
import Header from './components/Header'
import Projects from './components/Projects'
import Main from './components/Main'
import Contact from './components/Contact'
import Experience from './components/Experience'
import BackgroundAnimation from './components/BackgroundAnimation'


function App() {

  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
      setTimeout(() => {
        preloader.style.display = 'none';
        setLoading(false);
      }, 1000);
    }
  }, []);

  return (
    <>
      {!loading && (
        <>
          <BackgroundAnimation />
          <Header />
          <Main />
          <About />
          <Projects />
          <Experience />
          <Contact />
          <div style={{color: 'wheat', zIndex: 20, fontSize: 10,}}>Last Updated: 08/2024</div>
        </>
      )}
    </>
  )
}

export default App
