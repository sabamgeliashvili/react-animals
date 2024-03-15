import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import lion from './images/lion.jpg';
import tiger from './images/tiger.webp';
import cheetah from './images/cheetah.jpg';
import wolf from './images/wolf.jpeg';
import predators1 from './images/predators-1.jpg'
import predators2 from './images/predators2.webp'
import predators3 from './images/predators3.jpg'
import predators4 from './images/predators4.webp'
import predators5 from './images/predators5.webp'
import predators6 from './images/predators6.webp'
import pawgif from './images/pawgif.gif'

import { CSSTransition, TransitionGroup } from 'react-transition-group';

const animalsData = [
  { image: lion, alt: 'Lion', description: 'The lion is a large predatory cat known for its majestic appearance and powerful roar.' },
  { image: tiger, alt: 'Tiger', description: 'The tiger is the largest cat species, recognized for its distinctive orange coat with black stripes.' },
  { image: cheetah, alt: 'Cheetah', description: 'The cheetah is the fastest land animal, capable of reaching speeds up to 70 mph (113 km/h).' },
  { image: wolf, alt: 'Wolf', description: 'The wolf is a highly social animal known for its intelligence and strong sense of loyalty to its pack.' }
];

const Home = () => {


  let [currentImage, setCurrentImage] = useState(predators1);
  
  let sliderImages = [
    predators1,
    predators2,
    predators3,
    predators4,
    predators5,
    predators6,
  ];

  function prev() {
    let currentIndex = sliderImages.indexOf(currentImage);
    let prevIndex = (currentIndex - 1 + sliderImages.length) % sliderImages.length;
    setCurrentImage(sliderImages[prevIndex]);
  }

  function next() {
    let currentIndex = sliderImages.indexOf(currentImage);
    let nextIndex = (currentIndex + 1) % sliderImages.length;
    setCurrentImage(sliderImages[nextIndex]);
  }

return (
  <div className="page">
    <img className='gif' src={pawgif} />
    <h1>Welcome to our website!</h1>
    <TransitionGroup className="image-container">
      {animalsData.map((animal, index) => (
        <CSSTransition key={index} timeout={500} classNames="item">
          <div className="animal-container">
            <img src={animal.image} alt={animal.alt} />
            <p className="description">{animal.description}</p>
          </div>
        </CSSTransition>
      ))}
    </TransitionGroup>
    <div id='slider-box'>
      <div id='slider'>
        <button onClick={prev} id='prevBtn'>{'<'}</button>

        <img alt='predators' id='slider-image' src={currentImage} />

        <button onClick={next} id='nextBtn'>{'>'}</button>
      </div>
    </div>
  </div>
)};

const About = () => (
  <div className="page">
    <h1>About Us</h1>
  </div>
);

const Services = () => (
  <div className="page">
    <h1>Our Services</h1>
  </div>
);

const Contact = () => (
  <div className="page">
    <h1>Contact Us</h1>
  </div>
);

const App = () => (
  <Router>
    <div>
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  </Router>
);

export default App;
