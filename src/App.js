import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef, useEffect } from 'react'
import AOS from 'aos';

import About from "./pages/About";
import Skills from "./pages/Skills";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  const contactPage = useRef()
  const homePage = useRef()
  const scrollToContact = () => {
    if (contactPage.current) {
      contactPage.current.scrollIntoView({ behavior: "smooth" })
    }
  }
  const scrollToTop = () => {
    if (homePage.current) {
      homePage.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    AOS.init()
  }, [])



  return (
    <>
      <Home scrollToContact={scrollToContact} homePage={homePage}/>
      <About />
      <Skills />
      <Portfolio />
      <Contact scrollToTop={scrollToTop} contactPage={contactPage}/>
    </>
  );
}

export default App;
