
import React from 'react';

const Contact = () => {
  // Inline styles for centering the heading and styling the container
  const headingStyle = {
    textAlign: 'center',
    marginTop: '20px'
  };

  const outerpad= {
    marginTop: '100px'

  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '30px',
    padding: '20px'
  };

  const leftStyle = {
    flex: '1',
    textAlign: 'center'
  };

  const rightStyle = {
    flex: '1',
    textAlign: 'left',
    paddingLeft: '20px'
  };

  const inputStyle = {
    width: '80%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc'
  };

  const buttonStyle = {
    width: '10%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  };

  return (
    <div style = {outerpad}>
      <h3 style={headingStyle}>Contact Us</h3>
      <div style={containerStyle}>
        <div style={leftStyle}>
          <img 
            src="https://thesidekick.app/static/media/storytime.260166361b6b40a3c99b.jpg" // Replace with your image URL
            alt="Contact Us"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
        <div style={rightStyle}>
          <form>
            <div>
              <input 
                type="text" 
                placeholder="Your Name" 
                style={inputStyle} 
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Your Email" 
                style={inputStyle} 
              />
            </div>
            <div>
              <textarea 
                placeholder="Your Message" 
                rows="4" 
                style={inputStyle} 
              />
            </div>
            <div>
              <button 
                type="submit" 
                style={buttonStyle}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
