

import './App.css';



import Features from './components/Features';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Card from "./components/Cards";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <>
     <Navbar/>
     <Home/>
     <Features/>
    
     <Testimonials/>
     <Contact/>
     <Footer/>
    </>
  );
}

export default App;
