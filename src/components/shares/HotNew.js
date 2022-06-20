import React from 'react';

export default function HotNew({ post }) {
    return (
        <div className="col-md-6 col-lg-6 mt-3">
            <div className='card mb-2 border-0'>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-6'>
                            <img src={`http://13.214.58.126:3001/uploads/${post.image}`} className="card-img-top" height="100px" alt="p1" />
                        </div>
                        <div className='col-6'>
                            <p className="h5">{post.title}</p>
                            <p className="card-text">{post.content.substring(0,50)}</p>

                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}
