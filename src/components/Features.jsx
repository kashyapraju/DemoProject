

import React from 'react';

const Features = () => {
  // Define inline style for centering text
  const headingStyle = {
    textAlign: 'center',
    marginTop: '100px'
  };

  // Define styles for the container and columns
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '20px'
  };

  const leftStyle = {
    flex: '1',
    textAlign: 'center'
  };

  const rightStyle = {
    flex: '1',
    textAlign: 'center'
  };

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto'
  };

  return (
    <div>
      <h3 style={headingStyle}>Feature</h3>
      <div style={containerStyle}>
        <div style={leftStyle}>
          <img 
            src="https://techmatrick.com/assets/images/team.png" 
            alt="Feature" 
            style={imageStyle}
          />
        </div>
        <div style={rightStyle}>
            <h5>Card Title</h5>
          <p>TSome quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>


      <div style={containerStyle}>
       
        <div style={rightStyle}>
            <h5>Card Title</h5>
          <p>TSome quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>

        <div style={leftStyle}>
          <img 
            src="https://cdn.prod.website-files.com/64acd4184c0179f443e2f002/6530acf04b79e8487a253bb5_WhyHypadrive_Feature-p-500.png" 
            alt="Feature" 
            style={imageStyle}
          />
        </div>
      </div>

      <div style={containerStyle}>
        <div style={leftStyle}>
          <img 
            src="https://cdn.prod.website-files.com/64acd4184c0179f443e2f002/65317fab75adc892327b4ffd_Savetime-p-500.png" 
            alt="Feature" 
            style={imageStyle}
          />
        </div>
        <div style={rightStyle}>
            <h5>Card Title</h5>
          <p>TSome quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>

    </div>
  );
}

export default Features;
