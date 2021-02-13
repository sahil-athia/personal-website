import "./Portfolio.scss"
import { useEffect, useState } from "react"
import $ from 'jquery'
import AllProjects from "../components/AllProjects.jsx"
import JsProjects from "../components/JsProjects.jsx"
import RubyProjects from "../components/RubyProjects.jsx"

export default function Portfolio() {
  const ALL = "ALL";
  const JS = "JS";
  const RUBY = "RUBY";
  const DAPP = "DAPP";
  const [state, setState] = useState(ALL);

  const changeView = (view) => setState(view);

  useEffect(() => {
    const viewportHeight = $(window).height();
    $(window).on("scroll", function () {
      if ($(document).scrollTop() > viewportHeight * 1.75 && $(document).scrollTop() < viewportHeight * 2.35) {
        $(".portfolio-box").addClass("scrolled");
      } else if ($(document).scrollTop() > viewportHeight * 2.35) {
          $(".portfolio-box").removeClass("scrolled");
      } else {
          $(".portfolio-box").removeClass("scrolled");
      }
  });
  }, [])

  return(
    <div className="portfolio-box">
      <span className="portfolio-note" data-aos="fade-up" data-aos-duration="1500">CLICK TO VIEW</span>
      <h1 className="portfolio-header" data-aos="fade-up" data-aos-duration="1500">PORTFOLIO</h1>
      <div className="button-box" data-aos="fade-up" data-aos-duration="1500">
        <button onClick={() => changeView(ALL)} className="button">All</button>
        <button onClick={() => changeView(JS)} className="button">JavaScript</button>
        <button onClick={() => changeView(RUBY)} className="button">Ruby</button>
      </div>
      {state === ALL && <AllProjects />}
      {state === JS && <JsProjects />}
      {state === RUBY && <RubyProjects />}
    </div>
  )
}