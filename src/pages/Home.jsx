import "./Home.scss";
import {TextScramble} from '../helpers/scramble.js'
import React, { useEffect, useRef } from 'react'

export default function Home(props) {
  // const text = useRef(<></>);

  useEffect(() => {
    // const phrases = [
    //   'WEB DEVELOPER',
    //   'SMART CONTRACT DEV',
    //   'DECENTRALIZED APP DEV'
    // ]
    // const el = text
    // const fx = new TextScramble(el)
    // let timeOut;

    // let counter = 0
    // async function next() {
    //   fx.setText(phrases[counter])
    //     .then(() => {
    //     timeOut = setTimeout(next, 1500)
    //     })
    //     .catch(e => console.log(e))
    //   counter = (counter + 1) % phrases.length
    // } 
    // next()
    
    // return function cleanup() {
    //   clearTimeout(timeOut)
    // }
  }, [])

  return(
    <div className="home-box" ref={props.homePage}>
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
        <div className="greeting-icon">
          <div className="c-glitch" style={{backgroundImage: "url('https://images.unsplash.com/photo-1496498808362-7e2ec3b323d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80')"}}>
            <div className="c-glitch__img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1496498808362-7e2ec3b323d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80')"}}></div>
            <div className="c-glitch__img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1496498808362-7e2ec3b323d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80')"}}></div>
            <div className="c-glitch__img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1496498808362-7e2ec3b323d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80')"}}></div>
            <div className="c-glitch__img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1496498808362-7e2ec3b323d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80')"}}></div>
            <div className="c-glitch__img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1496498808362-7e2ec3b323d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80')"}}></div>
          </div>
        </div>
        {/* <img className="c-glitch" className="greeting-icon" src={"https://images.unsplash.com/photo-1496498808362-7e2ec3b323d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80"}></img> */}
        <span>BASED IN TORONTO</span>
      </div>

      <div className="title">
        <p>WEB DEVELOPER</p>
      </div>
    </div>
  )
}