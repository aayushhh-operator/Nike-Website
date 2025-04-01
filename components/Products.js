import React from 'react';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Nike Air Force 1',
      image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=2000&auto=format&fit=crop',
      description: 'The iconic basketball shoe that transcended the court to become a streetwear legend.',
      price: '$110',
      features: ['Premium leather upper', 'Air cushioning', 'Durable rubber outsole', 'Classic design']
    },
    {
      id: 2,
      name: 'Nike Air Max 90',
      image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=2000&auto=format&fit=crop',
      description: 'Featuring the visible Air unit that revolutionized the industry with superior cushioning.',
      price: '$130',
      features: ['Max Air cushioning', 'Mesh and synthetic upper', 'Waffle outsole', 'Padded collar']
    },
    {
      id: 3,
      name: 'Nike Dri-FIT Running Shirt',
      image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop',
      description: 'Stay cool and dry during your runs with advanced moisture-wicking technology.',
      price: '$35',
      features: ['Sweat-wicking fabric', 'Lightweight material', 'Ergonomic seams', 'Reflective details']
    },
    {
      id: 4,
      name: 'Nike Zoom Pegasus 39',
      image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=2000&auto=format&fit=crop',
      description: 'The workhorse running shoe that delivers responsive cushioning for everyday training.',
      price: '$120',
      features: ['Zoom Air units', 'Engineered mesh', 'Secure fit', 'Durable traction']
    },
    {
      id: 5,
      name: 'Nike Tech Fleece Hoodie',
      image: 'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?q=80&w=2000&auto=format&fit=crop',
      description: 'Lightweight warmth with a modern, streamlined design for everyday comfort.',
      price: '$130',
      features: ['Tech Fleece fabric', 'Raglan sleeves', 'Kangaroo pocket', 'Tapered fit']
    },
    {
      id: 6,
      name: 'Nike Phantom GT Elite',
      image: 'https://images.unsplash.com/photo-1593108408993-58ee9c7825c2?q=80&w=2000&auto=format&fit=crop',
      description: 'Precision-engineered football boot for exceptional ball control and striking power.',
      price: '$250',
      features: ['Flyknit construction', 'All Conditions Control', 'Dynamic Fit collar', 'Hyperquick system']
    }
  ];

  return (
    <div className="products">
      <div className="container">
        <h1 className="section-title" id='products'>Featured Products</h1>
        <p className="section-subtitle">
          Explore our collection of performance footwear, apparel, and equipment 
          designed to help you achieve your personal best.
        </p>
        <div className="product-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img 
                src={product.image} 
                alt={product.name} 
                className="product-img"
              />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="product-price">{product.price}</div>
                <div className="product-features">
                  <h4>Features</h4>
                  <ul>
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
