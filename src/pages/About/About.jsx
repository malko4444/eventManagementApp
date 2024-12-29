import React from 'react';
import './About.css';
import Footer from '../../components/Footer';

const About = () => {
  return (
    <>
    
    <div className="about-page">
      <div className="about-container">
        <div className="card">
          <img src="zubair.jpeg" alt="Zubair" className="card-img" />
          <div className="card-content">
            <h2>M Zubair Shehzad</h2>
            <p><h2>MERN stack Developer From SMIT</h2></p>
          </div>
        </div>

        
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default About;
