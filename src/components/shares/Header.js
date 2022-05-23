import React from 'react'
import ev1 from "../../statics/bm/ev1.jpeg";
import new4 from "../../statics/bm/ev2.avif";
import new3 from "../../statics/bm/ev3.jpeg";
import videoMp4 from '../../statics/video.mp4';
import SlideImg from './SlideImg';

import {useSelector} from 'react-redux';
export default function Header() {
  const siteData = useSelector(state => state.siteData);
  console.log(siteData)
  return (
    <div className='row mt-5'>
      <div className='col-md-8'>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <SlideImg image={ev1} active="active" alt="Slide 1" title={siteData.title2} desc={siteData.para2}/>
            <SlideImg image={new4} active="" alt="Slide 2" title="Slide 2" desc="description 2"/>
            <SlideImg image={new3} active="" alt="Slide 3" title="Slide 3" desc="description 3"/>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className='col-md-4'>
        <video width="100%" controls>
          <source src={videoMp4}></source>
        </video>
        <h4 className='header-text'>{siteData.title1}</h4>
        <p className='para text-truncate'>
          {siteData.para1}
        </p>
      </div>
    </div>
  )
}
