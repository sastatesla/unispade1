import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './ClientSay.css';

function ClientSay() {
  const testimonials = [
    {
      quote:"Working with my mentor:Vikash Gaurav has been transformative. Their guidance helped me master key industry skills and navigate complex challenges with confidence. They broke down tough concepts into manageable steps, turning confusion into clarity. I'm grateful for their unwavering support and the invaluable knowledge they've shared. Truly an inspiring mentor!",
        name: "Pavitra Kumar Gupta",
        role: "Mentee",
      },
  ];

  const items = testimonials.map((testimonial, index) => (
    <div className="home-client-say-slide" key={index}>
      <p className="home-client-say-quote">“{testimonial.quote}”</p>
      <div className="testimonial-card-name">{testimonial.name}</div>
      <div className="testimonial-card-role">{testimonial.role}</div>
    </div>
  ));

  return (
    <div className="home client-say-container">
      <div className="home-client-say-title">What Our Clients Say</div>
      <p className="home-client-say-intro">
        Our clients have seen remarkable progress by partnering with mentors who understand their field:
      </p>
      <AliceCarousel
        items={items}
        autoPlay
        autoPlayInterval={3000}
        infinite
        animationDuration={600}
        disableButtonsControls
      />
    </div>
  );
}

export default ClientSay;
