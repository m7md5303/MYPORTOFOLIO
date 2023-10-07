import React from 'react'

export default function ({title,para,img}) {
    

    return (
        <div className='bluec'>
            <h3>{title}</h3>
            <div className='subbluec'>
                <div className='txt'>
                <p>{para}</p>
                </div>
                <img src={img}alt='Loading⏳'/>
            </div>
            
        </div>
    )
}
