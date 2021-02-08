import "./Contact.scss";
import $ from 'jquery';
import {useEffect} from"react";

export default function Contact() {

  useEffect(() => {
      $(".contact-box").on({
        mouseenter: function () {
          $('.shape').addClass("shape-border");
        },
    
        mouseleave: function () {
          $('.shape').toggleClass('shape-border');
        }
    });
  }, [])

  return (
    <div className="contact-box">
      <h1> CONTACT </h1>
      <div className="svg-wrapper">
        <h1 className="text">CONTACT</h1>
        <svg height="60" width="520" xmlns="http://www.w3.org/2000/svg">
        <rect className="shape" height="60" width="520" />
        <h1 className="text">CONTACT</h1>
        </svg>
    </div>
    </div>
  )
}
