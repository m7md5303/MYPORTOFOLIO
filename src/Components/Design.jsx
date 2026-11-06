import React, { useEffect } from 'react';
import { useState } from 'react'
import { Fade } from "react-awesome-reveal";
import intro from '../Images/Picsart_23-09-01_03-43-42-438.jpg'
import projimg from '../Images/Picsart_23-09-01_16-22-18-095.jpg'
import skillimg from '../Images/Picsart_23-09-02_02-19-11-790.jpg'
import courseimg from '../Images/Picsart_23-09-01_16-18-46-238.jpg'
import Dmrcmp from './Dmrcmp'
import Dmlfcmp from './Dmlfcmp';
import Dmlfccmp from './Dmlfccmp'
export default function Design() {

      useEffect(() => {
          window.scrollTo(0, 0);
      }, []);

    return (
        
       <div className='digital'>
        <img className='dintro' src={intro}alt='Loading⏳'/>
        
        <div className='dcontainer'>
        <Fade delay={200}><Dmlfcmp imgd={projimg} /> </Fade>
        <Fade delay={200}><Dmrcmp imgd={skillimg} /> </Fade>
        <Fade delay={200}> <Dmlfccmp imgd={courseimg} /> </Fade>
        </div>
        
       </div>
        
    )
}
