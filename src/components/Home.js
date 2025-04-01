import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Air Max 270',
      image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=2000&auto=format&fit=crop',
      description: 'Experience the maximum comfort with Nike\'s iconic Air Max technology.'
    },
    {
      id: 2,
      name: 'Dri-FIT Tech',
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=2000&auto=format&fit=crop',
      description: 'Stay dry and comfortable with advanced moisture-wicking technology.'
    },
    {
      id: 3,
      name: 'Zoom Fly 5',
      image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=2000&auto=format&fit=crop',
      description: 'Engineered for speed and performance with responsive cushioning.'
    }
  ];

  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content">
          <h1>JUST DO IT</h1>
          <p>Innovative designs, superior performance, and iconic style</p>
          <Link to="/products" className="btn">Shop Now</Link>
        </div>
      </div>

      <section className="featured">
        <div className="container">
          <h2 className="section-title">Featured Products</h2>
          <p className="section-subtitle">
            Discover our latest innovations designed for peak performance
          </p>
          <div className="featured-grid">
            {featuredProducts.map(product => (
              <div key={product.id} className="featured-card">
                <div className="featured-img-container">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="featured-img"
                  />
                </div>
                <div className="featured-info">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="why-us">
        <div className="container">
          <h2 className="section-title">Why Choose Nike</h2>
          <div className="features-grid">
            <div className="feature-item">
              <i className="fas fa-bolt"></i>
              <h3>Performance</h3>
              <p>Engineered for athletes with cutting-edge technology for optimal performance.</p>
            </div>
            <div className="feature-item">
              <i className="fas fa-tshirt"></i>
              <h3>Innovation</h3>
              <p>Constantly pushing boundaries with revolutionary materials and designs.</p>
            </div>
            <div className="feature-item">
              <i className="fas fa-leaf"></i>
              <h3>Sustainability</h3>
              <p>Committed to reducing our environmental impact through sustainable practices.</p>
            </div>
            <div className="feature-item">
              <i className="fas fa-globe"></i>
              <h3>Global Community</h3>
              <p>Join millions worldwide united by passion for sport and active lifestyles.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>BECOME A NIKE MEMBER</h2>
          <p>Sign up for exclusive access to products, events, and personalized content</p>
          <Link to="/contact" className="btn">Join Now</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
