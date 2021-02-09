import "./About.scss";
// import {init} from '../helpers/imageShift.js'

export default function About() {
  return (
    <div className="about-box">
      <h1>About page</h1>
      <div className="image-box">
          {/* <img src={"https://www.cadencemag.co.uk/wp-content/uploads/2018/04/2017314-city.jpg-resize_then_crop-_frame_bg_color_FFF-h_1365-gravity_center-q_70-preserve_ratio_true-w_2048_.jpg"} className="pic" alt="location"></img> */}
      </div>

      <main>
        <div className="c-glitch" style={{backgroundImage: "url('https://images.unsplash.com/photo-1496498808362-7e2ec3b323d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80')"}}>
          <div className="c-glitch__img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1496498808362-7e2ec3b323d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80')"}}></div>
          <div className="c-glitch__img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1496498808362-7e2ec3b323d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80')"}}></div>
          <div className="c-glitch__img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1496498808362-7e2ec3b323d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80')"}}></div>
          <div className="c-glitch__img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1496498808362-7e2ec3b323d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80')"}}></div>
          <div className="c-glitch__img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1496498808362-7e2ec3b323d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80')"}}></div>
        </div>
      </main>
    </div>
  )
}