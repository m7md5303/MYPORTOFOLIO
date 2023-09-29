import React from 'react'
import { useState } from 'react'
import intro from '../Images/Picsart_23-09-28_03-33-28-287.jpg'
import projimg from '../Images/Picsart_23-09-28_03-35-11-677.jpg'
import skillimg from '../Images/Picsart_23-09-28_03-37-42-482.jpg'
import courseimg from '../Images/Picsart_23-09-28_03-36-41-079.jpg'
import Emrcmp from './Emrcmp'
import Emlfcmp from './Emlfcmp';
import Emlfccmp from './Emlfccmp'
export default function Embedded() {
    const [projshow,setProjshow]=useState(false);
    const [skillshow,setSkilljshow]=useState(false);
    const [courseshow,setCourseshow]=useState(false);
    return (
        
       <div className='digital'>
         {window.scrollTo(0,0)}
        <img className='dintro' src={intro}/>
 
        <div className='dcontainer'>
      <Emlfcmp imgd={projimg} /> 
      <Emrcmp imgd={skillimg} /> 
      <Emlfccmp imgd={courseimg} /> 
        </div>
       </div>
        
    )
}
