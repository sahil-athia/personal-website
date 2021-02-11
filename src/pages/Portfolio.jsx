import "./Portfolio.scss"
import { useEffect } from "react"
import $ from 'jquery'

export default function Portfolio() {
  
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
    </div>
  )
}