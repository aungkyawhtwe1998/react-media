import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { deleteData, getData } from '../../../utils/Api';
import UiCat from './UiCat';

const AllCat = () => {
    const [cats, setCats] = useState([]);
    const userData = useSelector(state => state.userData);

    const loadCats = async () => {
        const resData = await getData("/cats")
        if(resData.con){
            setCats(resData.result)
        }else{
            console.log(resData)
        }
    }
    const apiCatDelete = async(id) => {
        const resData = await deleteData(`/cats/${id}`,userData.token);
        console.log(resData);
        loadCats();
    }
    useEffect(()=>{
        loadCats();
    },[]);
  return (
    <div>
        <span className='fs-3'>All Cats</span>
        <Link to='/admin/cats/add' className="btn btn-primary ms-3">Add</Link>
        <div className='row my-2'>
            {cats.length>0 && cats.map(cat=><UiCat cat={cat} apiCatDelete={apiCatDelete} key={cat._id}/>)}

        </div>
       
        
    </div>
  )
}

export default AllCat