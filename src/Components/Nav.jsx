import React from 'react';
import {Link} from 'react-router-dom';
export default function Nav({title,src,linka}) {

    return (
        <div className='navitem'>
<Link to={linka}>{title}</Link>
<img src={src} className='navimg'alt='Loading⏳'/>
        </div>
    )
}
