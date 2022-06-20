import React from 'react'
import { Link } from 'react-router-dom'
import { getImage } from '../../../utils/Api'
const UiCat = ({cat,apiCatDelete}) => {
  return (
    <div className='col-md-4'>
        <div className='card p-0 mb-'>
        <div className='card-body p-1'>
            <div className='row'>
                <div className='col-md-6'>
                <img src={getImage(cat.image)} width="100%" height="80px"/> 
                </div>
                <div className='col-md-6'>
                <h5>{cat.name}</h5>
                
                <Link to={`/admin/cats/edit/${cat._id}`} className='btn btn-warning btn-sm'>
                    <i className='fa fa-edit'></i>
                </Link>

                <button className='btn btn-danger btn-sm ms-2' onClick={()=>apiCatDelete(cat._id)}>
                    <i className='fa fa-trash'></i>
                </button>

                </div>
            </div>

        </div>
    </div>
    </div>
  )
}

export default UiCat