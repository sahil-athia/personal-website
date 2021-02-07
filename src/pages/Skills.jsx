import {TextScramble} from '../helpers/scramble.js'
import React, { useEffect, useRef } from 'react'
import "./Skills.scss";

export default function Skills() {
  const text = useRef(<></>);

  useEffect(() => {
    const phrases = [
      "Testing1",
      "Testing2",
      "Testing3",
      "Testing4"
    ]

    const el = text
    const fx = new TextScramble(el)
    let timeOut;
    let counter = 0
    async function next() {
      fx.setText(phrases[counter])
        .then(() => {
        timeOut = setTimeout(next, 800)
        })
        .catch(e => console.log(e))
      counter = (counter + 1) % phrases.length
    } 
    next()
    
    return function cleanup() {
      clearTimeout(timeOut)
    }
  }, [])

  return(
    <div className="skills-box">
      <div className="text-box">
        <h1>Skills & Experience</h1>
        <p> Description of major skills and experience</p>
      </div>
      <div className="scatter">
        <h4 className="text" ref={text} ></h4>
      </div>
    </div>
  )
}