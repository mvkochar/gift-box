import React from 'react'
import './css/Home.css'

const Home = () => {
  return (
    <>
      <main className='home-main'>
        <h1 className="home-main-title">Gift box with Style</h1>
        <a href="" className="home-main-shop">Shop now</a>
      </main>
      <div className="home-about">
        We think gift giving is pretty awesome. But what happened to actually putting thought and creativity into a gift?
        Simple Brown Box rekindles a lost art by providing beautifully packaged, hand selected items sourced from small
        businesses, artisan crafters and other sellers. No matter the celebration, our luxe boxes fulfill your need
        for a thoughtful, unique and memorable gift option. We pride ourselves in perfecting every single itty bitty detail,
        because we want each recipient to feel as special as they truly are.
      </div>
      <div className="home-divider"></div>
      <section className='home-featured'>
        <h2 className="home-bl-title">Featured collections</h2>
        <div className="home-featured-box d-f">
          <div>
            <div><img src="/images/home-featured1.png" alt="home-featured1" /></div>
            <a href="" className="home-featured-link">For her</a>
          </div>
          <div>
            <div><img src="/images/home-featured2.png" alt="home-featured2" /></div>
            <a href="" className="home-featured-link">Wedding</a>
          </div>
          <div>
            <div><img src="/images/home-featured3.png" alt="home-featured3" /></div>
            <a href="" className="home-featured-link">Littles</a>
          </div>
        </div>
      </section>
      <section className='home-bottom'>
        <div className="home-follow">
          <h2 className="home-bl-title">Follow our feed</h2>
          <div className="home-follow-box d-f align-center">
            <div>
              <div className="home-follow-insta">@simple_Brown_box</div>
              <a href="" className="home-follow-link">Follow us</a>
            </div>
            <div className="home-folow-images d-f">
              <div><img src="/images/insta1.png" alt="insta1" /></div>
              <div className="little-images d-f">
                <div><img src="/images/insta2.png" alt="insta2" /></div>
                <div><img src="/images/insta3.png" alt="insta3" /></div>
                <div><img src="/images/insta4.png" alt="insta4" /></div>
                <div><img src="/images/insta5.png" alt="insta5" /></div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-partners">
          <h2 className="home-bl-title">Partners</h2>
          <div className="home-partners-box d-f">
            <div><img src="/images/partner1.png" alt="partner1" /></div>
            <div><img src="/images/partner2.png" alt="partner2" /></div>
            <div><img src="/images/partner3.png" alt="partner3" /></div>
            <div><img src="/images/partner4.png" alt="partner4" /></div>
            <div><img src="/images/partner5.png" alt="partner5" /></div>
          </div>
        </div>
        <div className="home-divider"></div>
        <div className="home-shipping d-f">
          <div className="home-shipping-info d-f align-center">
            <h2 className="home-shipping-title">Free Shipping all over great britain via royal mail special delivery</h2>
            <div><img src="/images/shipping-logo.png" alt="shipping-logo" /></div>
          </div>
          <button className='page-top-btn' onClick={()=>window.scrollTo(0, 0)}><img src="/images/arrow-up.png" alt="arrow-up" /></button>
        </div>
      </section>
    </>
  )
}

export default Home