import React from 'react'

  import { Fade } from "react-awesome-reveal";
  import Dlabnyc from './Dlabnyc';
  import Dredc from './Dredc';
import webintro from '../Images/web.jpg'
import sp from '../Images/WiqK.gif'
import webGif from '../Images/6ELx.gif';
import masGif from '../Images/fxU6.gif';
import cgif from '../Images/vsgif_com__.3260760.gif';
import masintro from '../Images/Screenshot 2023-09-13 043826.png'
import mascar from '../Images/Screenshot 2023-09-13 043851.png'
import masform from '../Images/Screenshot 2023-09-13 043802.png'
import mongo from '../Images/wp8725088-mongodb-wallpapers.jpg'
import qrg from '../Images/animation_lmo4xl2u_small.gif'
import qrintro from '../Images/Screenshot 2023-09-13 042043.png'
import por from '../Images/Screenshot (101).png'
import qrd from '../Images/Screenshot 2023-09-13 042120.png'
import pi from '../Images/WhatsApp Image 2021-04-03 at 4.30.47 PM.jpeg'

export default function Web() {

    return (
        
       <div className='web'>
        {window.scrollTo(0,0)}
<img src={webintro} className='webintro'alt='Loading⏳'/>

<div className='webdet'>
<Fade delay={200}>
<div className='webtit'>
<h2>Projects 🌐</h2>
<img src={webGif}className='webgif'alt='Loading⏳'/>
</div>
</Fade>
<Fade delay={200}>
<div className='masweb'alt='Loading⏳'>
<h2> 1-Front & Back ends implementation of a template for a travelling and car renting company</h2>
<img src={masGif}className='masgif'alt='Loading⏳'/>
</div>
</Fade>
<div className='masdet'>
<Fade delay={200}>
  <Dlabnyc title={"Project Describtion"} img={masintro} para={"The website included 6 webpages serving different purposes. Home, cars, flight, Hij and Omra, contact and about pages were implemented using React JS and Css. The design aim was to simplify the browsing for the user and to well display the company data to be on the website."}/>
</Fade>
<Fade delay={200}>
  <Dlabnyc title={"Car Cards"} img={mascar}para={"In the cars page, you will find various car models with a little words below the car photo. Each model was put in a seperate card. Hence, each model is displayed clearly and in an elegant way."}/>
</Fade>
<Fade delay={200}>
  <Dlabnyc title={"Reservations"} img={masform}para={"In order to make the website a reservation port for the customer, reservation forms were implemented in the contact page. It is required from the customer to fill them properly so that he can submit his info with the submission button."}/>
</Fade>
<Fade delay={200}>
  <Dlabnyc title={"Data Base"}img={mongo}para={"A mongo data base was constructed for each form so that the submitted information is automatically stored in the base. This allows the company to be acknowledged with the info and the desired reservation category."}/>
</Fade>
</div>
<Fade delay={200}>
<div className='masweb'>
<h2> 2-QR Attendance App Interface</h2>
<img src={qrg}className='qrgif'alt='Loading⏳'/>
</div>
</Fade>
<div className='qrdet'>
  <Fade delay={200}>
    <Dredc title={"Project Describtion"}img={qrintro}para={"An interface for a QR attendance recording app. The app was implemented by ReactJS and Css. It was built mainly for attendance recording concerning students however, with few editing it can fit other applications. My teammates were responsible for linking the QR scanning with a spatio-temporal checking."}/>
  </Fade>
  <Fade delay={200}>
    <Dredc title={"Inside the App"}img={qrd}para={"It is required from the tutor/the person who's recording the attendance to select the lecture/specific event hence, the QR is appeared to be scanned."}/>
  </Fade>
</div>
<Fade delay={200}>
<div className='masweb'>
<h2> 3-My Portfolio</h2>
<img src={pi}className='masgif'alt='Loading⏳'/>
</div>
</Fade>
<Fade delay={200}>
<div className='masdet'>
<Dlabnyc title={"M.K. Portfolio"}img={por}para={"Definitely. My portflio is-of course-one of my projects. It is implemented by ReactJS and Css. It aims to well explain my past experience to a sufficient degree. I won't talk too much and let you explore😉."}/>
</div>
</Fade>
</div>
<Fade delay={200}>
<div className='webtit'>
<h2>Courses 📘</h2>
<img src={cgif}className='webgif'alt='Loading⏳'/>
</div>
</Fade>
<Fade delay={200}>
<div className='wcor'>
<h3>Web Development Workshop</h3>
<p>The workshop included the basics of web development. It concentrated on websites implementation using ReactJs,Css w.r.t. front-end. It didn't neglect the back-end part. Node Js and MongoDB were included. Axios for the linking were mentioned also. The workshop was effective and occupied with important content regarding web development.</p>
</div>
</Fade>
<Fade delay={200}>
<div className='webtit'>
<h2>Strength Points 👌</h2>
<img src={sp}className='webgif'alt='Loading⏳'/>
</div>
</Fade>
<Fade delay={200}>
<div className='wcorb'>
<ul>
  <li>Very good in utilizing Css.</li>
  <li>Familiar with ReactJs with a sufficient knowledge concerning the basics.</li>
</ul>
</div>
</Fade>

       </div>   
        
    )
} 
