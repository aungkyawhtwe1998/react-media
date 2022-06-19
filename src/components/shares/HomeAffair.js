import React from 'react'

export default function HomeAffair({ post }) {
    return (
        <div className='col-md-4 mt-3'>
            <div className="card mb-3">
                <img src={`http://13.214.58.126:3001/uploads/${post.image}`} className="card-img-top" height="150px" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                
                    <p className="card-text">{post.content.substring(0,50)}</p> </div>
            </div>
        </div>
    )
}
