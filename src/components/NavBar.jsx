import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets'; // Adjust the path to your assets
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true); // Assume user is logged in for the profile section

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid d-flex align-items-center">
                {/* Logo */}
                <NavLink className="navbar-brand d-flex align-items-center" to="/">
                    <img src={assets.logo} alt="Logo" style={{ height: '40px' }} /> {/* Adjust logo height */}
                </NavLink>

                {/* Hamburger for mobile */}
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

                    {/* Admin Panel Button */}
                    <div className="d-flex align-items-center ms-3">
                        <button
                            className="btn btn-outline-primary"
                            onClick={() => navigate('/admin')}
                        >
                            Admin Panel
                        </button>
                    </div>

                    {/* Profile section */}
                    <div className="d-flex align-items-center ms-4 position-relative">
                        {
                            token ? (
                                <div className="d-flex align-items-center">
                                    <img
                                        src={assets.profile_pic} // Profile image path
                                        alt="Profile"
                                        className="rounded-circle"
                                        style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                                    />
                                    <img
                                        src={assets.dropdown_icon} // Dropdown icon path
                                        alt="Dropdown Icon"
                                        style={{ width: '15px', height: '15px', marginLeft: '10px' }}
                                    />

                                    {/* Dropdown Menu (Hidden by default) */}
                                    {showMenu && (
                                        <div
                                            className="position-absolute bg-white shadow p-3 rounded"
                                            style={{ top: '50px', right: '0', minWidth: '150px' }}
                                        >
                                            <p onClick={()=>navigate("myprofile")} className="mb-2">My Profile</p>
                                            <p onClick={"my-appointments"} className="mb-2">My Appointment</p>
                                            <p className="mb-0">Logout</p>
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
                            )
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;