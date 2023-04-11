import React from 'react'
import  './Footer.css';
import locker from "../../assets/images/digi_locker.jpg" ;
import dgindia from "../../assets/images/digitalIndiaF.jpg" ;
import email from "../../assets/images/email.png" ;
import gov from "../../assets/images/my_gov.jpg" ;
import call from "../../assets/images/phone-call.png" ;
import phone from "../../assets/images/phone.png" ;
import umang from "../../assets/images/umang.png" ;
import goi from "../../assets/images/goi.jpg" ;

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
       <img src={phone}/><a className="contact-text" href="#">080-22562727</a>
      </div>
      <div className="email">
       <img src={email}/><a className="contact-text" href="#">support@apnascheme.com</a>
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
           
           <img src={dgindia}/>
         </a>

        <a target="_blank" href="https://www.digilocker.gov.in/" >
         <img src={locker}/>
        </a>
        <a target="_blank" href="https://web.umang.gov.in/landing/">
          <img src={umang}/>
        </a>

         <a target="_blank" href="https://www.india.gov.in/" title="National Portal of India">
           <img src={goi}/>
         </a>
       <a title="myGovt" target="_blank" href="https://www.mygov.in/">
         <img src={gov}/>
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
