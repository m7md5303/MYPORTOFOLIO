import React from 'react'

export default function Dredc({title,para,img}) {
    

    return (
        <div className='dredc'>
        <div className='wtxtr'>
        <h1>{title}</h1>
        <p>{para}</p> 
        </div>
        <img src={img}alt='Loading⏳'/>
        </div>
    )
}
