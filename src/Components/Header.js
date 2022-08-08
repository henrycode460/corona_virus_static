import React from 'react';
import {  Link } from 'react-router-dom';


const Header = () => {

    return (

      <nav className="navigation">
        <Link to="/" className="logoStyle">Bookstore CMS</Link>

        <ul className="nav-header">
          <li className="nav-link">
            <Link className="nav-link active" to="/CoronaVirus">Home</Link>
          </li>
          <li className="nav-link">
            <Link className="nav-link" to="/CoronaVirusDetails">CovidDetails</Link>
          </li>

          

        </ul>

      </nav>
    );
  }


export default Header;