import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getData, patchData } from '../../../utils/Api';
import Loading from '../../shares/Loading';

const EditTag = () => {
  const [name,setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const userData = useSelector(state => state.userData);
  const navigate = useNavigate();
  const {id} = useParams();
 
  console.log(userData);

  const apiCategoryUpdate = async()=> {
  
    const resData = await patchData(`/tags/${id}`,{name:name},userData.token);
    console.log(resData);
    if(resData.con){
      navigate('/admin/tags/all')
    }else{
      setIsLoading(false)
    }
    setIsLoading(false)

  }

  const loadCategory = async() => {
    const resData = await getData(`/tags/${id}`);
    setName(resData.result.name);
    setIsLoading(false);
  }

  useEffect(() => {
    loadCategory();
  }, [])
  
  const editTag = e => {
    e.preventDefault();
    setIsLoading(true);
    apiCategoryUpdate();
    console.log(name);
  }
  return (
    <div className='col-md-8 offset-md-2 bg-dark p-5'>
      {isLoading && <Loading />}
      <h1 className='text-white text-center'>Edit Tags</h1>
      <form onSubmit={editTag}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label text-white" >Name</label>
          <input type="text" className="form-control" id="name"  aria-describedby="name"  required minLength={5} value={name} onChange={e=>setName(e.target.value)}/>
        </div>

        <div className='mb-3 d-flex justify-content-end mt-3'>
        <button type="reset" className="btn btn-outline-warning me-3">Cancel</button>
        <button type="submit" className="btn btn-success">Update</button>
        </div>

      </form>

    </div>
  )
}

export default EditTag