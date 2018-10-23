import React from 'react'
import { Link, NavLink } from 'react-router-dom'
 
const Navbar = () => {
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo">Dj Refuge Wise</a>
                <ul className="right">
                    <li><Link to="home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contant</Link></li>
                </ul>
            </div>
        </nav>
    )

}

export default Navbar