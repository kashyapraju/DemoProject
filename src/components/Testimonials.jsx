// import React from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from "./ExampleCarouselImage "; // Ensure the path is correct

// function Testimonials() {

//   const carouselStyle = {
//     width: '60%',      // Set the desired width of the carousel
//     height: '300px',   // Set the desired height of the carousel
//     margin: '0 auto', 
//     backgroundColor: 'white',
//      marginTop: '100px'
//      // Center the carousel horizontally
//   };

 
//   return (
//     <div style={carouselStyle}>
      
//     <Carousel >
//       <Carousel.Item>
//         <ExampleCarouselImage text="Testimonials" />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <ExampleCarouselImage text="Testimonials" />
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <ExampleCarouselImage text="Testimonials" />
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//     </div>
    
//   );
// }

// export default Testimonials;

import React from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import './Tesimonials.css';

function Testimonials() {
  return (
    <div className="product">
      <div className="product-top">
        <h1>Products</h1>

        <div className="product-card">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="product-bottom">
        <h1>TESTIMONIALS</h1>

        <div className="product-carousel">
          <Carousel>
            <Carousel.Item>
              <img
                className="img-car"
                src={process.env.PUBLIC_URL + "/6o.jpeg"}
                alt="carousel"
              />
              {/* <ExampleCarouselImage text="First slide" /> */}
              <Carousel.Caption>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="img-car"
                src={process.env.PUBLIC_URL + "/6o.jpeg"}
                alt="carousel"
              />
              {/* <ExampleCarouselImage text="Second slide" /> */}
              <Carousel.Caption>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="img-car"
                src={process.env.PUBLIC_URL + "/6o.jpeg"}
                alt="carousel"
              />
              {/* <ExampleCarouselImage text="Third slide" /> */}
              <Carousel.Caption>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;