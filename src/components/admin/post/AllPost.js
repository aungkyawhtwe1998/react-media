import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import PostUi from './PostUi';

const AllPost = () => {

    const [page, setPage] = useState(1);
    const [posts, setPosts] = useState([]);
    const userData = useSelector(state => state.userData);

    const loadPosts = async () => {
        const response = await fetch(`http://13.214.58.126:3001/posts/paginate/${page}`);
        const resData = await response.json();
        setPosts(resData.result);
    }

    const apiPostDelete = async (id) => {
        const response = await fetch(`http://13.214.58.126:3001/posts/${id}`, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${userData.token}`
            }
        });
        const resData = await response.json();
        console.log(resData);
        loadPosts();
    }
    const increasePage =()=> setPage(prev => prev+1);

    const decreasePage = () =>{
        if(page>=2){
            setPage(prev => prev-1)
        }
    }
    useEffect(() => {loadPosts()}, [page]);


    return (
        <>
            <div>
                <div className='d-flex justify-content-between align-item-center p-1'>
                    <Link to="/admin/posts/add" className="btn btn-sm btn-primary btn mb-3">Add</Link>
                    <span>Pagination {page}</span>
                    <nav aria-label="Page navigation example">
                        <ul className="pagination pagination-sm">
                        <button className='page-link page-item' onClick={decreasePage}>Previous</button>

                            <button className='page-link page-item' onClick={increasePage}>Next</button>
                        </ul>
                    </nav>
                </div>
                <div className="row">
                    {posts.length > 0 && posts.map(post => <PostUi key={post._id} post={post} apiPostDelete={apiPostDelete} />)}
                    <nav aria-label="Page navigation example">
                        <ul className="pagination pagination-sm">
                            <button className='page-link page-item' onClick={decreasePage}>Previous</button>

                            <button className='page-link page-item' onClick={increasePage}>Next</button>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default AllPost