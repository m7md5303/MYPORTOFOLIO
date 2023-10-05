import React from 'react'
import { useState } from 'react'
import Dbluec from './Dbluec';
import Dyellowc from './Dyellowc';
import dd from '../Images/ecer.jpeg'
import ie from '../Images/b.jpeg'
export default function Emlfccmp({imgd}) {
    const [show,setShow]=useState(false);  

    return (
        <div className='mdccmp'>
            <img src={imgd}/>
            <button onClick={()=>{setShow(!show)}} >{show? "Hide" :"Show"} </button>
            {show? <div className='dcourses'>

       <Dyellowc title={"Atmega 32 (AVR) Diploma"}para={"  The Diploma was provided by IMT School. It covered many important topics concerning Embedded Systems. The diploma content covered : \n-C Programming Language.\n-Embedded Systems Concepts.\n-Atmega 32 Interfacing.\n-Introduction to Software Testing with mentioning some techniques.\n-RTOS Basics.\n-Serial Communications protocols such as:\nUART.\nI2C.\nCAN.\nSPI.\nLIN."} img={dd}/>
       <Dbluec title={"Robotics Workshop"}para={"  The workshop was provided by Beta Training Academy.."} img={ie}/>

            </div>:null}
        </div>
    )
}
