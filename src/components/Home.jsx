

import './Home.css';

const Home = () => {

    const boxStyle = { marginTop: '100px' };
    const buttonStyle = { marginRight: '10px' };
    const paraColour = {color: 'blue'};

    return (

        <div className="container">
      <div className="row">
        <div className="col-md-6 left-box" style={boxStyle}>
          <h2 style={paraColour}>WE MAKE YOUR IDEA'S</h2>
          
          <h2>INTO REALITY</h2>
          <p>Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button className="btn btn-primary" style={buttonStyle}>Get Started</button>
          <button className="btn" style={{ marginRight: 0  }}>Contact Us</button>
        </div>
        <div className="col-md-6 right-box" style={boxStyle}>
          <img https
            src="https://www.fleetee.io/hs-fs/hubfs/working-1.png?width=600&height=483&name=working-1.png" 
            alt="Placeholder" 
            className="img-fluid" 
          />
        </div>
      </div>
    </div>
    );
}

export default Home;