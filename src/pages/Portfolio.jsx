import "./Portfolio.scss"
import { useEffect, useState } from "react"
import $ from 'jquery'

export default function Portfolio() {
  const ALL = "ALL"
  const JS = "JS"
  const RUBY = "RUBY"
  const DAPP = "DAPP"
  const [state, setState] = useState(ALL)

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
      <h1>Portfolio Page</h1>
      <a href="https://github.com/sahil-athia/final-project">Insight</a><br></br>
      <a href="https://github.com/sahil-athia/Jungle">Jungle</a><br></br>
      <a href="https://github.com/sahil-athia/scheduler">Scheduler</a><br></br>
      <a href="https://github.com/sahil-athia/tweeter">Tweeter</a><br></br>
      <a href="https://github.com/JaredFlomen/midterm">Guitar Market</a><br></br>
      <a href="https://github.com/sahil-athia/tinyapp">TinyApp</a>
    </div>
  )
}