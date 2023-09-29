import React from 'react'
import { useState } from 'react'
import Dblue from './Dblue';
import scc from '../Images/q2sca.png'
import spi from '../Images/spi.png'
import dsp from '../Images/sca.png'
import riskv from '../Images/Capture2.PNG'
import alsu from '../Images/alsu_schematic_q1.png'
import Dyellow from './Dyellow';
export default function Dmlfcmp({imgd}) {
    const [show,setShow]=useState(false);  

    return (
        <div className='mdcmp'>
            <img src={imgd}/>
            <button onClick={()=>{setShow(!show)}} >{show? "Hide" :"Show"} </button>
            {show? <div className='projects'>
      <Dblue title={"SPI_slave with a single port RAM Design"} para={"SPI communication protocol is one of the most famous protocols. In this project a spi slave was implemented using verilog accompanied with a single port RAM. The master is able to send the data whether address or word to be stored in the RAM block through the implemented slave. It is also capable of receiving the serial data after being transformed from parallel after 12 clock cycles from asserting the SS_n signal."} img={spi} linka={"https://github.com/m7md5303/SPI_slave-with-a-single-port-RAM"}/>
      <Dyellow title={"Digital Signal Processing Unit Design"} para={"A DSP based on xilinix FPGA DSP (DSP48E1) with some extra combinational logic. The project was implemented using verilog. The design schematic was produced through vivado tool. The block is capable of performing many operations synchronously with the clock."} img={dsp} linka={"https://github.com/m7md5303/Digital-Signal-Processing-Unit"}/>
      <Dblue title={"Single cycle Risk v Design"} para={"A single cycle risk-v processor implemented using Verilog HDL. The schematic was generated using Quartz tool. The functionality was tested through forcing the inputs with certain values using ModelSim simulation."} img={riskv} linka={"https://github.com/m7md5303/Single-cycle-Risk-v"}/>
      <Dyellow title={"ALS_Unit Design"} para={"An arithmetic logic shift unit that performs operations on its inputs including XORing, Multiplication and rotating implemented with verilog. The functionality was tested by a testbench simulated using questasim. The schematic was generated with Quartz tool"} img={alsu} linka={"https://github.com/m7md5303/ALS_Unit"}/>   
      <Dblue title={"Simple moore machine for self driving car control system Design"} para={"A simple moore self driving car control system. The system is responsible for accelerating, decelerating or even braking up the car. It is also capable of providing a signal to lock or unlock the doors. The system was implemented with verilog and tested with a simple testbench simulated by questasim tool. The schematic was generated with Vivado tool."} img={scc} linka={"https://github.com/m7md5303/S_S_D_C_C"}/>
      
      
            </div> :null}
        </div>
    )
}
