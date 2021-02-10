import "./Contact.scss";
import $ from 'jquery';
import {useEffect} from"react";

export default function Contact(props) {

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
    <div className="contact-box" ref={props.contactPage}>
      <span></span>
      <h1></h1>
      <hr></hr>
      <div></div>
      <hr></hr>
      <span className="scroll-top" onClick={props.scrollToTop}>Back to Top</span>
    </div>
  )
}
