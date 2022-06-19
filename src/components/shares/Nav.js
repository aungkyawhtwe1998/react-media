import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { removeUser , setPage} from '../../redux/actions';
import logoImg from '../../statics/logo.png';
export default function Nav() {
    const userData = useSelector(state => state.userData);
    const pageSetter = useSelector(state =>state.pageSetter);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [cats, setCats] = useState([]);

    const loadCats = async () => {
        const response = await fetch("http://13.214.58.126:3001/cats");
        const resData = await response.json();
        console.log(resData);
        if(resData.con){
            setCats(resData.result)
        }else{
            console.log(resData)
        }
    }

    const logout = () => {
        dispatch(removeUser(null));
        navigate('/login')
    }
    useEffect(()=>{loadCats();},[]);
    const changePage = (type, id) =>{
        dispatch(setPage({type ,id}));
        navigate('/catpage')
    }
    return (
        <div className='container-fluid bg-dark'>
            <nav className="container navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <img src={logoImg} widt="35px" height="24px" />
                    <Link to='/' className='navbar-brand'>BM Media</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            {cats.length>0 && cats.map( cat => <li className="nav-item" key={cat._id}>
                                <a className='nav-link text-white' style={{cursor:'pointer'}} onClick={()=>changePage("bycat", cat._id)}>{cat.name}</a>
                                {/* <Link className='nav-link' id={cat._id} to={`/catpage/bycat/${cat._id}`} >{cat.name}</Link> */}
                            </li>)}
                           
                        
                            {
                                userData && <li className='nav-item'>
                                    <Link to='/admin' className='nav-link'>Admin Panel</Link>
                                </li>
                            }
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className='fa fa-user' />
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {
                                        !userData && <Link to="/login" className="dropdown-item">Login</Link>
                                    }
                                    {
                                        !userData &&
                                        <Link to="/register" className="dropdown-item">Register</Link>
                                    }
                                    {
                                        userData &&
                                        <Link to="/login" className="dropdown-item" onClick={logout} >Logout</Link>
                                    }
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
