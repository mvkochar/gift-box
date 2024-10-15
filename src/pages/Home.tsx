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
    </>
  )
}

export default Home