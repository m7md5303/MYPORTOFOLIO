import React from 'react'
import { Fade } from "react-awesome-reveal";
import { TypeAnimation } from 'react-type-animation';
import introimg from '../Images/WhatsApp Image 2021-04-03 at 4.30.47 PM.jpeg'
import sumimg from '../Images/IMG_20220729_014025_795.jpg'
import thinking from '../Images/pngwing.com (7).png'
import project from '../Images/WhatsApp Image 2023-08-25 at 4.03.33 AM.jpeg'
import educ from '../Images/WhatsApp Image 2023-08-25 at 4.06.07 AM.jpeg'
import skill from '../Images/WhatsApp Image 2023-08-25 at 4.06.07 AM (1).jpeg'
import cont from '../Images/WhatsApp Image 2023-08-28 at 4.07.07 AM.jpeg'
import exp from '../Images/exphome.webp'
import cv from '../Images/cv.png'
import Lfcmp from './Lfcmp';
export default function Home() {
  
    return (
        
      <div className='home' >
         {window.scrollTo(0,0)}
         <Fade delay={200}>
        <img src={introimg} className='homeimg1' alt='Loading⏳'/>
        <TypeAnimation
        sequence={[
          `It's Mohamed Khaled speaking!  Don't forget to enjoy your time in my website.`,
          1000,
          "",
        ]}
        speed={50}
        style={{ whiteSpace: 'pre-line', fontSize: '1.8em', color: 'rgb(226, 215, 64)',fontWeight:'Bolder'
        ,marginBottom:'12vh',marginLeft:'7.5vw' }}
        repeat={Infinity}
      /></Fade>
      <div className='intro'>
    <div className='subintro'>
      <h3 className='subintrotitle'>Self Introduction</h3>
      <p className='subintrop'>My name is Mohamed Khaled. I am 22 years old. I live in Giza. I graduated from Cairo university faculty of engineering batch 2025.
        My major is Electronics and Electrical Communications. I am interested in Digital Electronics, scientific research and further more.
        For more details don't hesitate to explore my website.
      </p>
      
    </div>
    <img src={sumimg} className='introimg'alt='Loading⏳'/></div>

    <div className='postintro'>
      <div className='subpostintro'>
   <h3>What can you find here?</h3>
   <img src={thinking}/></div>
   
   <Fade delay={200}><Lfcmp title={'Experience'} para={'My Work experience timeline is mentioned with specifying my role nature in each as well as the organization.'}img={exp}/></Fade>
   <Fade delay={200}><Lfcmp title={'Education'} para={'My educational Phases are available for those who are interested. Also most of Courses I have taken are present with a brief describtion for each. '} img={educ}/></Fade>
   <Fade delay={200}><Lfcmp title={'Projects'} para={'You can find easily most of the projects I worked in. They are mostly related to Digital Electronics, Embedded Systems and Web Development. \nFor those who are interested, links of many of these projects on github are found in their specified place and can be easily viewed...by just few clicks.'} img={project}/></Fade>
   <Fade delay={200}><Lfcmp title={'Skills'} para={'Skills gained throughout the journey are added to be explored. They vary between technical and non-technical skills. On each page, you will find the skills related to the page topic; in order to be well organised among the website.'}img={skill}/></Fade>
   <Fade delay={200}><Lfcmp title={'Contact Info.'}para={'My email, social media accounts links are available also. Provided any questions or queries are present you can easily message me through one of the available means. '} img={cont}/></Fade>
   <Fade delay={200}><Lfcmp title={'CV'} para={"Eventually, my CV link is added to the website to be available for anyone who became interested while surfing through the pages or already is. You can easily access it through the added link. " } img={cv}/></Fade>
   </div>
    




      </div>
    
    )
}
