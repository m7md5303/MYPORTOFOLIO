import React from 'react'
import { useState } from 'react'
import { Fade } from "react-awesome-reveal";
export default function Dmrcmp({imgd}) {
    const [show,setShow]=useState(false);  

    return (
        <div className='mdrcmp'>
            <img src={imgd}alt='Loading⏳'/>
            <button onClick={()=>{setShow(!show)}} >{show? "Hide" :"Show"} </button>
            {show?<Fade delay={200}><div className='dskills'> 
           <ul className='dlist'>
           <li>Verilog</li>
           <li>FPGA flow using Vivado Tool</li>
           <li>FPGA flow using Quartus Tool</li>
           <li>Field Programmable gate array (FPGA)</li>
           <li>ModelSim</li>
           <li>QuestaSim</li>
           <li>System Verilog (SV)</li>
           <li>System Verilog Assertions (SVA)</li>
           <li>Universal Verification Methodology (UVM)</li>
           <li>Clock Domain Crossing (CDC)</li>
           <li>Static Timing analysis (STA)</li>
           <li>Tool Command Language (TCL)</li>
           <li>Familiar with HW/SW Co-design flow using Xilinx tools</li>
           
           </ul>
            </div></Fade>  :null}
        </div>
    )
}
