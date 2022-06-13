import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import useFirebase from "./../../Hooks/useFirebase";

const Navbar = () => {
    const { user, handleLogout } = useFirebase()
    return (
        <div>
            <div>
                <div className="menubar-container row">
                    <div className="col-md-1 col-lg-1" >
                        <img className="nav-image" src="https://i.ibb.co/NYG2tPV/default.png" alt="" />
                    </div>

                    <div className="col-md-7 col-lg-7 col-sm-12">
                        <nav className="nav-bar">
                            <NavLink className="btn btn-outline-success" to="/home" >Home</NavLink>

                            <NavLink className="btn btn-outline-success" to="/about" >About Us</NavLink>

                            <NavLink className="btn btn-outline-success" to="/coming" >Coming Soon</NavLink>
                            <NavLink className="btn btn-outline-success" to="/contact" >Contact Us</NavLink>
                            <NavLink className="btn btn-outline-success" to="/allservices" >My all Services</NavLink>

                        </nav>
                    </div>

                    <div className="col-md-4 col-sm-12 col-lg-4">

                        <NavLink className="btn btn-outline-danger" to="dashboard">Dashboard</NavLink>
                        {user.email && <span style={{ color: 'black' }}>Hello {user.email}</span>}
                        {user.email ?
                            <button className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
                            :
                            <NavLink className="btn btn-outline-danger" to="/login" >Login</NavLink>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;