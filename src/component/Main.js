import Mainpic from "../assets/Main.png";
import imgarrow from "../assets/downArrow.png";
import "./Main.css";

function Main() {
  return (
    <div className="main-container">
      <div className="content-section">
        {/* text section */}
        <div className="text-section">
          <h1 className="title-text">
            Find the Right<br /> Career Mentor to <br /> Fast-Track Your Success
          </h1>
          <p className="description-text">
            Welcome to the community-driven platform that connects you with top-notch mentors to guide and accelerate your professional journey. Whether you're aiming to design your career path or grow as a startup marketer, mentors at Unispade are here to support you.
          </p>
        </div>

        {/* photo section */}
        <div className="image-section">
          <img src={Mainpic} className="mentor-image" alt="Main mentor image" />
        </div>
      </div>

      <div className="arrow-section">
        <img src={imgarrow} className="down-arrow" alt="Down arrow" />
      </div>
    </div>
  );
}

export default Main;
