import React from 'react'
import { Fade } from "react-awesome-reveal";
import aboutintro from '../Images/221599040_2344784828985632_1616524411177325289_n.jpg'
import expintro from '../Images/expabout.jpeg'
import eduintro from '../Images/wallpaperflare.com_wallpape.jpg'
import lanintro from '../Images/lang.jpeg'
import lancintro from '../Images/pxfu.jpg'
import hobyntro from '../Images/wallb.jpg'
import techintro from '../Images/technology-2082642-1200x675.jpg'
import cv from '../Images/cv.png'
import m from '../Images/m.jpg'
import {
    BrowserRouter as Router, Route, Link, Routes
  } from "react-router-dom";
export default function About() {
    

    return (
        
      <div className='about'>
        {window.scrollTo(0,0)}
<img src={aboutintro} className='aboutintro'alt='Loading⏳'/><Fade delay={200}>
<div className='cont'>
    
       <div className='conttxt'>
        <h1>Experience📝</h1>
        <div className='contitem'>
            <h3>RTL Design Engineer at Symbiotic EDA (Dec 2025-Present)</h3>
        </div>
        <div className='contitem'>
            <h3>External TA at Cairo University Faculty of Engineering (Feb 2026-Present)</h3>
        </div>
        <div className='contitem'>
            <h3>Hardware/Software Co-design Instructor - Self Employed (July 2026-Present)</h3>
        </div>
        <div className='contitem'>
           <h3>LLM-Intern (Dec 2025-Jan 2026)</h3>
        </div>
        <div className='contitem'>
            <h3>Part-time Environmental and Automation Engineer (Aug 2025-Feb 2026)</h3>
        </div>
        <div className='contitem'>
            <h3>Digital Design and Verification T.A.   (Aug 2024-Oct 2024), (Jun 2025-Nov 2025)</h3>
        </div>
        <div className='contitem'>
            <h3>Al-Massa International Travel group-Hij and Umrah Section    (Nov 2023-Feb 2024) </h3>
        </div>
        
       </div>
<img src={expintro}alt='Loading⏳' style={{maxHeight:'75vh'}} className='exp'/>

        </div>
        <div className='cont'>
       <div className='conttxt'>
        <h1>Education🎓</h1>
        <div className='contitem'>
            <h3>Cairo University-Faculty Of Engineering     (2025-Present)</h3>
            <p>Master Degree at Electronics &  Electrical Communications Department (Electronics and Computer Specialization)</p>
        </div>
        <div className='contitem'>
            <h3>Cairo University-Faculty Of Engineering     (2020-2025)</h3>
            <p>Major in Electronics &  Electrical Communications</p>
        </div>
        <div className='contitem'>
            <h3>Ibn Ataa' Allah-Languages School     (2008-2020)</h3>
            <p>General Secondary Certificate</p>
        </div>
       </div>
<img src={eduintro}alt='Loading⏳'/>

        </div>
        <div className='cont'>
       <div className='conttxt'>
        <h1>Languages🌍</h1>
        <div className='contitem'>
            <h3>Arabic</h3>
            <p>Native Language</p>
        </div>
        <div className='contitem'>
            <h3>English</h3>
            <p>Upper-Intermediate Level</p>
        </div>
        <div className='contitem'>
            <h3>German</h3>
            <p>Pre-Intermediate Level</p>
        </div>
       </div>
<img src={lanintro}alt='Loading⏳'/>

        </div>
        <div className='cont'>
       <div className='conttxt'>
        <h1>Language Courses📘</h1>
        <div className='contitem'>
            <h3>English</h3>
            <p>In progress through B2-level provided by the British Council in Egypt.</p>
            <p>Completed A2, B1-levels provided by the British Council in Egypt.</p>
        </div>
        <div className='contitem'>
            <h3>German</h3>
            
            <p>Completed A1.2, A1.3, A2 levels provided by Goethe Institue in Cairo.</p>
        </div>
       </div>
<img src={lancintro}alt='Loading⏳'/>

        </div>

        <div className='cont'>
       <div className='conttxt'>
        <h1>Personal Skills⚙️</h1>
        <div className='contitem'>
            <h3>-Leadership</h3>
            <h3>-Critical Thinking</h3>
            <h3>-Scientific Thinking</h3>
            <h3>-Presentation Skills</h3>
            <h3>-Written Communication</h3>
            <h3>-Team Work</h3>
        </div>
       </div>
<img src={techintro}alt='Loading⏳'/>

        </div>
       
     
        <div className='cont'>
       <div className='conttxt'>
        <h1>Hobbys⚽</h1>
        <div className='contitem'>
            <h3>-Football⚽</h3>
            <h3>-Reading📖</h3>
            <h3>-Writing🖊️</h3>
            <h3>-Home Gardening🌴</h3>
        </div>
       </div>
<img src={hobyntro}alt='Loading⏳'/>

        </div>
<div className='cv'>
    <div className='cvtxt'>
<h1>My C.V.</h1>
<p>Eventually, you can easily view my updated C.V. from the link below.😃</p>
<Link to="https://drive.google.com/file/d/1qSDYw742u7-tEkGJL07MTdLTFM2O5m55/view?usp=sharing">M.K. C.V. </Link>
    </div>
    <img src={cv}alt='Loading⏳'/>
</div>
        
        
        
        </Fade>
        <img src={m}className='m'alt='Loading⏳'/>
        </div> 

        
    )
}
