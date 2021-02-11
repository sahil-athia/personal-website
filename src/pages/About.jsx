import "./About.scss";
import { useEffect } from "react"
import $ from 'jquery'
// import {init} from '../helpers/imageShift.js'

export default function About() {
  
  useEffect(() => {
    const viewportHeight = $(window).height();
    $(window).on("scroll", function () {
      if ($(document).scrollTop() > viewportHeight * 1.75 && $(document).scrollTop() < viewportHeight * 2.5) {
        $(".about-box").addClass("scrolled");
      } else if ($(document).scrollTop() > viewportHeight * 2.5) {
          $(".about-box").removeClass("scrolled");
      } else {
          $(".about-box").removeClass("scrolled");
      }
  });
  }, [])

  return (
    <div className="about-box">
      <h1>About page</h1>
      <div className="image-box">
          {/* <img src={"https://www.cadencemag.co.uk/wp-content/uploads/2018/04/2017314-city.jpg-resize_then_crop-_frame_bg_color_FFF-h_1365-gravity_center-q_70-preserve_ratio_true-w_2048_.jpg"} className="pic" alt="location"></img> */}
      </div>
    </div>
  )
}