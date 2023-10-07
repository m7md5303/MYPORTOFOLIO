import React from 'react'
import Nav from './Nav'
import myphoto from '../Images/IMG_20230323_212541.jpg'
import home from '../Images/computer-icons-house-blue-technology-0a0b4bf9169418b2d715b685b61e3cc3.png'
import research from '../Images/pngwing.com (3).png'
import ddesign from '../Images/1579976.jpg'
import web from '../Images/pngwing.com (w1).png'
import about from '../Images/PngItem_3406810.png'
import emb from '../Images/robowar-robot-human-head-face-clip-art-robot-53f8f7607749fd7c5c7491948fe0c336.png'
export default function Navbar(props) {
    

    return (
        <div className='mnavbar'>
        <img src={myphoto} className='mynavphoto'alt='Loading⏳'/>
        <ul className='navbar'>
        
<li><Nav linka={'/'} title={'Home'} src={home}/></li>
<li><Nav linka={'/DigitalElectronics'} title={'Digital Electronics'} src={ddesign}/></li>
<li><Nav linka={'/EmbeddedSystems'} title={'Embedded Systems'} src={emb}/></li>
<li><Nav linka={'/WebDevelopment'} title={'Web Development'} src={web}/></li>
<li><Nav linka={'/ScientificResearch'} title={'Scientific Research'} src={research}/></li>
<li><Nav linka={'/about'} title={'About'} src={about}/></li>
       </ul></div>
    )
}
