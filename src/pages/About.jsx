import "./About.scss";
import { useEffect } from "react"
import $ from 'jquery'
// import {init} from '../helpers/imageShift.js'

export default function About() {
  
  useEffect(() => {
    const viewportHeight = $(window).height();
    $(window).on("scroll", function () {
      if ($(document).scrollTop() > viewportHeight * 1.75 && $(document).scrollTop() < viewportHeight * 2.35) {
        $(".about-box").addClass("scrolled");
      } else if ($(document).scrollTop() > viewportHeight * 2.35) {
          $(".about-box").removeClass("scrolled");
      } else {
          $(".about-box").removeClass("scrolled");
      }
  });
  }, [])

  return (
    <div className="about-box">
      <h1 className="about-header">ABOUT</h1>
      <div className="image-box">
        
      </div>
      <div className="about-text">

      </div>
    </div>
  )
}