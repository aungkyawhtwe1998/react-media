import React from 'react';
import logoImg from '../../statics/logo.png';
export default function Footer() {
    return (
        <div className="container-fluid bg-dark">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-4">
                        <ul className="list-group">
                            <li className="list-group-item border-info bg-dark">
                                <i className='fa text-success pe-2 fa-user'></i>
                                <a href='#' >About Us</a>
                            </li>
                            <li className="list-group-item border-info bg-dark">
                                <i className='fa text-success pe-2 fa-envelope'></i>
                                <a href='#' >mmev@gmail.com</a>
                            </li>
                            <li className="list-group-item border-info bg-dark">
                                <i className='fa fa-brands text-success pe-2 fa-google'></i>
                                <a href='#' >mmev@gmail.com</a>
                            </li>
                            <li className="list-group-item border-info bg-dark">
                                <i className='fa fa-brands text-success pe-2 fa-facebook'></i>
                                <a href='#' >mmev@gmail.com</a>
                            </li>
                            <li className="list-group-item border-info bg-dark">
                                <i className='fa fa-brands text-success pe-2 fa-youtube'></i>
                                <a href='#' >mmev@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                    <div className='col-md-4 d-flex flex-column align-items-center text-center justify-content-center'>
                        <button className='btn btn-success btn-sm'>Download Android App</button>
                        <button className='btn btn-warning btn-sm my-3'>Download IOS App &nbsp; &nbsp; &nbsp;</button>
                        <p className='text-white'>Our Sponsers</p>
                        <img src={logoImg} width="50" />

                    </div>
                    <div className='col-md-4'>
                        <h3 className='text-center text-white'>Contact Us</h3>
                        <form>
                        <div className="form-floating mb-2 bg-dark me-1">
                            <input type="text" className="form-control form-control-sm bg-dark text-white" id="floatingName" placeholder="Name" />
                            <label htmlFor="floatingName" className='text-white'>Name</label>
                        </div>
                        <div className="form-floating mb-2 bg-dark">
                            <input type="email" className="form-control form-control-sm bg-dark text-white" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput" className='text-white'>Email address</label>
                            </div>
                            
                        <div className="form-floating mb-3 bg-dark">
                            <textarea className="form-control form-control-sm bg-dark" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
                            <label htmlFor="floatingTextarea2" className='text-white'>Comments</label>
                        </div>
                        <button type="submit" className="float-end btn btn-primary btn-sm">Submit</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>

    )
}
