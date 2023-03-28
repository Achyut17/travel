import React, { useEffect, useState } from 'react'
import './main.css'
import img from '../../assets/img (1).jpg'
import img2 from '../../assets/img (2).jpg'
import img3 from '../../assets/img (3).jpg'
import img4 from '../../assets/img (4).jpg'
import img5 from '../../assets/img (5).jpg'
import img6 from '../../assets/img (6).jpg'
import img7 from '../../assets/img (7).jpg'
import img8 from '../../assets/img (8).jpg'
import img9 from '../../assets/img (9).jpg'
import img10 from '../../assets/img (10).jpg'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import api from '../../api/card'

import Aos from 'aos';
import 'aos/dist/aos.css'

const Main = () => {
  const [data, setData] = useState([])

  const retrieve = async() => {
    const response = await api.get("/Data")
    return response.data
  }

  useEffect(()=>{
    Aos.init({duration:2000})
    const get = async() => {
      const allData = await retrieve();
      if(allData) setData(allData);
    }
    get()
  },[])

  return (
    <section className="main container section" id='packages'>
      <div className="secTitle" id='shop'>
        <h3 data-aos='fade-right' className="title">
          Most Visited destinations
        </h3>
      </div>
      <div className="secContent grid">
        {
          data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
            return(
              <div key={id} data-aos='fade-up' className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <LocationOnOutlinedIcon className='icon'/>
                    <span className="name">{location}</span>
                  </span>
                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>
                    <div className="desc">
                      <p>{description}</p>
                    </div>
                    <button className='btn flex'>
                      DETAILS <AssignmentTurnedInOutlinedIcon className='icon'/>
                    </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Main