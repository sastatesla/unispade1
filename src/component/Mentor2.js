import React from "react";
import sec3 from "../assets/section3.png";
import './Mentor2.css';

function Mentor2() {
  return (
    <div className="mentor-container">
      <div className="mentor-title">
        Meet Our Best <br />
        Career Development Mentors
      </div>

      <div className="mentor-content">
        <div className="mentor-text-section">
          <p>
            Our top product mentors and others bring a wealth of expertise across various industries. Each mentor has been handpicked based on their credentials, experience, and ratings. Connect with them through one-on-one sessions to receive personalised advice on product design, product management, and more.
          </p>
          <p className="mentor-description">
            Whether you’re looking to hire product mentors in tech, finance, or marketing, Unispade ensures you find the perfect fit.
          </p>
        </div>

        <div className="mentor-image-container">
          <img src={sec3} className="Mentor-image" alt="Mentor Section" />
        </div>
      </div>
    </div>
  );
}

export default Mentor2;
