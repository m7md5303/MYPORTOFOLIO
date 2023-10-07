import React from 'react'

export default function ({title,para,img,linka}) {
    

    return (
        <div className='yellowc'>
            <h3>{title}</h3>
            <div className='subyellowc'>
                <div className='txt'>
                <p>{para}</p>
                </div>
                <img src={img}alt='Loading⏳'/>
            </div>
            
        </div>
    )
}
