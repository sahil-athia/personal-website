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
      <span>GET IN TOUCH</span>
      <h1 className="contact-header">CONTACT</h1>
      <hr className={`line-1 ${isVisible ? 'slide' : ''}`} ref={domRef}></hr>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <hr className={`line-2 ${isVisible ? 'slide' : ''}`} ref={domRef}></hr>
      <span className="scroll-top" onClick={props.scrollToTop}>Back to Top</span>
    </div>
  )
}
