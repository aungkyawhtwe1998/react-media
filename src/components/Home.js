import React from 'react';
import { useSelector } from 'react-redux';
import Header from './shares/Header';
import HotNew from './shares/HotNew';
import ev1 from "../statics/bm/ev1.jpeg";
import ev3 from "../statics/bm/ev3.jpeg";
import ev4 from "../statics/bm/ev4.jpeg";
import ev5 from "../statics/bm/ev5.jpeg";
import ev6 from "../statics/bm/ev6.jpeg";
import adImg from "../statics/bm/ad.jpeg";
import HomeAffair from './shares/HomeAffair';
import logoImg from '../statics/bm/logo.png'
import SideNew from './shares/SideNew';
import videoMp4 from '../statics/video.mp4';
import SideVideoNew from './shares/SideVideoNew';
import banner1 from '../statics/bm/banner1.jpeg';
export default function Home() {
  const siteData = useSelector(state => state.siteData);
  return (
    <div className='container'>
      <div className='row mt-1'>
        <div className='col-md-2 align-item-center justify-content-center'>
          <img src={logoImg} width='80' height='80' className="mx-atuo"/>
          <span classNam="text-primary">MM-EV</span>
        </div>
        <div className='col-md-10'>
          <img src={banner1} width="100%"/>
        </div>
      </div>
      <Header />
      <div className='row'>
        <div className='col-md-8'>
          <div className='mt-1 bg-dark p-2 d-flex justify-content-between'>
            <button className='btn btn-danger btn-sm rounded-0'>Hot News</button>
            <button className='btn btn-primary btn-sm rounded-0'>Read More</button>
          </div>
          <div className='row'>
            <HotNew image={ev1} />
            <HotNew image={ev6} />
            <HotNew image={ev3} />
            <HotNew image={ev4} />
            <HotNew image={ev5} />
            <HotNew image={ev6} />

          </div>
          <div className='row'>
            <div className='col-12'>
            <img src={banner1}/>

            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <img src={adImg} width="100%" height="95%"/>

        </div>
      </div>
      <div className='row'>
      <div className='col-md-8'>
          <div className='mt-1 bg-dark p-2 d-flex justify-content-between'>
            <button className='btn btn-danger btn-sm rounded-0'>ပြည်တွင်း</button>
            <button className='btn btn-primary btn-sm rounded-0'>Read More</button>
          </div>
          <div className='row'>
            <HomeAffair image={ev1} />
            <HomeAffair image={ev6} />
            <HomeAffair image={ev3} />
            <HomeAffair image={ev4} />
            <HomeAffair image={ev5} />
            <HomeAffair image={ev6} />
          </div>
        </div>
        <div className='col-md-4'>
        <div className='mt-1 bg-dark p-2 d-flex justify-content-between'>
            <button className='btn btn-danger btn-sm rounded-0'>Hot News</button>
            <button className='btn btn-primary btn-sm rounded-0'>Read More</button>
          </div>
          <SideNew image={ev1}/>
          <SideNew image={ev6}/>
          <SideNew image={ev3}/>
          <SideVideoNew video={videoMp4}/>
        </div>
      </div>

    </div>
  )
}
