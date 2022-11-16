import { Link } from 'react-router-dom';
import React from 'react';

export const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
          <ul className="mb-2 mb-lg-0 " style={{width: '18vw', display: 'flex', flexFlow:'row', justifyContent: 'space-around', listStyle: 'none', margin: '0 auto'}}>
            <li className="nav-item">
              <Link className="nav-link" to='/'>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/teams'>Teams</Link>
            </li>
          </ul>
        </nav>  
    )
}

export default Nav;