import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loading from './shares/Loading';
import { addUser,removeUser } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

export default function Login() {
    const [isCheck, setIsCheck] = useState(false);
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const userData = useSelector(state=> state.userData);
    const localDB = "bmmedia";

    console.log('before',userData);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const apiLogin = async user => {
        const response = await fetch("http://13.214.58.126:3001/users", {
            method:'POST',
            body:JSON.stringify(user),
            headers:{"content-type":"application/json"}
        });
        const resData = await response.json();
         console.log(resData);
        if(resData.con){
            setIsLoading(false);
            if(isCheck){
                localStorage.setItem(localDB,JSON.stringify({phone, password}));
            }
            dispatch(addUser(resData.result));
            console.log('after',userData);
            navigate('/admin');
        }else{
            setIsLoading(false);
            console.log(resData)
        }
    }
    useEffect(()=>{
        let localData = JSON.parse(localStorage.getItem(localDB));
        console.log(localData);
        if(localData){
            setPhone(localData.phone);
            setPassword(localData.password);
            setIsCheck(true)
        }
    },[])
    //throw new Error ("Error is error");
    const loginUser =  e => {
        e.preventDefault();
        console.log("is check", isCheck)
        setIsLoading(true);
        let user = {phone, password};
        console.log(user);
        apiLogin(user);
    }

    return (
        <div className='container'>
            {isLoading && <Loading/>}
            <div className='row my-5'>
                <div className='col-md-6 offset-md-3 p-5 bg-dark'>
                    <h1 className='text-white text-center'>Login To Post</h1>
                    <form onSubmit={loginUser}>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label text-white">Phone</label>
                            <input type="tel" className="form-control bg-dark text-white rounded-0" id="phone" aria-describedby="phone" value={phone} onChange={e=>setPhone(e.target.value)} minLength={8} maxLength={11}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label text-white">Password</label>
                            <input type="password" className="form-control bg-dark text-white rounded-0" id="exampleInputPassword1" value={password} onChange={e=>setPassword(e.target.value)} minLength={6}/>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" checked={isCheck} onChange={e=>setIsCheck(e.target.checked)} />
                            <label className="form-check-label text-white" htmlFor="exampleCheck1">Remember me</label>
                        </div>
                        <div className='d-flex justify-content-end'>
                            <a href='#'>Already a member?</a>
                            <div>
                                <button type="submit" className="btn btn-outline-warning me-2 rounded-0">Cancel</button>
                                <button type="submit" className="btn btn-success rounded-0">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
