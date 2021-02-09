import "./Home.scss";

export default function Home(props) {
  return(
    <div className="home-box">
      <div className="menu">
        <span className="scroll-contact" onClick={props.scrollToContact}>CONTACT</span>
        <span>WELCOME</span>
        <span>MENU</span>
      </div>

      <div className="greeting">
        <p>HI, IM SAHIL ATHIA</p>
      </div>

      <div className="greeting-box">
        <span>SCROLL</span>
        
        <img className="greeting-icon" src={"https://images.unsplash.com/photo-1496498808362-7e2ec3b323d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80"}></img>
        <span>BASED IN TORONTO</span>
      </div>

      <div className="title">
        <p>WEB DEVELOPER</p>
      </div>
    </div>
  )
}