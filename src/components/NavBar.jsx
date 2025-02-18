import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true); 
    const dropdownRef = useRef(null); 


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowMenu(false); 
            }
        };
        
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid d-flex align-items-center">
                <NavLink className="navbar-brand d-flex align-items-center" to="/">
                    <img src={assets.logo} alt="Logo" style={{ height: '40px' }} /> {/* Adjust logo height */}
                </NavLink>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Links */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/">
                                HOME
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/doctors">
                                ALL DOCTORS
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">
                                ABOUT
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">
                                CONTACT
                            </NavLink>
                        </li>
                    </ul>

                    <div className="d-flex align-items-center ms-3">
                        <button
                            className="btn btn-outline-primary"
                            onClick={() => navigate('/admin')}
                        >
                            Admin Panel
                        </button>
                    </div>

                    <div className="d-flex align-items-center ms-4 position-relative" ref={dropdownRef}>
                        {token ? (
                            <div
                                className="d-flex align-items-center"
                                onClick={() => setShowMenu(!showMenu)} 
                            >
                                <img
                                    src={assets.profile_pic} 
                                    alt="Profile"
                                    className="rounded-circle"
                                    style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                                />
                                <img
                                    src={assets.dropdown_icon} 
                                    alt="Dropdown Icon"
                                    style={{ width: '15px', height: '15px', marginLeft: '10px' }}
                                />

                                {showMenu && (
                                    <div
                                        className="position-absolute bg-white shadow p-3 rounded"
                                        style={{ top: '50px', right: '0', minWidth: '150px' }}
                                    >
                                        <p
                                            onClick={() => navigate('/myprofile')}
                                            className="mb-2"
                                            style={{ cursor: 'pointer' }}
                                        >
                                            MyProfile
                                        </p>
                                        <p
                                            onClick={() => navigate('/my-appointments')}
                                            className="mb-2"
                                            style={{ cursor: 'pointer' }}
                                        >
                                            MyAppointment
                                        </p>
                                        <p
                                            onClick={() => {
                                                setToken(false); 
                                                navigate('/login');
                                            }}
                                            className="mb-0"
                                            style={{ cursor: 'pointer' }}
                                        >
                                            Logout
                                        </p>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <button
                                className="btn btn-primary"
                                onClick={() => navigate('/login')}
                            >
                                Create Account
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
