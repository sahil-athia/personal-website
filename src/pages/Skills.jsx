import {TextScramble} from '../helpers/scramble.js'
import React, { useEffect, useRef } from 'react'
import $ from "jquery";
import "./Skills.scss";

export default function Skills() {
  const [text1, text2, text3] = [useRef(<></>), useRef(<></>), useRef(<></>)];

  useEffect(() => {
    const viewportHeight = $(window).height();
    $(window).on("scroll", function () {
        if ($(document).scrollTop() > viewportHeight * 0.75 && $(document).scrollTop() < viewportHeight * 1.35) {
          $(".skills-box").addClass("scrolled");
        } else if ($(document).scrollTop() > viewportHeight * 1.35) {
            $(".skills-box").removeClass("scrolled");
        } else {
            $(".skills-box").removeClass("scrolled");
        }
    });
  }, [])

  return(
    <div className="skills-box">
        <h1 className="skills-header">
          SKILLS
        </h1>
        <div className="text-box">

            <div className="card-container" data-aos="fade-up" data-aos-duration="500">
              <div className="card">
                <a>
                  <div className="card--display">
                    <h4 className="title">Languages</h4>
                  </div>
                  <div className="card--hover">
                    <h4 className="title">Languages</h4>
                    <p className="description">
                      <ul>
                        <li>JavaScript</li>
                        <li>Ruby</li>
                        <li>HTML</li>
                        <li>CSS</li>
                      </ul>                      
                    </p>
                  </div>
                  <div className="card--border">
                  </div>
                </a>
              </div>
            </div>

            <div className="card-container" data-aos="fade-up" data-aos-duration="750">
              <div className="card">
                <a>
                  <div className="card--display">
                    <h4 className="title">Frameworks & Libraries </h4>
                  </div>
                  <div className="card--hover">
                    <h4 className="title">Frameworks & Libraries </h4>
                    <p className="description">
                      <ul>
                        <li>NodeJS</li>
                        <li>ReactJS</li>
                        <li>Ajax</li>
                        <li>Express</li>
                        <li>EJS</li>
                        <li>jQuery</li>
                        <li>Bootstrap</li>
                        <li>SASS</li>
                        <li>Rails</li>
                      </ul>                      
                    </p>
                  </div>
                  <div className="card--border">
                  </div>
                </a>
              </div>
            </div>

            <div className="card-container" data-aos="fade-up" data-aos-duration="1000">
              <div className="card">
                <a>
                  <div className="card--display">
                    <h4 className="title">Systems, CMS, & Databases</h4>
                  </div>
                  <div className="card--hover">
                    <h4 className="title">Systems, CMS, & Databases</h4>
                    <p className="description">
                    <ul>
                        <li>SQL</li>
                        <li>Command Line</li>
                        <li>Git Version Control</li>
                      </ul>  
                    </p>
                  </div>
                  <div className="card--border">
                  </div>
                </a>
              </div>
            </div>

            <div className="card-container" data-aos="fade-up" data-aos-duration="1250">
              <div className="card">
                <a>
                  <div className="card--display">
                    <h4 className="title">Testing </h4>
                  </div>
                  <div className="card--hover">
                    <h4 className="title">Testing </h4>
                    <p className="description">
                      <ul>
                        <li>Jest</li>
                        <li>Mocha</li>
                        <li>Chai</li>
                        <li>Cypress</li>
                        <li>Storybook</li>
                        <li>Capybara</li>
                      </ul>  
                    </p>
                  </div>
                  <div className="card--border">
                  </div>
                </a>
              </div>
            </div>
          </div>

          
	
    </div>
  )
}