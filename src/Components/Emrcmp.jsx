import React from 'react'
import { useState } from 'react'
import { Fade } from "react-awesome-reveal";
export default function Emrcmp({imgd}) {
    const [show,setShow]=useState(false);  

    return (
        <div className='mdrcmp'>
            <img src={imgd}alt='Loading⏳'/>
            <button onClick={()=>{setShow(!show)}} >{show? "Hide" :"Show"} </button>
            {show?
            <Fade delay={200}> <div className='dskills'>
           <ul className='dlist'>
           <li>C  (Earned LinkedIn Badge)</li>
           <li>Embedded Systems Interface</li>
           <li>RTOS Basics</li>
           </ul>
            </div></Fade> :null}
        </div>
    )
}
