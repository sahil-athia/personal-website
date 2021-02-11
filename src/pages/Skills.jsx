import {TextScramble} from '../helpers/scramble.js'
import React, { useEffect, useRef } from 'react'
import $ from "jquery";
import "./Skills.scss";

export default function Skills() {
  const [text1, text2, text3] = [useRef(<></>), useRef(<></>), useRef(<></>)];

  useEffect(() => {
  const viewportHeight = $(window).height();
    $(window).on("scroll", function () {
        if ($(document).scrollTop() > viewportHeight * 1.75 && $(document).scrollTop() < viewportHeight * 2.5) {
          $(".skills-box").addClass("scrolled");
        } else if ($(document).scrollTop() > viewportHeight * 2.5) {
            $(".skills-box").removeClass("scrolled");
        } else {
            $(".skills-box").removeClass("scrolled");
        }
    });

    const phrases1 = [ 
      "HTML", "JavaScript", "Ruby", "CSS", "Solidity"
    ]
    const phrases2 = [
      "NodeJS", "ReactJS", "Ajax", "Express", "EJS", "jQuery", "Bootstrap", "SASS", "Rails"
    ]
    const phrases3 = [
      "SQL", "Git", "Command Line"
    ]

    const el = [text1, text2, text3];
    const [fx1, fx2, fx3] = [new TextScramble(el[0]), new TextScramble(el[1]), new TextScramble(el[2])];

    let [timeOut1, timeOut2, timeOut3] = [null, null, null];
    let [counter1, counter2, counter3] = [0, 0, 0];

      const scramble1 = () => {
        fx1.setText(phrases1[counter1])
        .then(() => {
        timeOut1 = setTimeout(scramble1, 1000)
        })
        .catch(e => console.log(e))
        counter1 = (counter1 + 1) % phrases1.length;
      }

      const scramble2 = () => {
        fx2.setText(phrases2[counter2])
        .then(() => {
        timeOut2 = setTimeout(scramble2, 1000)
        })
        .catch(e => console.log(e))
        counter2 = (counter2 + 1) % phrases2.length;
      }
      
    const scramble3 = () => {
      fx3.setText(phrases3[counter3])
        .then(() => {
        timeOut3 = setTimeout(scramble3, 1000)
        })
        .catch(e => console.log(e))
      counter3 = (counter3 + 1) % phrases3.length;
    }

      
    // scramble1();
    // scramble2();
    // scramble3();
    
    return function cleanup() {
      clearTimeout(timeOut1, timeOut2, timeOut3);
    }
  }, [])

  return(
    <div className="skills-box">
      <div >
        <div className="scatter">
          <h4 className="text1" ref={text1} ></h4>
        </div>

        <div className="scatter">
            <h4 className="text2" ref={text2} ></h4>
          </div>

          <div className="scatter">
            <h4 className="text3" ref={text3} ></h4>
          </div>
        <h1>
          Skills & Experience: 
        </h1>
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