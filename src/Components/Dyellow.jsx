import React from 'react'
import {
    BrowserRouter as Link
  } from "react-router-dom";
export default function ({title,para,img,linka}) {
    

    return (
        <div className='yellow'>
            <h3>{title}</h3>
            <div className='subyellow'>
                <div className='txt'>
                <p>{para}</p>
                <Link to={linka}>Click here for the code.</Link>
                </div>
                <img src={img}alt='Loading⏳'/>
            </div>
            
        </div>
    )
}
