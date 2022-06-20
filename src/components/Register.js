import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom';
import Loading from './shares/Loading';
import { postData } from '../utils/Api';
export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const navigate =  useNavigate();
    const apiRegister = async user => {
        const resData = await fetch("register",user,"");
        console.log(resData)
        if(resData.con){
            navigate('/login');
        }else{
            console.log(resData);
        }
        setIsLoading(false)

    }
    const loginUser = e => {
        e.preventDefault();
        setIsLoading(true);
        
        let user = {
            'name':name,
            'email':email,
            'phone':phone,
            'password':password
        }
        console.log(user)

        apiRegister(user)
        // setName("");
        // setEmail("");
        // setPhone("");
        // setPassword("");
    }
    return (
        <div className='container'>
            {isLoading && <Loading/>}
            <div className='row my-5'>
                <div className='col-md-6 offset-md-3 p-5 bg-dark'>
                    <h1 className='text-white text-center'>Register to be a member</h1>
                    <form onSubmit={loginUser}>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1"><i className='fa fa-user'></i></span>
                            <input type="text" 
                                className="form-control"
                                placeholder="Username" 
                                aria-label="Username"
                                aria-describedby="basic-addon1" 
                                value={name} 
                                onChange={e=>setName(e.target.value)} 
                                minLength={2} 
                                required={true}
                             />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1"><i className='fa fa-envelope'></i></span>
                            <input type="email" 
                                className="form-control"
                                placeholder="Email" 
                                aria-label="Email"
                                aria-describedby="basic-addon1" 
                                value={email} 
                                onChange={e=>setEmail(e.target.value)} 
                                required = {true}
                             />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1"><i className='fa fa-phone'></i></span>
                            <input type="tel" 
                            className="form-control" 
                            placeholder="Phone" 
                            aria-label="Phone" 
                            aria-describedby="basic-addon1" 
                            value={phone}
                            minLength={8}
                            maxLength={11}
                            onChange={e=>setPhone(e.target.value)}
                            required={true}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1"><i className='fa fa-lock'></i></span>
                            <input type="password"
                             className="form-control" 
                             placeholder="password" 
                             aria-label="password" 
                             aria-describedby="basic-addon1"
                             value={password}
                             minLength={6}
                             onChange={e=>setPassword(e.target.value)}
                             required={true}
                              />
                        </div>
                        <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label text-white">Remember me</label>
                </div>
                    
                        <div className='d-flex justify-content-between'>
                            <a href='#'>Already a member?</a>
                            <div>
                            <button type="submit" className="btn btn-outline-warning me-2 rounded-0">Cancel</button>
                            <button type="submit" className="btn btn-success rounded-0">Register</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
