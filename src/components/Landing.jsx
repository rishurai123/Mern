import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; 

const Landing = () => {
  const featuredCategories = [
    { name: "Marvel Heroes", image: "/images/marvel.jpg", link: "/category/marvel" },
    { name: "DC Universe", image: "/images/dc.jpg", link: "/category/dc" },
    { name: "Custom Heroes", image: "/images/custom.jpg", link: "/category/custom" },
    { name: "Kids Collection", image: "/images/kids.jpg", link: "/category/kids" },
  ];

  const bestSellers = [
    { name: "Iron Man Suit", price: "$89.99", image: "/images/ironman.jpg", link: "/product/ironman" },
    { name: "Spider-Man Costume", price: "$79.99", image: "/images/spiderman.jpg", link: "/product/spiderman" },
    { name: "Wonder Woman Outfit", price: "$84.99", image: "/images/wonderwoman.jpg", link: "/product/wonderwoman" },
    { name: "Batman Armor", price: "$99.99", image: "/images/batman.jpg", link: "/product/batman" },
  ];

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-title"
          >
            BECOME YOUR OWN HERO
          </motion.h1>
          <p className="hero-subtitle">Premium quality superhero costumes for all ages</p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cta-button"
          >
            SHOP NOW
          </motion.button>
        </div>
      </section>

      {/* Limited Time Offer */}
      <section className="special-offer">
        <div className="offer-banner">
          <h2>SUPER SALE: 25% OFF ALL AVENGERS COSTUMES</h2>
          <p>Use code: ASSEMBLE25 • Limited time offer</p>
          <button className="offer-button">CLAIM OFFER</button>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="categories-section">
        <h2 className="section-title">SHOP BY UNIVERSE</h2>
        <div className="categories-grid">
          {featuredCategories.map((category, index) => (
            <Link to={category.link} key={index} className="category-card">
              <div className="category-image">
                <img src={category.image} alt={category.name} />
              </div>
              <h3>{category.name}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <section className="bestsellers-section">
        <h2 className="section-title">FAN FAVORITES</h2>
        <div className="products-carousel">
          {bestSellers.map((product, index) => (
            <Link to={product.link} key={index} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <h3>{product.name}</h3>
              <p className="price">{product.price}</p>
              <button className="add-to-cart">ADD TO CART</button>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <h2 className="section-title">HERO TRANSFORMATIONS</h2>
        <div className="testimonials-container">
          {/* Customer testimonials with before/after images */}
          <div className="testimonial-card">
            <div className="testimonial-image">
              <img src="/images/testimonial1.jpg" alt="Customer transformation" />
            </div>
            <p>"The quality is amazing! I won first prize at Comic-Con!"</p>
            <h4>- Peter P.</h4>
          </div>
          {/* Add more testimonials */}
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section">
        <h2>JOIN THE LEAGUE OF HEROES</h2>
        <p>Subscribe for exclusive deals and superhero content</p>
        <div className="newsletter-form">
          <input type="email" placeholder="Your email address" />
          <button>SUBSCRIBE</button>
        </div>
      </section>
    </div>
  );
};

export default Landing;