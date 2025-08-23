import React from 'react'
import { useState } from 'react'
import { Fade } from "react-awesome-reveal";
import Dblue from './Dblue';
import scc from '../Images/q2sca.png'
import spi from '../Images/spi.png'
import spiv from '../Images/spiv.png'
import dsp from '../Images/sca.png'
import riskv from '../Images/Capture2.PNG'
import alsu from '../Images/alsu_schematic_q1.png'
import alsv from '../Images/als.png'
import absdc from '../Images/sdc1.png'
import pipe from '../Images/pipeimg.png'
import w16sch from '../Images/w16sch.png'
import mkp from '../Images/schematic_mk.png'
import sonar from '../Images/soundwaves.jpg'
import alublk from '../Images/alu_blks.png'
import imgcrp from '../Images/imgcrp.png'
import i2cimg from '../Images/i2c.png'
import sscuimg from '../Images/sscusch.png'
import rgbimg from '../Images/cnrtrsch.png'
import csiimg from '../Images/csi2.png'
import sysbd from '../Images/Sys bd.png'
import Dyellow from './Dyellow';
import Dyellowc from './Dyellowc';
export default function Dmlfcmp({imgd}) {
    const [show,setShow]=useState(false);  

    return (
        <div className='mdcmp'>
            <img src={imgd}alt='Loading⏳'/>
            <button onClick={()=>{setShow(!show)}} >{show? "Hide" :"Show"} </button>
            {show? <div className='projects'>
      <Fade delay={200}><Dblue title={"Pure Hardware YOLO Inference"} para={"Pure Hardware-based Inference for YOLO network. The system relies mainly on the IP accelerator generated using FINN framework and the post-processing responsible for detecting the results was performed using a Verilog-based module. The system was trained on a cars dataset and its duty is to determine if a car exists or not and at which grid in the 416 x 416 image. The target board was ZCU102 while PYNQ-Z2 was used for testing purposes and for visualizing the results."} img={sysbd} linka={"https://github.com/m7md5303/pure-hardware-YOLO-inference"}/></Fade>
      <Fade delay={200}><Dyellowc title={"HW/SW Co-design-based Image Processing Pipeline"} para={"An image processing piepline implemened based on Xilinx IPs targetting the ZCU102 board. Vivado and Vitis tools were used for integrating the HW and SW Parts. Additionally, I have used AXI VIP for HW/SW Co-verification for the IPs responsible for the image processing. The system was enhanced with read and write buffer IPs from Xilinx for Real-time purposes."} img={csiimg}/></Fade>
      <Fade delay={200}><Dblue title={"RGB to Grey Converter with AXI-Stream Interface"} para={"Image processing block that converts input RGB pixels into grey ones in one clock cycle only. It has the ability to receive one pixel from its input AXI-Stream interface each clock and generate the converted one using AXI-Stream protocol as well. The conversion process is free of floating point calculations. The accurace was more than 90% based on the results from the ~95% coverage-achieving testbench. SVA besides the main testbench were used to check the validity of the design."} img={rgbimg} linka={"https://github.com/m7md5303/RGB2gray-converter"}/></Fade>
      <Fade delay={200}><Dyellow title={"Speed and Steering Control Unit"} para={"Speed and steering control unit implemented with Verilog. Its main application is to control vehicles on highways. It has 13 x 13 input grid to know at which grid in the input image is having an obstacle. It is also in need to know the number of lanes, the current lane index and its boundaries through its input ports. The module was verified using System Verilog through a coverage-driven testbench"} img={sscuimg} linka={"https://github.com/m7md5303/verilog_vehicle_motion_control"}/></Fade>
      <Fade delay={200}><Dblue title={"I2C Master controller for single-master-single-slave bus"} para ={"I2c master controller that was implemented using Verilog and its schematic was generated using Vivado. The block is for initializing the SI1145 light sensor. The design is accompanied with a clock divider to suit the sensor clock. The master has the ability to do both write and read operations."} img={i2cimg} linka={"https://github.com/m7md5303/master-i2c-verilog"}/></Fade>
      <Fade delay={200}><Dyellow title={"Image height cropper"} para={"Verilog module that crops the image height, given the receiving block is AXI_Stream-slave interfaced. It has the flexibility to crop from whether the top of the image or the bottom or even both with just configuring the module parameters"} img={imgcrp} linka={"https://github.com/m7md5303/image_height_crop"}/></Fade>
      <Fade delay={200}><Dblue title={"Design and Verification for Ultrasonic Sytsem"} para={"I have contributed in an ultrasonic-zynq based-system with strongly participating in the top module UVM environment developing along with the stimulus generation. Verification of the system decoder using SV and SVA. Design of the receiving block in the control unit besides the storage RAM for the same block. The waveforms were generated using QuestaSim."} img={sonar} linka={"https://github.com/m7md5303/DV-UltrasonicSystem"} /> </Fade>
      <Fade delay={200}><Dyellow title={"MK5303 Processor"} para={"Design of Three address instruction-format processor with register, direct, indirect and immediate addressing modes. I have also designed the processor instruction set with a simple documentation for its datasheet. The schematic was produced using Vivado tool and the functionality was checked using QuestaSim tool. The project was implemented using Verilog"} img={mkp} linka={"https://github.com/m7md5303/MK5303-Processor"}/></Fade>
      <Fade delay={200}><Dblue title={"16-bit Wallace multiplier"} para={"16-bit Wallace multiplier implemented with Verilog and synthesised using Design Compiler tool. The functionality was checked using a simple testbench simulated on QuestaSim. The block mainly consists of sub blocks of just half and full adders."} img={w16sch} linka={"https://github.com/m7md5303/16-bit-wallace-multiplier"}/></Fade>
      <Fade delay={200}><Dyellow title={"Pipelined Risk-v based Processor"} para={"A 5-stage pipelined risk-v based processor implemented with verilog along with the implementation of a hazard handling unit. The stages are Fetch, decode, execute, memory and write back cycles. The functionality was tested through QuestaSim while the schematic was produced using Quartus Prime tool."} img={pipe} linka={"https://github.com/m7md5303/Pipelined-Risk-V-based-processor"}/></Fade>
      <Fade delay={200}><Dblue title={"4-operation ALU using Vivado block design method"} para={"The ALU was designed using the block design method provided by Vivado. The multiplier IP was added from Vivado IP list while the other blocks were designed using Verilog. A simple SystemVerilog testbench was simulated on Vivado to validate the functionality. The whole flow till generating the bitstream can be viewed from the pdf uploaded on the design repo on GitHub."} img={alublk}linka={"https://github.com/m7md5303/ALU-with-Vivado-block-design-method"}/></Fade>
      <Fade delay={200}><Dyellow title={"SDC file for two blocks"}para={"SDC file concerned with timings in two blocks: A and B. It sets the max delays for both input and output ports. Creation of clocks and generating clock signals from their origin are also included. It also excludes false paths from being analyzed to save runtime in the STA concerned tools."}img={absdc}linka={"https://github.com/m7md5303/AB_SDC"}/></Fade>
      <Fade delay={200}><Dblue title={"SPI Slave UVM environment"}para={"I have build a complete UVM environment for verifying SPI_Slave with a single port RAM. I have also designed the golden model for checking the output with it. The waveforms and the UVM packages were used through Questa Sim tool."}img={spiv}linka={"https://github.com/m7md5303/SPI_UVM"}/></Fade>
      <Fade delay={200}><Dyellow title={"ALS_Unit Verification"} para={"A 5-operation Arithmetic Logic unit was verified using system verilog. Suitable stimulus wase generated with the company of constraint blocks to check the design functionality. The design performance was watched through the wave form generated by Questa Sim."}img={alsv}linka={"https://github.com/m7md5303/ALSU-SV-Verification"}/></Fade>
      <Fade delay={200}><Dblue title={"SPI_slave with a single port RAM Design"} para={"SPI communication protocol is one of the most famous protocols. In this project a spi slave was implemented using verilog accompanied with a single port RAM. The master is able to send the data whether address or word to be stored in the RAM block through the implemented slave. It is also capable of receiving the serial data after being transformed from parallel after 12 clock cycles from asserting the SS_n signal."} img={spi} linka={"https://github.com/m7md5303/SPI_slave-with-a-single-port-RAM"}/></Fade>
      <Fade delay={200}><Dyellow title={"Digital Signal Processing Unit Design"} para={"A DSP based on xilinix FPGA DSP (DSP48E1) with some extra combinational logic. The project was implemented using verilog. The design schematic was produced through vivado tool. The block is capable of performing many operations synchronously with the clock."} img={dsp} linka={"https://github.com/m7md5303/Digital-Signal-Processing-Unit"}/></Fade>
      <Fade delay={200}><Dblue title={"Single cycle Risk v Design"} para={"A single cycle risk-v processor implemented using Verilog HDL. The schematic was generated using Quartz tool. The functionality was tested through forcing the inputs with certain values using ModelSim simulation."} img={riskv} linka={"https://github.com/m7md5303/Single-cycle-Risk-v"}/></Fade>
      <Fade delay={200}><Dyellow title={"ALS_Unit Design"} para={"An arithmetic logic shift unit that performs operations on its inputs including XORing, Multiplication and rotating implemented with verilog. The functionality was tested by a testbench simulated using questasim. The schematic was generated with Quartz tool"} img={alsu} linka={"https://github.com/m7md5303/ALS_Unit"}/></Fade>   
      <Fade delay={200}><Dblue title={"Simple moore machine for self driving car control system Design"} para={"A simple moore self driving car control system. The system is responsible for accelerating, decelerating or even braking up the car. It is also capable of providing a signal to lock or unlock the doors. The system was implemented with verilog and tested with a simple testbench simulated by questasim tool. The schematic was generated with Vivado tool."} img={scc} linka={"https://github.com/m7md5303/S_S_D_C_C"}/></Fade>
      
      
            </div> :null}
        </div>
    )
}
