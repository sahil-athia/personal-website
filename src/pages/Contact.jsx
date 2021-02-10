import "./Contact.scss";
import $ from 'jquery';
import {useEffect, useState, useRef} from"react";

export default function Contact(props) {
  const [isVisible, setVisible] = useState(true);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <div className="contact-box" ref={props.contactPage}>
      <span className="contact-note" data-aos="fade-up" data-aos-duration="1500">GET IN TOUCH</span>

      <h1 className="contact-header" data-aos="fade-up" data-aos-duration="1500">CONTACT</h1>

      <hr className={`line-1 ${isVisible ? 'slide' : ''}`} ref={domRef}></hr>

      <div className="contact-info" data-aos="fade-up" data-aos-duration="1000">
        <div className="contact-words" data-aos="fade-up" data-aos-duration="1000">
          <span><b>Toronto, On</b></span><br></br>
          <span><b>(416) 995 2980</b></span><br></br>
          <span><b>sahilathia918@gmail.com</b></span>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000"></div>
      </div>

      <hr className={`line-2 ${isVisible ? 'slide' : ''}`} ref={domRef}></hr>

      <span 
        className="scroll-top" 
        onClick={props.scrollToTop} 
        >
        (Back to Top)
      </span>
    </div>
  )
}
