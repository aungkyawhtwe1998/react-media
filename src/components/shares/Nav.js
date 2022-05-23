import React from 'react'
import logoImg from '../../statics/logo.png'
export default function Nav() {
    return (
        <div className='container-fluid bg-dark'>
            <nav className="container navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <img src={logoImg} widt="30px" height="24px"/>
                    <a className="navbar-brand" href="#">MM Media</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">ပြည်တွင်း</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">နိုင်ငံတကာ</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className='fa fa-user'/>
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Login</a></li>
                                    <li><a className="dropdown-item" href="#">Logout</a></li>
                                    <li><a className="dropdown-item" href="#">Register</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
