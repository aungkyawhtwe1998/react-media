import React from 'react'
import { Link } from 'react-router-dom'

const PostUi = ({post,apiPostDelete}) => {
  return (
    <div className='col-md-4'>
    <div className="card mb-1">
        <img src={`http://13.214.58.126:3001/uploads/${post.image}`} height="150px" className="card-img-top" alt={post.image}/>
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.content.substring(0,50)} </p>
                <div>
                  <Link to={`/admin/posts/edit/${post._id}`} className='btn btn-warning btn-sm'><i className='fa fa-edit'></i></Link>
                  <button className='btn btn-danger ms-1 btn-sm' onClick={()=>apiPostDelete(post._id)}><i className='fa fa-trash'></i></button>
                </div>
            </div>
    </div>
</div>
  )
}

export default PostUi