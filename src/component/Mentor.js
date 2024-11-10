import React from "react";
import Card from "./Card";
import img1 from "../assets/person1.png";
import img2 from "../assets/person2.png";
import img3 from "../assets/person3.png";
import img4 from "../assets/person4.png";
import img5 from "../assets/person5.png";
import img6 from "../assets/person6.png";
import "./Mentor.css";

const mentorData = [
  { title: "Product Mentors", image: img1, description: "Hire a product mentor to gain expert guidance and accelerate your product’s growth and success.", isImageLeft: true },
  { title: "Startup Marketing Mentors", image: img2, description: "Ideal for aspiring marketers looking to make a big impact.", isImageLeft: false },
  { title: "Career Design Mentors", image: img3, description: "Shape and align your career path with industry insights.", isImageLeft: true },
  { title: "Professional Growth Mentors", image: img4, description: "Boost your soft skills and work-life balance.", isImageLeft: false },
  { title: "Digital Marketing Mentors", image: img5, description: "Perfect your digital marketing expertise with guidance.", isImageLeft: true },
  { title: "HR Mentors", image: img6, description: "Understand the complexities of human resources with expert advice.", isImageLeft: false },
];

function Mentor() {
  return (
    <div className="container">
      <h1 className="title">
        Explore Our Career Development Mentors
      </h1>
      <p className="description">
        Here are the diverse categories you can find at Unispade to find mentors who specialize in areas essential to your growth:
      </p>

      <div className="mentor-list">
        {mentorData.map((mentor, index) => (
          <Card
            key={index}
            title={mentor.title}
            description={mentor.description}
            image={mentor.image}
            isImageLeft={mentor.isImageLeft}
          />
        ))}
      </div>

      <div className="footer">
        <p className="footer-text">Find the best mentor for startup marketer roles or those tailored to your specific career design needs.</p>
        <button className="footer-button">View Mentors</button>
      </div>
    </div>
  );
}

export default Mentor;
