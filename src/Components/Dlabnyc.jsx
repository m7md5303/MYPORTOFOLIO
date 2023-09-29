import React from 'react'

export default function Dlabnyc({title,para,img}) {
    

    return (
        <div className='dlabnyc'>
        <div className='wtxt'>
        <h1>{title}</h1>
        <p>{para}</p> 
        </div>
        <img src={img}/>
        </div>
    )
}
