import {TextScramble} from '../helpers/scramble.js'
import React, { useEffect, useRef } from 'react'

export default function Skills() {
  const text = useRef(<></>);
  
  return(
    <div>
      <h1>Skills page</h1>
      <div className="scatter">
        <h4 className="text" ref={text} ></h4>
      </div>
    </div>
  )
}