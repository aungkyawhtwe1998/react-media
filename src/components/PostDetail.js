import React, { useEffect, useState } from 'react';
import logoImg from '../statics/bm/logo.png';
import ev1 from "../statics/bm/ev1.jpeg";
import banner1 from '../statics/bm/banner1.jpeg';
import SideNew from './shares/SideNew';
import { useParams } from 'react-router-dom';
export default function PostDetail() {
  const [hotnews, setHotNews] = useState([]);
  const {id} = useParams();
  const [singlePost, setSinglePost] = useState({});

  const loadHotNews = async () => {
    const response = await fetch(`http://13.214.58.126:3001/posts/bytag/62a13ac702e3e94e7b2f882e`);
    const resData = await response.json();
    console.log('hot news', resData)
    setHotNews(resData.result.splice(0, 10));
  }
  const loadSinglePost= async()=>{
    const response = await fetch(`http://13.214.58.126:3001/posts/${id}`);
    const resData = await response.json();
    console.log('post', resData)
    setSinglePost(resData.result);
  }

  useEffect(() => { loadHotNews();loadSinglePost();}, [])

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

      <div className='row my-2'>
        <div className='col-md-8'>
        <div className='mt-1 bg-dark p-2'>
            <h6 className='text-light text-center'>{singlePost.title}</h6>
          </div>
            <img src={`http://13.214.58.126:3001/uploads/${singlePost.image}`} width="100%"/>
            <div>
            <i className='fa fa-user'></i><span> {singlePost.user}</span>
            </div>
            <p>
                {singlePost.content}
            </p>
        </div>
        </div>

    </div>
  )
}
