import React from 'react'
import { useState } from 'react'
import Dblue from './Dblue';
import scc from '../Images/p.png'
import spi from '../Images/calc.jpg'
import dsp from '../Images/temp.png'
import riskv from '../Images/do.png'
import alsu from '../Images/st.png'
import Dyellow from './Dyellow';
import Dbluec from './Dbluec';
export default function Emlfcmp({imgd}) {
    const [show,setShow]=useState(false);  

    return (
        <div className='mdcmp'>
            <img src={imgd}alt='Loading⏳'/>
            <button onClick={()=>{setShow(!show)}} >{show? "Hide" :"Show"} </button>
            {show? <div className='projects'>
      <Dblue title={"4 operation-calculator"} para={"A 4-operation Calculator {Addition, Subtraction, Multiplication, Division} with an accuracy reaching 4-digits after the decimal point. It was implemented with C programming language and uploaded to Atmega 32 controller. The other compenents used were:\n-Charachter LCD.\n-4x4 Keypad."} img={spi} linka={"https://github.com/m7md5303/4ops_4float_calc"}/>
      <Dyellow title={"Temprature Sensor"} para={"LM35 Temp. Sensor was used with Atmega 32 controller ADC peripheral in order to read the surrounding temprature. The temprature then is to be displayed on a Charachter LCD. As the temp reaches 40 or more, a connected LED is to light out. The project was implemented with C programming Language."} img={dsp} linka={"https://github.com/m7md5303/Tempsensor"}/>
      <Dblue title={"WatchDog Atmega 32 Driver"} para={"A watchDog driver was implemented with C Language to set up the WatchDog timer for Atmega 32 controller. "} img={riskv} linka={"https://github.com/m7md5303/Watchdog_Atmega32_driver"}/>
      <Dyellow title={"Stepper Motor Driver"} para={"A stepper motor driver was implemented with C Language. It was then connected to Atmega 32 Controller to test the functionality."} img={alsu} linka={"https://github.com/m7md5303/Stepper_Driver"}/>   
      <Dbluec title={"Smart Garage"} para={"I participated in the hardware and the garage design implementation. The project was based on Arduino Controller. Our team won the 2nd place in the competition that was associated with Beta Academy Robotics Workshop."} img={scc} />
      
      
            </div> :null}
        </div>
    )
}
