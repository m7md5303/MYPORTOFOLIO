import React from 'react'

export default function Lfcmp({title,para,img}) {
    

    return (
        <div className='lfcmp'>
            <div className='lfcmpw'>
 <h4>{title}</h4>
<p>{para}</p>
</div>
<img src={img}/>
</div>


        )
}
