import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import homeImage from './assets/img1.jpg';
import southIndian from './assets/southindian.jpeg';
import northIndian from './assets/northindian.jpeg';
import chinese from './assets/chinese.jpeg';
import hotel1 from './assets/chutney.jpeg';
import hotel2 from './assets/sindhur.jpg';
import hotel3 from './assets/paradise.jpeg';
import hotel4 from './assets/ragavendra.jpeg';
import hotel5 from './assets/bhawachi.jpg';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="welcome-text">Welcome To The Food Delivery App</h1>
      <div className="home-content">
        <div className="image-side">
          <img src={homeImage} alt="Food Delivery" className="home-image" />
        </div>
        <div className="details-side">
          <div className="categories-side">
            <h2 className="category-text">Food Categories</h2>
            <div className="categories">
              <Link to="/category/south-indian" className="category-card">
                <img src={southIndian} alt="South Indian" />
                <p>South Indian</p>
              </Link>
              <Link to="/category/north-indian" className="category-card">
                <img src={northIndian} alt="North Indian" />
                <p>North Indian</p>
              </Link>
              <Link to="/category/chinese" className="category-card">
                <img src={chinese} alt="Chinese" />
                <p>Chinese</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="content-side">
        <h2 className="hotel-text">Select a Hotel</h2>
        <div className="hotels">
          <Link to="/hotel/chutney" className="hotel-card">
            <img src={hotel1} alt="Hotel Chutney" />
            <p>Hotel Chutney</p>
          </Link>
          <Link to="/hotel/sindhura" className="hotel-card">
            <img src={hotel2} alt="Hotel Sindhura" />
            <p>Hotel Sindhura EastCourt</p>
          </Link>
          <Link to="/hotel/paradise" className="hotel-card">
            <img src={hotel3} alt="Paradise" />
            <p>Paradise Biryani</p>
          </Link>
          <Link to="/hotel/raghavendra" className="hotel-card">
            <img src={hotel4} alt="Sri Raghavendra" />
            <p>Sri Raghavendra</p>
          </Link>
          <Link to="/hotel/bawarchi" className="hotel-card">
            <img src={hotel5} alt="Bawarchi" />
            <p>Bawarchi Restaurant</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
