import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getData, patchData } from '../../../utils/Api';
import Loading from '../../shares/Loading';

const EditPost = () => {
    const userData = useSelector(state=>state.userData);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [cat, setCat] = useState('');
    const [tag, setTag] = useState('');
    const [tags, setTags] = useState('');
    const [cats, setCats] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const {id} = useParams();

    const loadSingleCat = async()=>{
      const resData = await getData(`/posts/${id}`);
      console.log('result', resData.result);
      const curPost = resData.result;
      setTitle(curPost.title);
      setContent(curPost.content);
      setTag(curPost.tag);
      setCat(curPost.cat);
  
    }

    const loadCats = async ()=>{
        const resData = await getData('/cats');
        if(resData.con){
            setCats(resData.result);

        }else{
            console.log(resData);
        }
    }
    const loadTags = async ()=>{
        const resData = await getData('/tags');
        if(resData.con){
            setTags(resData.result);
        
        }else{
            console.log(resData);
        }
    }

    useEffect(()=>{loadSingleCat();loadCats();loadTags();},[]);

    const apiUpdatePost = async()=>{
      const updateData = {title, cat, tag, content};
      console.log(updateData);
      const resData = await patchData(`/posts/${id}`, updateData,userData.token);
      if(resData.con){
        navigate('/admin/posts/all');
      }else{
        console.log(resData);
      }
      setIsLoading(false);

    }
    const submitPost = e =>{
        e.preventDefault();
        setIsLoading(true);
        console.log(title, content, tag, cat);
        apiUpdatePost();
    }

    return (
        <div className='col-md-8 offset-md-2 bg-dark p-5'>
            {isLoading && <Loading/>}
            <h2 className='text-center text-white'>Edit Post</h2>
            <form onSubmit={submitPost}>
                <div className='row'>
                    <div className='col-md-6 mb-3'>
                        <label htmlFor='title' className='form-label text-white'>title</label>
                        <input type='text' className='form-control' id='title' placeholder='' value={title} onChange={e => setTitle(e.target.value)} />

                    </div>
                    
                <div className='col-md-6 mb-3'>
                        <label htmlFor='tag' className='form-label text-white'>Category</label>
                        <select className='form-select' id='tag' onChange={e => setTag(e.target.value)} >
                        {cats.length > 0 && cats.map(caty => <option key={caty._id} value={caty._id} >{caty.name}</option>)}
                        </select>
                    </div>
                    <div className='col-md-6 mb-3'>
                        <label htmlFor='category' className='form-label text-white'>Tag</label>
                        <select className='form-select' id='category' onChange={e => setCat(e.target.value)} >
                        {tags.length > 0 && tags.map(tagy => <option key={tagy._id} value={tagy._id} >{tagy.name}</option>)}
                        </select>
                    </div>
                    <div className='mb-3'>
                    <label htmlFor='content' className='form-label text-white'>Content</label>
                    <textarea className='form-control' rows="3" defaultValue={content} id='content' onChange={e=>setContent(e.target.value)} ></textarea>
                    
                    </div>
                    <div className='mb-3 d-flex justify-content-end'>
                        <button className='btn me-3 btn-outline-warning btn-sm'>Cancel</button>
                        <button type='submit' className='btn btn-success btn-sm'>Update</button>
                    </div>
                    </div>
            </form>
        </div>
    )
}

export default EditPost
