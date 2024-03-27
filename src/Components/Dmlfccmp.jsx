import React from 'react'
import { useState } from 'react'
import Dbluec from './Dbluec';
import Dyellowc from './Dyellowc';
import dd from '../Images/descer.png'
import ie from '../Images/ieee.jpeg'
import ver from '../Images/ver.png'
export default function Dmlfccmp({imgd}) {
    const [show,setShow]=useState(false);  

    return (
        <div className='mdccmp'>
            <img src={imgd}alt='Loading⏳'/>
            <button onClick={()=>{setShow(!show)}} >{show? "Hide" :"Show"} </button>
            {show? <div className='dcourses'>
       <Dyellowc title={"ASIC Diploma"} para={"The Diploma was provided by NajahNow Co. with the Cooperation of Zewail university. It covered RTL to GDS flow through: \n-Contrasting the difference between FPGA and ASIC flow. \n-Introducing lib files and flavors used for cells. \n-STA and interpretation of timing reports along with timing violations solution techniques.\n-Floorplanning, power planning, placement, routing and CTS. \n-Chip signoffs as well as physical verification and EMIR calculations. \n-Introduction to DFT, SDC and formal verification. \n-Introduction to DC, ICC and Prime Time tools. "} />        
       <Dbluec title={"Digital Verification Diploma"} para={"  The Diploma was provided by Eng.Kareem Waseem. It covered essential topics regarding digital verification. I had the honour to be awarded as one of the top performers throughout the diploma. The diploma content covered : \n-System Verilog Data types, tasks and functions.\n-System Verilog interfaces and how to use it in the design,testbench and the monitor files.\n-Enhancing the ability of establishing a good verification plan.\n-The way of constructing functional cover groups. \n-The way of constructing constraint blocks. \n-System Verilog Assertions. \n-Basics of OOP.\n-UVM structure and how to create a UVM based verification environment."}img={ver}/>
       <Dyellowc title={"Digital Design Diploma"}para={"  The Diploma was provided by Eng.Kareem Waseem. It covered many important topics concerning digital design. I was also awarded as one of the top performers throughout the diploma. The diploma content covered : \n-History of HDLs.\n-Verilog HDL and design flows.\n-Digital Design using Vivado flow.\n-Practising both combinational and sequential circuits design.\n-Practising both combinational and sequential circuits test benches.\n-Finite state machines (mealy and moore).\n-Memories.\n-Field Programmable Gate Array (FPGA).\n-Clock Domain Crossing.\n-Static Timing Analysis."} img={dd}/>
       <Dbluec title={"Digital Electronics Workshop"}para={"  The workshop was provided by IEEE CUSB. It covered the basics of digital design. The workshop included also some important points in specific topics like Static Timing analysis and dealing with Quartz tool. It has also enhanced communication and team work skills."} img={ie}/>

            </div>:null}
        </div>
    )
}
