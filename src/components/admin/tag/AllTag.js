import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { deleteData, getData } from '../../../utils/Api';
import TagUi from '../tag/TagUi';
const AllTag = () => {
    const [tags, setTags] = useState([]);
    const userData = useSelector(state=>state.userData);
    const loadTags = async()=>{
        const resData = await getData('/tags')
        setTags(resData.result);
    }
    const apiTagDelete = async(id) => {
        const resData = await deleteData(`/tags/${id}`,userData.token)
        console.log(resData);
        loadTags();
    }
    useEffect(()=>{
        loadTags();
    },[])
  return (
    <div>
        <Link to='/admin/tags/add' className='btn btn-primary btn-sm'>Add</Link>
        <div className='row'>
            {
                tags.map(tag=><TagUi key={tag._id} tag={tag} apiTagDelete={apiTagDelete}/>)
            }
        </div>
    </div>
  )
}

export default AllTag