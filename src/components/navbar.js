import React from 'react'
import {NavLink} from "react-router-dom";

export const Navbar = () => (
  <nav className='navbar navbar-dark bg-primary navbar-expand'>
    <div className="navbar-brand">
      <img src='favicon.ico' width="30" alt="React" className='d-inline-block align-top mr-3' />
      <NavLink style={{display: 'inline', color: '#fff'}} exact to="/" className='nav-link'>Todo app. Local state version.</NavLink>
    </div>
    <ul className='navbar-nav ml-auto'>
      <li className='nav-item'>
        <strong><NavLink exact to="/" className='nav-link'>Home</NavLink></strong>
      </li>
      <li>
        <strong><NavLink to="/todo" className='nav-link'>Todos</NavLink></strong>
      </li>
    </ul>
  </nav>
)