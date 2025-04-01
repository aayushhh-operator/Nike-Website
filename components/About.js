import React from 'react';

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <h1 className="section-title">About Nike</h1>
        <div className="about-content">
          <div className="about-text">
            <h2>Our Mission</h2>
            <p>
              At Nike, our mission is to bring inspiration and innovation to every athlete* in the world.
              *If you have a body, you are an athlete. This belief drives us to create products that empower 
              athletes at all levels to perform at their best.
            </p>
            <h2>Our Story</h2>
            <p>
              Founded in 1964 as Blue Ribbon Sports, Nike has grown into one of the world's leading sports brands.
              From our humble beginnings selling running shoes out of a car trunk, to revolutionizing athletic footwear
              with Air technology, we've always been committed to pushing boundaries and redefining what's possible.
            </p>
            <h2>Innovation & Sustainability</h2>
            <p>
              We're constantly innovating to create products that help athletes reach their potential while reducing
              our environmental impact. Through initiatives like Nike Grind and our Move to Zero journey, we're working
              toward a zero carbon, zero waste future where materials are continuously reused.
            </p>
          </div>
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=2000&auto=format&fit=crop"
              alt="Nike Headquarters"
            />
          </div>
        </div>
        <div className="about-stats">
          <div className="stat-item">
            <h3>170+</h3>
            <p>Countries</p>
          </div>
          <div className="stat-item">
            <h3>75K+</h3>
            <p>Employees Worldwide</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>Years of Innovation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
