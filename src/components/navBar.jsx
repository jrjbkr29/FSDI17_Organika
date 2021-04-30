import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NavBar extends Component {

    render() { 
        return ( 
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/#">Home</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarScroll">
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
    <form className="d-flex">
      <input className="form-control mr-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
         );
    }
}
 
export default NavBar;