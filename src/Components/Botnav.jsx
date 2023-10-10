import React from 'react'
import Botnavitem from './Botnavitem'
import gm from '../Images/gm.png'
import fc from '../Images/fc.png'
import gh from '../Images/gh.png'
import ln from '../Images/ln.png'
export default function Botnav(props) {
    

    return (
        <div className='botnav'>
    
            <div className='botit'>
            <Botnavitem tit1={"m7md5303@gmail.com"} img1={gm} sh={true}/>
            <Botnavitem tit2={"Facebook"} img2={fc} sh={false} linka={"https://www.facebook.com/Mohamed.khaled.5303/"}/>
            <Botnavitem tit2={"LinkedIn"} img2={ln} sh={false} linka={"https://www.linkedin.com/in/mohamed-khaled-51144a69/"}/>
            <Botnavitem tit2={"GitHub"} img2={gh} sh={false} linka={"https://github.com/m7md5303"}/>
            </div>
        </div>
    )
}
