import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loading from '../../shares/Loading';

const AddPost = () => {
    const userData = useSelector(state=>state.userData);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [cat, setCat] = useState('');
    const [tag, setTag] = useState('');
    const [file, setFile] = useState('');
    const [tags, setTags] = useState('');
    const [cats, setCats] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const loadCats = async ()=>{
        const response = await fetch('http://13.214.58.126:3001/cats');
        const resData = await response.json();
        if(resData.con){
            setCats(resData.result);
            setCat(resData.result[0]._id);

        }else{
            console.log(resData);
        }
    }
    const loadTags = async ()=>{
        const response = await fetch('http://13.214.58.126:3001/tags');
        const resData = await response.json();
        if(resData.con){
            setTags(resData.result);
            setTag(resData.result[0]._id)
        }else{
            console.log(resData);
        }
    }

    useEffect(()=>{loadCats();loadTags()},[]);

    const apiAddPost = async()=>{
        const formData = new FormData();
        formData.append('title', title);
        formData.append('cat', cat);
        formData.append('tag',tag);
        formData.append('content', content);
        formData.append('file',file);
        console.log(formData)
        const response = await fetch("http://13.214.58.126:3001/posts",{
            method:"POST",
            body:formData,
            headers:{
                authorization:`Barer ${userData.token}`
            }
        });
        const resData = await response.json();
        console.log(resData)
        if(resData.con){
            navigate('/admin/posts/all');

        }else{
            console.log(resData);

        }
        setIsLoading(false);
    }

    const onFileChange = e => {
        setFile(e.target.files[0])
    }

    const submitPost = e =>{
        e.preventDefault();
        setIsLoading(true);
        console.log(title, content, tag, cat, file);
        apiAddPost();
    }



    return (
        <div className='col-md-8 offset-md-2 bg-dark p-5'>
            {isLoading && <Loading/>}
            <h2 className='text-center text-white'>Add New Post</h2>
            <form onSubmit={submitPost}>
                <div className='row'>
                    <div className='col-md-6 mb-3'>
                        <label htmlFor='title' className='form-label text-white'>title</label>
                        <input type='text' className='form-control' id='title' placeholder='' value={title} onChange={e => setTitle(e.target.value)} />

                    </div>
                    <div className='col-md-6 mb-3'>
                        <label htmlFor='file' className='form-label text-white'>Upload Image</label>
                        <input type='file' className='form-control' id='file' onChange={onFileChange} />
                    </div>
                    
                <div className='col-md-6 mb-3'>
                        <label htmlFor='tag' className='form-label text-white'>tag</label>
                        <select className='form-select' id='tag' onChange={e => setTag(e.target.value)}>
                            {tags.length > 0 && tags.map(tag => <option key={tag._id} value={tag._id}>{tag.name}</option>)}
                        </select>
                    </div>
                    <div className='col-md-6 mb-3'>
                        <label htmlFor='category' className='form-label text-white'>Category</label>
                        <select className='form-select' id='category' onChange={e => setCat(e.target.value)}>
                        {cats.length > 0 && cats.map(cat => <option key={cat._id} value={cat._id}>{cat.name}</option>)}
                        </select>
                    </div>
                    <div className='mb-3'>
                    <label htmlFor='content' className='form-label text-white'>Content</label>
                    <textarea className='form-control' defaultValue={content} id='content' onChange={e=>setContent(e.target.value)} row-3></textarea>
                    
                    </div>
                    <div className='mb-3 d-flex justify-content-end'>
                        <button className='btn me-3 btn-outline-warning btn-sm'>Cancel</button>
                        <button type='submit' className='btn btn-success btn-sm'>Create</button>
                    </div>
                    </div>
            </form>
        </div>
    )
}

export default AddPost 