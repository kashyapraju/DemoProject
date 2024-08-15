
import React from 'react'
import './Navbar.css';  


const Navbar = () => {

 const blueText = { color: 'blue' };
  return (
   <div className = "nav-cls">
   
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/" style={blueText}>Jillion Technologies</a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-toggle="collapse" 
          data-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
          style={blueText}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/" style={blueText}>Home </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about" style={blueText}>Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/services" style={blueText}>Product</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact" style={blueText}>Testimonial</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/contact" style={blueText}>Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
   
   </div>
  );
}

export default Navbar;  