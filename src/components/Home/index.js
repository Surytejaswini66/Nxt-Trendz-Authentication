import React from 'react'
import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="home-container">
    <Header />
    <div className="home-content">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
        className="home-img"
      />
      <h1>Clothes That Get YOU Noticed</h1>
      <p>Fashion is part of the daily air</p>
      <button className="shop-now-button">Shop Now</button>
    </div>
  </div>
)

export default Home
