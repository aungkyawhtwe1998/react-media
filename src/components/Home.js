import React, { useEffect, useState } from 'react';
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
  const [hotnews, setHotNews] = useState([]);
  const [localNews, setLocalNews] = useState([]);
  const [evNews, setEvNews] = useState([]);
  const [tourismNew, setTourismNes] = useState([]);


  const loadEVNews = async () => {
    const response = await fetch('http://13.214.58.126:3001/posts/bytag/62aef0d902e3e94e7b306fc6');
    const resData = await response.json();
   // console.log('hot news', resData)
    setEvNews(resData.result.splice(0, 6));
  }
  const loadTourismNews = async () => {
    const response = await fetch('http://13.214.58.126:3001/posts/bytag/62aef20502e3e94e7b30705b');
    const resData = await response.json();
   // console.log('hot news', resData)
    setTourismNes(resData.result.splice(0, 6));
  }

  const loadHotNews = async () => {
    const response = await fetch('http://13.214.58.126:3001/posts/bytag/62a13ac702e3e94e7b2f882e');
    const resData = await response.json();
    //console.log('hot news', resData)
    setHotNews(resData.result.splice(0, 6));
  }


  const loadPostByCat = async () => {
    const response = await fetch('http://13.214.58.126:3001/posts/bycat/62a140c402e3e94e7b2f8872');
    const resData = await response.json();
    //console.log('local news', resData)

    setLocalNews(resData.result.splice(0, 6));
  }
  useEffect(() => { loadEVNews(); loadHotNews();loadTourismNews(); loadPostByCat(); }, [])

  return (
    <div className='container'>
      <div className='row mt-1'>
        <div className='col-md-2 align-item-center justify-content-center'>
          <img src={logoImg} width='80' height='80' className="mx-atuo" />
          <span className="text-primary">MM-EV</span>
        </div>
        <div className='col-md-10'>
          <img src={banner1} width="100%" />
        </div>
      </div>
      <Header />
      <div className='row'>
        <div className='col-md-8'>
          <div className='mt-1 bg-dark p-2 d-flex justify-content-between'>
            <button className='btn btn-danger btn-sm rounded-0'>Enviornment News</button>
            <button className='btn btn-primary btn-sm rounded-0'>Read More</button>
          </div>
          <div className='row'>
            {evNews.length > 0 && evNews.map(hn => <HotNew key={hn._id} post={hn} />)}
          </div>
          <div className='row'>
            <div className='col-12'>
              <img src={banner1} />

            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <img src={adImg} width="100%" height="95%" />

        </div>
      </div>
      <div className='row'>
        <div className='col-md-8'>
          <div className='mt-1 bg-dark p-2 d-flex justify-content-between'>
            <button className='btn btn-danger btn-sm rounded-0'>Tourism</button>
            <button className='btn btn-primary btn-sm rounded-0'>Read More</button>
          </div>
          <div className='row'>
            {tourismNew.length > 0 && tourismNew.map(ln => <HomeAffair key={ln._id} post={ln} />)}
            {/* <HomeAffair image={ev1} />
            <HomeAffair image={ev6} />
            <HomeAffair image={ev3} />
            <HomeAffair image={ev4} />
            <HomeAffair image={ev5} />
            <HomeAffair image={ev6} /> */}
          </div>
        </div>
        <div className='col-md-4'>
          <div className='mt-1 bg-dark p-2 d-flex justify-content-between'>
            <button className='btn btn-danger btn-sm rounded-0'>Hot News</button>
            <button className='btn btn-primary btn-sm rounded-0'>Read More</button>
          </div>
          {hotnews.length > 0 && hotnews.map(hn => <SideNew key={hn._id} post={hn} wordcount={30} />)}
          {/* <SideNew image={ev1}/>
          <SideNew image={ev6}/>
          <SideNew image={ev3}/> */}
          <SideVideoNew video={videoMp4} />
        </div>
      </div>

    </div>
  )
}
