import React from 'react'
import './css/Header.css'

const Header = () => {
  return (
    <header>
      <div className="header-info d-f jc-sb align-center">
        <div><img src="/images/logo.svg" alt="Logo" /></div>
        <div className="header-actions d-f align-center">
          <div className='header-person'>
            <img src="/images/person.png" alt="person" className='d-b' />
            <ul className="header-person-dropdown d-f">
              <li><a href="">My account</a></li>
              <li><a href="">My orders</a></li>
              <li><a href="">My returns</a></li>
              <li><a href="">Returns information</a></li>
              <li><a href="">Contact preferences</a></li>
            </ul>
          </div>
          <div><img src="/images/heart.png" alt="heart" /></div>
          <a href="" className="d-b"><img src="/images/shopping-bag.png" alt="shopping-bag" /></a>
        </div>
      </div>
      <div className="header-bar">
         <nav>
          <ul className="header-nav d-f d-f jc-sb">
            <li><a href="">Home</a></li>
            <li><a href="">Catalogue</a></li>
            <li><a href="">Build your box</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Photo & Video</a></li>
            <li><a href="">Payment & Delivery</a></li>
            <li><a href="">Guarantee & Return</a></li>
            <li><a href="">F.A.Q.</a></li>
            <li><a href="">Testimonials</a></li>
          </ul>
         </nav>
      </div>
    </header>
  )
}

export default Header