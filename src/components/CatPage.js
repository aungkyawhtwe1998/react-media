import React, { useEffect, useState } from 'react';
import HomeAffair from './shares/HomeAffair';
import logoImg from '../statics/bm/logo.png'
import SideNew from './shares/SideNew';
import banner1 from '../statics/bm/banner1.jpeg';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function CatPage() {
  // const {type, id} = useParams();
  const [hotnews, setHotNews] = useState([]);
  const [localNews, setLocalNews] = useState([]);
  const [postByCat, setPostByCat] = useState([]);
  const [travelNews, setTravelNews] = useState([]);

  const [titleName, setTitleName] = useState('');
  const {type, id} = useSelector(state=>state.pageSetter);
  console.log(type, id)

  const loadHotNews = async () => {
    const response = await fetch('http://13.214.58.126:3001/posts/bytag/62a13a7502e3e94e7b2f881a');
    const resData = await response.json();
    console.log('hot news', resData)
    setHotNews(resData.result.splice(0, 6));
  }
  const loadTravelNews = async () => {
    const response = await fetch('http://13.214.58.126:3001/posts/byCat/62aeed7302e3e94e7b306e6a');
    const resData = await response.json();
    console.log('hot news', resData)
    setTravelNews(resData.result.splice(0, 6));
  }

  const loadPostByCat = async () => {
    const response = await fetch(`http://13.214.58.126:3001/posts/bycat/${id}`);
    const resData = await response.json();
    console.log('local news', resData)
    setTitleName(resData.result[0].cat.name);

    setPostByCat(resData.result.splice(0, 6));
  }
  useEffect(() => { loadPostByCat(); loadTravelNews();loadHotNews(); loadPostByCat(); }, [id])

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
      <div className='row'>
        <div className='col-md-8'>
          <div className='mt-1 bg-dark p-2 d-flex justify-content-between'>
            <button className='btn btn-danger btn-sm rounded-0'>{titleName}</button>
            <button className='btn btn-primary btn-sm rounded-0'>Read More</button>
          </div>
          <div className='row'>
            {postByCat.length > 0 && postByCat.map(hn => <SideNew key={hn._id} post={hn} wordcount={300}/>)}
          </div>
        </div>
        <div className='col-md-4'>

          <div className='mt-1 bg-dark p-2 d-flex justify-content-between'>
            <button className='btn btn-danger btn-sm rounded-0'>Hot News</button>
            <button className='btn btn-primary btn-sm rounded-0'>Read More</button>
          </div>
          {hotnews.length > 0 && hotnews.map(ln => <SideNew key={ln._id} post={ln} wordcount={40}/>)}

        </div>
      </div>

    </div>
  )
}
