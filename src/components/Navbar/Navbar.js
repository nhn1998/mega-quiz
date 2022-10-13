import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        <div className='mb-5'>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand text-danger fw-bold" to='/'>Mega Quiz</Link>
                    <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <Link className="nav-link active text-warning" aria-current="page" to="/">Home</Link>
                            <Link className="nav-link active text-warning" to="/topics">Topics</Link>
                            <Link className="nav-link active text-warning" to="/statistics">Statistics</Link>
                            <Link className="nav-link active text-warning" to='/blogs'>Blogs</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );

};

export default Navbar;