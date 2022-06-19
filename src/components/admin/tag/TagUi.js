import React from 'react'
import { Link } from 'react-router-dom'

const TagUi = ({tag, apiTagDelete}) => {
    
  return (
    <div className='col-md-4'>
        <div className='card p-0 mb-2'>
        <div className='card-body p-1'>
            <div className='row'>
                <div className='col-md-6'>
                <img src={`http://13.214.58.126:3001/uploads/${tag.image}`} width="100%" height="80px"/> 
                </div>
                <div className='col-md-6'>
                <h5>{tag.name}</h5>
                <Link to={`/admin/tags/edit/${tag._id}`} className='btn btn-warning btn-sm'>
                    <i className='fa fa-edit'></i>
                </Link>
                <button className='btn btn-danger btn-sm ms-2' onClick={()=>apiTagDelete(tag._id)}>
                    <i className='fa fa-trash'></i>
                </button>

                </div>
            </div>

        </div>
    </div>
    </div>
  )
}

export default TagUi