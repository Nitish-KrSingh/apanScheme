import React from 'react'
import  './Footer.css';

const Footer = () => {
  return (
   <>
        <footer>

<div className="content">
 
  <div className="left box">
    <div className="upper">
      <div className="topic">About us</div>
      <p> ApnaScheme - a web application designed to assist citizens in finding the most suitable government schemes that meet their needs.</p>
    </div>
    <div className="lower">
      <div className="topic">Contact us</div>
      <div className="phone">
       <img src="phone-call.png"/><a className="contact-text" href="#">080-22562727</a>
      </div>
      <div className="email">
       <img src="email.png"/>  <a className="contact-text" href="#">support@apnascheme.com</a>
      </div>
    </div>
  </div>

  <div className="middle box">
    <div className="topic">Quick links</div>
    <div><a href="#">Home</a></div>
    <div><a href="#">Contact us</a></div>
    <div><a href="#">Services</a></div>
    <div><a href="#">FAQs</a></div>
    <div><a href="#">Team</a></div>
   
  </div>
  <div className="right box">
    <div className="topic">Subscribe us</div>
    <form>
      <input type="text" placeholder="Enter email address"/>
      <input type="submit" name="" value="Send"/>
      <br/>
      <br/>
      <div className="media-icons">
         <div className="topic">Usefull links</div>
         <a target="_blank" href="https://digitalindia.gov.in" title="Digital India">
           
           <img src="digitalIndiaF.jpg"/>
         </a>

        <a target="_blank" href="https://www.digilocker.gov.in/" >
         <img src="digi_locker.jpg"/>
        </a>
        <a target="_blank" href="https://web.umang.gov.in/landing/">
          <img src="umang.png"/>
        </a>

         <a target="_blank" href="https://www.india.gov.in/" title="National Portal of India">
           <img src="goi.jpg"/>
         </a>
       <a title="myGovt" target="_blank" href="https://www.mygov.in/">
         <img src="my_gov.jpg"/>
       </a>
      </div>
    </form>
  </div>
</div>


<div className="bottom">
  <p>Copyright © 2023 <a href="#">apnaScheme</a> All rights reserved</p>
</div>

</footer>
   </>
  )
}

export default Footer;
