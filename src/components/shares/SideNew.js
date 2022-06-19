import React from 'react';
import { Link } from 'react-router-dom';

export default function SideNew({ post, wordcount }) {
    return (
        <div className="col-12 mt-3">
            <div className='card mb-2 border-0 p-0'>
                <div className='card-body p-0'>
                    <div className='row'>
                        <div className='col-6'>
                        <img src={`http://13.214.58.126:3001/uploads/${post.image}`} className="card-img-top" alt="p1" />
                        </div>
                        <div className='col-6'>
                        <p className="h4 titleFontSize">{post.title}</p>
                           <Link to={`/postdetail/${post._id}`}>
                           <p className="card-text paraFontSize">{post.content.substring(0,wordcount)}</p>
                           </Link>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}
