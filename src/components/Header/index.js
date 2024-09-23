// Write your JS code here
import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="header-content">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="website-logo"
      />
      <ul className="nav-menu">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
              alt="nav home"
              className="nav-icon"
            />
            <p>Home</p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/products" className="nav-link">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
              alt="nav products"
              className="nav-icon"
            />
            <p>Products</p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/cart" className="nav-link">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
              alt="nav cart"
              className="nav-icon"
            />
            <p>Cart</p>
          </Link>
        </li>
        <li className="nav-item">
          <button
            className="logout-button"
            onClick={() => history.push('/login')}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              alt="nav logout"
              className="nav-icon"
            />
            <p>Logout</p>
          </button>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
