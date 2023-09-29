import React from 'react'
import {
    BrowserRouter as Router, Route, Link, Routes
  } from "react-router-dom";
export default function ({title,para,img,linka}) {
    

    return (
        <div className='yellowc'>
            <h3>{title}</h3>
            <div className='subyellowc'>
                <div className='txt'>
                <p>{para}</p>
                </div>
                <img src={img}/>
            </div>
            
        </div>
    )
}
