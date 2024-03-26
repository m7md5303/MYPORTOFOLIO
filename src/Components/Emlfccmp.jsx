import React from 'react'
import { useState } from 'react'
import Dbluec from './Dbluec';
import Dyellowc from './Dyellowc';
import dd from '../Images/imtcer.jpeg'
import ie from '../Images/b.jpeg'
export default function Emlfccmp({imgd}) {
    const [show,setShow]=useState(false);  

    return (
        <div className='mdccmp'>
            <img src={imgd}alt='Loading⏳'/>
            <button onClick={()=>{setShow(!show)}} >{show? "Hide" :"Show"} </button>
            {show? <div className='dcourses'>

       <Dyellowc title={"Embedded Systems based on AVR Diploma"}para={"  The Diploma was provided by IMT School. It covered many important topics concerning Embedded Systems. The diploma content covered : \n-C Programming Language.\n-Embedded Systems Concepts.\n-Atmega 32 Interfacing.\n-Introduction to Software Testing with mentioning some techniques.\n-RTOS Basics.\n-Serial Communications protocols such as:\nUART.\nI2C.\nCAN.\nSPI.\nLIN."} img={dd}/>
       <Dbluec title={"Robotics Workshop"}para={"  The workshop was provided by Beta Training Academy. It introduced the concept of interfacing between a controller(Arduino) and other peripherials(i.e. servo motor, seven segement). It was a good start on the road of embedded systems. Our team project [The Smart Garage] won the 2nd place then."} img={ie}/>

            </div>:null}
        </div>
    )
}
