import line from '../assets/Line.png';
import "./WorkFlow.css"
function WorkFlow() {
  return (
    <div className="workflow-container">
      <div className="workflow-header">
        <h1 className="workflow-title">How It Works</h1>
        <p className="workflow-description">
          Taking charge of your career growth is now simplified. Follow these
          easy steps:
        </p>
      </div>

      <div className="step-container">
        <div className="step-container">
          <div className="step-number">1</div>
          <h1 className="step-title">Search for Mentors</h1>
          <p className="step-text">
            Use our intuitive filters to find the best product management
            mentors, career design mentors, and more, all matched to your unique
            needs.
          </p>
          <img src={line} className="step-line" alt="line separator" />
        </div>

        <div className="step-container">
          <div className="step-number">2</div>
          <h1 className="step-title">Connect & Discuss</h1>
          <p className="step-text">
            Reach out to mentors, discuss your goals, and determine how their
            expertise aligns with your aspirations.
          </p>
          <img src={line} className="step-line" alt="line separator" />
        </div>

        <div className="step-container">
          <div className="step-number">3</div>
          <h1 className="step-title">Start Your Journey</h1>
          <p className="step-text">
            Begin a structured, guided mentorship journey that keeps you motivated and on track toward your career milestones. Additionally, with our mentors' recommendations, boost your profile visibility and stand out when pursuing new job opportunities.
          </p>
        </div>
      </div>

      <div className="explore-button-container">
        <button className="explore-button">Explore Mentors</button>
      </div>
    </div>
  );
}

export default WorkFlow;
