import React from 'react'
import { useState } from 'react'
import { Fade } from "react-awesome-reveal";
import Dbluec from './Dbluec';
import Dyellowc from './Dyellowc';
import dd from '../Images/imtcer.jpeg'
import siecer from '../Images/siecer.jpeg'
import ie from '../Images/b.jpeg'
export default function Emlfccmp({imgd}) {
    const [show,setShow]=useState(false);  

    return (
        <div className='mdccmp'>
            <img src={imgd}alt='Loading⏳'/>
            <button onClick={()=>{setShow(!show)}} >{show? "Hide" :"Show"} </button>
            {show? <div className='dcourses'>
                <Fade delay={200}><Dbluec title={"Embedded Systems Essentials"} para={"The course was provided by Siemens Academy. It gave students strong foundation in Most of topics related to the Embedded Systems Essentials. This includes but not limited to:\n-Micro-controllers Architecture.\n-Memory Types.\n-AUTOSAR Architecture.\n-CAN Hierarchy.\n-Version Control with Git."} img={siecer}/></Fade>
                <Fade delay={200}> <Dyellowc title={"Embedded Systems based on AVR Diploma"}para={"  The Diploma was provided by IMT School. It covered many important topics concerning Embedded Systems. The diploma content covered : \n-C Programming Language.\n-Embedded Systems Concepts.\n-Atmega 32 Interfacing.\n-Introduction to Software Testing with mentioning some techniques.\n-RTOS Basics.\n-Serial Communications protocols such as:\nUART.\nI2C.\nCAN.\nSPI.\nLIN."} img={dd}/></Fade>
                <Fade delay={200}> <Dbluec title={"Robotics Workshop"}para={"  The workshop was provided by Beta Training Academy. It introduced the concept of interfacing between a controller(Arduino) and other peripherials(i.e. servo motor, seven segement). It was a good start on the road of embedded systems. Our team project [The Smart Garage] won the 2nd place then."} img={ie}/></Fade>

            </div>:null}
        </div>
    )
}
