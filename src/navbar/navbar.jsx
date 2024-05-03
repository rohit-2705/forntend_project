import React from 'react';
import { useState } from 'react';
import "./navbar.css"; 
import { Link, NavLink } from 'react-router-dom';


export default function Navbar() {
    const [ isAuthenticated, setIsAuthenticated] = useState([]);
    return (
    <nav>
        <Link className="title">
        Kitchen Recipe Management
        </Link>
       
        <ul className="navigate">
            <li>
            <NavLink to="/about">About</NavLink>
            </li>
            <li>
            <NavLink to="/createrecipe">Createrecipe</NavLink>
            </li>
            <li>
            <NavLink to="/">Login</NavLink>
            </li>
            <li>
            <NavLink to="/signup">Signup</NavLink>
            </li>
        </ul>
    </nav>
  )
};
