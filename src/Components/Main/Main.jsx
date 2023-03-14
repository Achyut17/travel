import React, { useEffect } from 'react'
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

import Aos from 'aos';
import 'aos/dist/aos.css'

const Data = [
  {
    "id": 1,
    "imgSrc": img,
    "destTitle": "Tillman and Sons",
    "location": "Tanzania",
    "grade": "quam nec dui",
    "fees": 2740,
    "description": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo."
  }, {
    "id": 2,
    "imgSrc": img2,
    "destTitle": "Kessler, Crona and Gorczany",
    "location": "China",
    "grade": "dapibus dolor vel",
    "fees": 4932,
    "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus."
  }, {
    "id": 3,
    "imgSrc": img3,
    "destTitle": "Ondricka, Carter and West",
    "location": "Czech Republic",
    "grade": "odio porttitor id consequat in",
    "fees": 1962,
    "description": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti."
  }, {
    "id": 4,
    "imgSrc": img4,
    "destTitle": "Homenick Inc",
    "location": "Dominican Republic",
    "grade": "duis bibendum felis sed",
    "fees": 3648,
    "description": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus."
  }, {
    "id": 5,
    "imgSrc": img5,
    "destTitle": "Emard-Beahan",
    "location": "Poland",
    "grade": "etiam justo etiam pretium iaculis",
    "fees": 4909,
    "description": "In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius."
  }, {
    "id": 6,
    "imgSrc": img6,
    "destTitle": "Purdy Inc",
    "location": "China",
    "grade": "turpis eget elit sodales scelerisque",
    "fees": 3683,
    "description": "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus."
  }, {
    "id": 7,
    "imgSrc": img7,
    "destTitle": "Kiehn-Heidenreich",
    "location": "Uganda",
    "grade": "amet lobortis sapien sapien non",
    "fees": 3885,
    "description": "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend."
  }, {
    "id": 8,
    "imgSrc": img8,
    "destTitle": "Schoen Inc",
    "location": "United States",
    "grade": "amet sem fusce consequat",
    "fees": 2911,
    "description": "Integer tincidunt ante vel ipsum."
  }, {
    "id": 9,
    "imgSrc": img9,
    "destTitle": "Rosenbaum and Sons",
    "location": "Finland",
    "grade": "lorem integer tincidunt ante",
    "fees": 2731,
    "description": "Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus."
  }, {
    "id": 10,
    "imgSrc": img10,
    "destTitle": "Bednar-Reichel",
    "location": "Poland",
    "grade": "vel sem sed sagittis nam",
    "fees": 830,
    "description": "Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa."
  }, {
    "id": 11,
    "imgSrc": img9,
    "destTitle": "Feest-Pouros",
    "location": "Greece",
    "grade": "natoque penatibus et magnis",
    "fees": 1754,
    "description": "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc."
  }, {
    "id": 12,
    "imgSrc": img8,
    "destTitle": "Kihn-Stiedemann",
    "location": "Poland",
    "grade": "dui vel nisl",
    "fees": 4198,
    "description": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc."
  }, {
    "id": 13,
    "imgSrc": img7,
    "destTitle": "Tromp and Sons",
    "location": "China",
    "grade": "ornare consequat lectus in",
    "fees": 4592,
    "description": "Nulla ut erat id mauris vulputate elementum. Nullam varius."
  }, {
    "id": 14,
    "imgSrc": img6,
    "destTitle": "Bashirian Group",
    "location": "East Timor",
    "grade": "in libero ut massa volutpat",
    "fees": 4701,
    "description": "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl."
  }, {
    "id": 15,
    "imgSrc": img5,
    "destTitle": "Effertz, Mante and Pouros",
    "location": "China",
    "grade": "nunc proin at",
    "fees": 1867,
    "description": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet."
  }, {
    "id": 16,
    "imgSrc": img4,
    "destTitle": "Wisoky-Kuhn",
    "location": "Afghanistan",
    "grade": "pretium iaculis diam erat fermentum",
    "fees": 4123,
    "description": "Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis."
  }, {
    "id": 17,
    "imgSrc": img3,
    "destTitle": "Bogisich, Rodriguez and Waelchi",
    "location": "China",
    "grade": "commodo placerat praesent blandit nam",
    "fees": 1306,
    "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus."
  }, {
    "id": 18,
    "imgSrc": img2,
    "destTitle": "Hudson-Witting",
    "location": "Poland",
    "grade": "ac neque duis",
    "fees": 3335,
    "description": "Aliquam non mauris. Morbi non lectus."
  }, {
    "id": 19,
    "imgSrc": img,
    "destTitle": "Harris, White and Brown",
    "location": "Philippines",
    "grade": "turpis adipiscing lorem",
    "fees": 4570,
    "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat."
  }
]

const Main = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
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
          Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
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