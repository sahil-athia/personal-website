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
      <span className="portfolio-note" data-aos="fade-up" data-aos-duration="1500">CLICK TO VIEW</span>
      <h1 className="portfolio-header" data-aos="fade-up" data-aos-duration="1500">PORTFOLIO</h1>
      <div className="projects" data-aos="fade-up" data-aos-duration="1500">
        <a target="_blank" href="https://github.com/sahil-athia/final-project">
          {/* <p className="project-text"></p> */}
          <img className="project-img" src={"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"}></img>
        </a>
        <a target="_blank" href="https://github.com/sahil-athia/Jungle">
          {/* <p className="project-text"></p> */}
          <img className="project-img" src={"https://magenticians.com/wp-content/uploads/2018/01/promote-your-online-store.jpg"}></img>
        </a>
        <a target="_blank" href="https://github.com/sahil-athia/scheduler">
          {/* <p className="project-text"></p> */}
          <img className="project-img" src={"https://images.unsplash.com/photo-1515847049296-a281d6401047?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"}></img>
        </a>
        <a target="_blank" href="https://github.com/sahil-athia/tweeter">
          {/* <p className="project-text"></p> */}
          <img className="project-img" src={"https://github.com/sahil-athia/tweeter/raw/master/docs/tweet-page.png?raw=true"}></img>
        </a>
        <a target="_blank" href="https://github.com/JaredFlomen/midterm">
          {/* <p className="project-text"></p> */}
          <img className="project-img" src={"https://wallpaperaccess.com/full/1078877.jpg"}></img>
         </a>
        <a target="_blank" href="https://github.com/sahil-athia/tinyapp">
          {/* <p className="project-text"></p> */}
          <img className="project-img" src={"https://neilpatel.com/wp-content/uploads/2017/08/url.jpg"}></img>
        </a>
      </div>
    </div>
  )
}