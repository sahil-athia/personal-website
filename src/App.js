import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useRef, useEffect} from 'react'

import About from "./pages/About";
import Skills from "./pages/Skills";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  const contactPage = useRef()
  const scrollToContact = () => {
    if (contactPage.current) {
      contactPage.current.scrollIntoView({ behavior: "smooth" })
    }
  }


  return (
    <>
      <Home scrollToContact={scrollToContact}/>
      <About />
      <Skills />
      <Portfolio />
      <Contact contactPage={contactPage}/>
    </>
  );
}

export default App;
