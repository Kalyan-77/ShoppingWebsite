import React from 'react';
import './home.css';
import { Footer } from './Footer'; // Import the Footer component

export const Home = () => {
  return (
    <div className="home-container">
      {/* Banner Section */}
      <div className="banner-section">
        <div className="banner-content">
          <p className="banner-subtitle">SPRING / SUMMER COLLECTION 2023</p>
          <h2 className="banner-title">Get up to 30% Off New Arrivals</h2>
          <button className="shop-now-btn">Shop Now</button>
        </div>
        <div className="banner-image">
          <img
            src="https://www.shutterstock.com/image-photo/buyers-couple-shopping-using-cellphone-600nw-2116844222.jpg"
            alt="Fashion Model"
          />
        </div>
      </div>

      {/* Categories Section */}
      <div className="categories-section">
        <div className="category">
          <img
            src="https://img.freepik.com/premium-photo/happy-asian-woman-choosing-clothes-with-store-shop-with-happy-action-department-cent_41418-2147.jpg"
            alt="Women's"
          />
          <div className="category-overlay">Women's</div>
        </div>
        <div className="category">
          <img
            src="https://market99.com/cdn/shop/articles/top-selling-fashion-accessories-products-from-market99-to-buy-in-2023-market-99.jpg?v=1697004201"
            alt="Accessories"
          />
          <div className="category-overlay">Accessories</div>
        </div>
        <div className="category">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ59jrNJRufmoHM_AO6wTTh9wVNbywBT9E1uA&s"
            alt="Men's"
          />
          <div className="category-overlay">Men's</div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="featured-section">
        <h3 className="section-title">Featured Products</h3>
        <div className="featured-products">
          <div className="product-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKw5AagKukKOwtfPS8xYOtc3eBCl2NMbNZkA&s" alt="Product 1" />
            <p className="product-name">Ultimate Men's Formal Wear</p>
            <p className="product-price">₹2,999</p>
          </div>
          <div className="product-card">
            <img src="https://www.westside.com/cdn/shop/articles/Untitled_design_42.png?v=1696587852&width=533" alt="Product 2" />
            <p className="product-name">Casual Kidswear pant and T-shirts</p>
            <p className="product-price">₹499</p>
          </div>
          <div className="product-card">
            <img src="https://m.media-amazon.com/images/I/61vF1SwJFNL._SY741_.jpg" alt="Product 3" />
            <p className="product-name">YSYB Dezines Men's Blazer</p>
            <p className="product-price">₹1,399</p>
          </div>
          <div className="product-card">
            <img src="https://m.media-amazon.com/images/I/416izVjCCcL.jpg" alt="Product 3" />
            <p className="product-name">Men's Business Suit Vest Slim Fit Dress Vest Wedding Waistcoat</p>
            <p className="product-price">₹849</p>
          </div>
          <div className="product-card">
            <img src="https://m.media-amazon.com/images/I/91S8xCU6PqL._SY879_.jpg" alt="Product 3" />
            <p className="product-name">Sidhidata Cotton Women's Chanderi Embroidery Work Unstitched Salwar</p>
            <p className="product-price">₹699</p>
          </div>
        </div>
      </div>

      {/* New Arrivals Section */}
      <div className="new-arrivals-section">
        <h3 className="section-title">New Arrivals</h3>
        <div className="new-arrivals">
          <div className="product-card">
            <img src="https://t4.ftcdn.net/jpg/07/63/26/85/360_F_763268538_sk7wNf87lh0ioZMnAnLBOBlf1unB2RNi.jpg" alt="New Arrival 1" />
            <p className="product-name">Men's Cotton Shirts</p>
            <p className="product-price">₹999</p>
          </div>
          <div className="product-card">
            <img src="https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,q_auto:best,t_productPageHeroGalleryTransformation_v2,w_auto/India%20LOB/embroidered-clothing/Sweatshirts/IN_Sweatshirts_001" alt="New Arrival 2" />
            <p className="product-name">Personalized Hoodies</p>
            <p className="product-price">₹1,100</p>
          </div>
          <div className="product-card">
            <img src="https://glamatyou.com/cdn/shop/files/orange-pure-soft-semi-silk-saree-with-stylish-blouse-piece-for-women_6.jpg?v=1685708243" alt="New Arrival 3" />
            <p className="product-name">Orange Pure Soft Semi-Silk Saree</p>
            <p className="product-price">₹1,299</p>
          </div>
          <div className="product-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQelHb9hLRYSRq3RXPW1uZx6PPLMAk45Uw0Bw&s" alt="New Arrival 3" />
            <p className="product-name">Sweeters for mens</p>
            <p className="product-price">₹1,499</p>
          </div>
          <div className="product-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjfHtEdjN-qbWwi6_kwnxrCI3Zd5e3GCHJGw&s" alt="New Arrival 3" />
            <p className="product-name">Pure Cotton Jaipuri King Size Bed Sheet (108x108) inch - Jasmine</p>
            <p className="product-price">₹1,199</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <h3 className="section-title">What Our Customers Say</h3>
        <div className="testimonials">
          <div className="testimonial">
            <p>"Great quality and fast shipping! Will definitely order again."</p>
            <p>- Jane Doe</p>
          </div>
          <div className="testimonial">
            <p>"Amazing customer service and beautiful products. Highly recommended!"</p>
            <p>- John Smith</p>
          </div>
          <div className="testimonial">
            <p>"Loved everything about my purchase. Perfect for the season!"</p>
            <p>- Alice Johnson</p>
          </div>
        </div>
      </div>

      {/* Add Footer component here */}
      <Footer /> {/* Footer is placed at the bottom */}
    </div>
  );
};
