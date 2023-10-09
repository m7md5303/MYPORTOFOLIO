import React from 'react'
import {
    BrowserRouter as Router, Route, Link, Routes
  } from "react-router-dom";
  import { useState } from 'react'
export default function Botnavitem({tit1,img1,linka,img2,tit2,sh}) {
    const [show,setShow]=useState({sh});

    return (
        <div>{sh?
<div className='contactt'>
    <h4>{tit1}</h4>
    <img src={img1} />
</div>:
<div className='contactt'>
<Link to={linka}>{tit2}</Link>
    <img src={img2} />
</div>}




        </div>
    )
}
