import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NavBar extends Component {

    render() { 
        return ( 
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/">Home</Link>
  <div className="" id="navbarScroll">
    <ul className="navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll" id="ulStyle">
      <li className="nav-item active">
        <Link className="nav-link" to="/catalog">Catalog <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/todo">Todo</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
  
    </ul>
  </div>
</nav>
         );
    }
}
 
export default NavBar;