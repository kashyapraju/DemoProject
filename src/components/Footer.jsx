
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {

    const footerStyle = {
        backgroundColor: '#007bff', // Bootstrap's primary blue color
        color: 'white',             // White text color for contrast
        paddingTop: '20px',
        paddingBottom: '20px'
      };


  return (
    <footer className="bg-light text-dark py-5" style={footerStyle}>
      <div className="container">
        <div className="row">
          {/* First Column - Contact Us */}
          <div className="col-md-3">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Email: info@example.com</li>
              <li>Phone: +123456789</li>
              <li>Address: 123 Main St, City, Country</li>
            </ul>
          </div>

          {/* Second Column - Companies */}
          <div className="col-md-3">
            <h5>Companies</h5>
            <ul className="list-unstyled">
              <li>Portfolio</li>
              <li>Services</li>
              <li>About Us</li>
            </ul>
          </div>

          {/* Third Column - Services */}
          <div className="col-md-3">
            <h5>Services</h5>
            <ul className="list-unstyled">
              <li>Website Development</li>
              <li>Mobile Development</li>
            </ul>
          </div>

          {/* Fourth Column - Support */}
          <div className="col-md-3">
            <h5>Support</h5>
            <ul className="list-unstyled">
              <li>Contact</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
