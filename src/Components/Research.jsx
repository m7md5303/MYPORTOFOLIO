import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { Fade } from "react-awesome-reveal";
import {
    BrowserRouter as Router, Route, Link, Routes
  } from "react-router-dom";
  import introres from '../Images/Picsart_23-09-12_00-00-05-461.jpg'
  import logo from '../Images/Logo_2.jpg'
  import report from '../Images/Screenshot_2023-09-09-03-31-32-367_com.google.android.apps.docs.png'
  import poster from '../Images/Screenshot_2023-09-09-03-55-40-043_com.google.android.apps.docs.png'
  import mypho from '../Images/Screenshot_2023-09-09-03-20-03-556_com.brave.browser.png'
export default function Research() {
    

    return (
        
        <div className='research'>
             {window.scrollTo(0,0)}
            <img src={introres} className='introres'alt='Loading⏳'/>
        <div className='rintro'> <TypeAnimation
        sequence={[
          `Although I haven't participated in many projects related to scientific research, each one had its own taste and added to me special experience accompanied with pleasing skills. The researches didn't have to be related exactly to my industry field.\n   As you will see my best participation in a scientific research project, the project title was "Air Pollution"!`,
          1000,
          "",
        ]}
        speed={30}
        style={{ whiteSpace: 'pre-line', fontSize: '1.8em', color: 'white' 
        ,marginBottom:'12vh',marginLeft:'7.5vw'}}
        repeat={Infinity}
      /></div>
      
      <div className='pintro'>
      <h1>The 8th engineering scientific forum</h1>
      <Fade delay={200}><div className='fintro'>
       <p> It was one of the most interesting experiences that I went through. A scientific research which took around 80 days from beginning to the results day was an excellent way to enhance my skills concerning scientific research. It was my honour as a team leader to lead my team and participate with them in all the project phases till we were announced as the 5th ranked Team.</p>
       <img src={mypho}alt='Loading⏳'/>
      </div></Fade>
     <Fade delay={200}> <div className='tintro'>
      <p>Electronic Aliens-our team-project title was "Air Pollution". We were concerned about modelling the pollution particles in air especially P.M. 2.5 in a spatio-temporal way such that we can avoid its dangers. </p>
      <img src={logo}alt='Loading⏳'/>
      </div></Fade>
      <Fade delay={200}><div className='reintro'>
      <div className='retext'>
        <p>
          As a normal scientific research process, the journey started with the problem definintion phase. Then, going through the phases till reaching the Experimental work phase where we tried to test our model thorugh multi-tests. Hence, we were able then to compare the results with other models. Based on more than 30 references the report was executed. 
        </p>
       <Link to={"https://drive.google.com/file/d/1AKamWqDHIPVghDhB-z-xTkqYSpfPQ_Ud/view?usp=drivesdk"}>Click here to view the Report</Link>
      </div>
      <img src={report}alt='Loading⏳'/>
      </div></Fade>
      <Fade delay={200}><div className='pointro'>
        <div className='retextp'>
          <p>We had to construct a brief explanatory scientific poster by which we can explain to the judging doctors what we had done and what we had reached. I had the honour to design the major percentage of this poster. I was also-as a team leader-one of the main presenters on that day. </p>
          <Link to={"https://drive.google.com/file/d/1Wra7ZzxyOKcNVqN22GOs5epoYp9pCApc/view?usp=drivesdk"}>Click here to view the Poster</Link>       
        </div>
        <img src={poster}alt='Loading⏳'/>
      </div></Fade>
      </div>
  <Fade delay={200}> <div className='mintro'>
I have participated also in the 7th engineering research forum with another team and with a different topic "Internet Search Ranking Algorithms". It was a nice experience and provided me with 
special skills that I used in the next-year forum. Additionally, my school teachers sometimes asked us to do small researches on miscellaneous topics. 
   </div> </Fade> 
        </div> 
        
    )
}
