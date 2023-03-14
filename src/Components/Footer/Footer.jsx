import React, { useEffect } from 'react'
import './footer.css'
import video2 from '../../assets/video (2).mp4'
import SendIcon from '@mui/icons-material/Send';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CopyrightIcon from '@mui/icons-material/Copyright';

import Aos from 'aos';
import 'aos/dist/aos.css'

const Footer = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <section className='footer' id='about'>
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type='video/mp4'></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos='fade-up' className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel With Us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos='fade-up' type="text" placeholder='Enter Email address here'/>
            <button data-aos='fade-up' className='btn flex' type='submit'>
              SEND <SendIcon className='icon' sx={{fontSize:'18px'}}/>
            </button>
          </div>
        </div>
        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="/" className='logo flex'>
                <TravelExploreIcon className='icon'/>
                Travel.
              </a>
            </div>
            <div data-aos='fade-up' className="footerParagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque fuga ex quas adipisci quasi aspernatur. Distinctio nostrum eum, aut excepturi nemo id amet necessitatibus alias voluptatum mollitia sunt eaque corporis fugit iste voluptatibus temporibus sapiente omnis beatae commodi quibusdam minima doloribus. Autem alias animi quia neque, ipsum quod sit ullam!
            </div>
            <div data-aos='fade-up' className="footerSocials">
              <TwitterIcon className='icon'/>
              <YouTubeIcon className='icon'/>
              <InstagramIcon className='icon'/>
            </div>
          </div>
          <div className="footerLinks grid" id='contact'>
            <div data-aos='fade-up' data-aos-duration='3000' className="linksGroup">
              <span className="groupTitle">OUR AGENCY</span>
              <li className="footerList flex">
                <NavigateNextIcon className='icon'/>Services
              </li>
              <li className="footerList flex">
                <NavigateNextIcon className='icon'/>Insurance
              </li>
              <li className="footerList flex">
                <NavigateNextIcon className='icon'/>Agency
              </li>
              <li className="footerList flex">
                <NavigateNextIcon className='icon'/>Tourism
              </li>
              <li className="footerList flex">
                <NavigateNextIcon className='icon'/>Payment
              </li>
            </div>
            <div data-aos='fade-up' data-aos-duration='4000' className="linksGroup">
              <span className="groupTitle">PARTNERS</span>
              <li className="footerList flex">
                <NavigateNextIcon className='icon'/>Bookings
              </li>
              <li className="footerList flex">
                <NavigateNextIcon className='icon'/>Rentcars
              </li>
              <li className="footerList flex">
                <NavigateNextIcon className='icon'/>HostelWorld
              </li>
              <li className="footerList flex">
                <NavigateNextIcon className='icon'/>Trivago
              </li>
              <li className="footerList flex">
                <NavigateNextIcon className='icon'/>TripAdvisor
              </li>
            </div>
            <div data-aos='fade-up' data-aos-duration='5000' className="linksGroup">
              <span className="groupTitle">LAST MINUTE</span>
              <li className="footerList flex">
                <NavigateNextIcon className='icon'/>London
              </li>
              <li className="footerList flex">
                <NavigateNextIcon className='icon'/>California
              </li>
              <li className="footerList flex">
                <NavigateNextIcon className='icon'/>America
              </li>
              <li className="footerList flex">
                <NavigateNextIcon className='icon'/>Europe
              </li>
              <li className="footerList flex">
                <NavigateNextIcon className='icon'/>India
              </li>
            </div>
          </div>
          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE EVER</small>
            <small>COPYRIGHTS RESERVED </small>
            <small><CopyrightIcon sx={{height:'20px',paddingTop:'5px',verticalAlign:'top'}}/> ACHYUT 2023</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer