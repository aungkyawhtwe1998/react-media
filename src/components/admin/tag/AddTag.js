import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { formPost } from '../../../utils/Api';
import Loading from '../../shares/Loading';
const AddTag = () => {
  const [name,setName] = useState('');
  const [file, setFile] = useState('');
  const userData = useSelector(state => state.userData);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const onFileChange = e =>{
    setFile(e.target.files[0]);
  }
 
  console.log(userData);

  const apiTagsAdd = async()=> {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('file',file);
    const resData = await formPost("/tags",formData,userData.token)
    console.log(resData);
    if(resData.con){
      navigate('/admin/tags/all')
    }else{
      console.log(resData)
    }
    setIsLoading(false);

  }
  const submitTags = e => {
    e.preventDefault();
    setIsLoading(true);
    apiTagsAdd();
    console.log(name,file);
  }
  return (
    <div className='col-md-8 offset-md-2 bg-dark p-5'>
      {isLoading && <Loading/>}
      <h1 className='text-white text-center'>Add New Tags</h1>
      <form onSubmit={submitTags}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label text-white" >Name</label>
          <input type="text" className="form-control" id="name"  aria-describedby="name"  required minLength={5} value={name} onChange={e=>setName(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label text-white">Image</label>
          <input type="file" className="form-control" id="image" aria-describedby="image" required onChange={onFileChange} />
        </div>
        <div className='mb-3 d-flex justify-content-end mt-3'>
        <button type="reset" className="btn btn-outline-warning me-3">Cancel</button>
        <button type="submit" className="btn btn-success">Add</button>
        </div>

      </form>

    </div>
  )
}

export default AddTag