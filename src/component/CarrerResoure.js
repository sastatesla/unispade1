import React from "react";
import "./CarrerResoure.css";

function CarrerResoure() {
  return (
    <div className="career-resource-container">
      <div className="career-resource-title">
        Career Resources and Insights
      </div>
      <p className="career-resource-description">
        Expand your knowledge with our curated resources, packed with actionable insights to help you advance in your field:
      </p>

      <div className="career-resource-button-group">
        <button className="career-resource-button">
          Top Tips for Career Development
        </button>
        <button className="career-resource-button career-resource-button-large">
          How to Succeed as a Startup Marketer
        </button>
      </div>

      <p className="career-resource-footer-text">
        Stay updated with trends in career development, product management, and professional growth
      </p>

      <button className="career-resource-read-more">
        Read more...
      </button>
    </div>
  );
}

export default CarrerResoure;
