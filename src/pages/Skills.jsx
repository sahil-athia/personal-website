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
      <div >
        <h1>
          Skills & Experience: 
          <div className="scatter">
            <h4 className="text" ref={text} ></h4>
            </div></h1>
        <div className="text-box"> 
        <h4>Languages →</h4>
        <p>JavaScript, Ruby, HTML, CSS</p>
        <h4>Frameworks/Libraries →</h4>
        <p>NodeJS, ReactJS, Ajax, Express, EJS, jQuery, Bootstrap, SASS, Rails</p>
        <h4>Systems, CMS, & Databases →</h4>
        <p>SQL, Git, Command Line</p>
        <h4>Testing →</h4>
        <p>Jest, Mocha, Chai, Cypress, Storybook</p>
        <h4>E-Commerce →</h4>
        <p>Shopify, Canva</p>
        </div>
      </div>
    </div>
  )
}