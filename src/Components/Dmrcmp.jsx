import React from 'react'
import { useState } from 'react'
export default function Dmrcmp({imgd}) {
    const [show,setShow]=useState(false);  

    return (
        <div className='mdrcmp'>
            <img src={imgd}alt='Loading⏳'/>
            <button onClick={()=>{setShow(!show)}} >{show? "Hide" :"Show"} </button>
            {show? <div className='dskills'>
           <ul className='dlist'>
           <li>Verilog</li>
           <li>Digital Design flow using Vivado Tool</li>
           <li>Field Programmable gate array (FPGA)</li>
           <li>ModelSim</li>
           <li>Clock Domain Crossing (CDC)</li>
           <li>Static Timing analysis (STA)</li>
           <li>System Verilog</li>
           <li>System Verilog Assertions</li>
           </ul>
            </div> :null}
        </div>
    )
}
