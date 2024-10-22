import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Bag, BuildBox, Card, Catalogue, Faq, Home, Services, Testimonials } from '../pages'


const Main = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
      <Route
        path='catalogue'
        element={<Catalogue />}
      />
      <Route
        path='build-box'
        element={<BuildBox />}
      />
      <Route
        path='services'
        element={<Services />}
      />
      <Route
        path='card/:id'
        element={<Card />}
      />
      <Route
        path='testimonials'
        element={<Testimonials/>}
      />
      <Route
        path='faq'
        element={<Faq/>}
      />
      <Route
        path='bag'
        element={<Bag/>}
      />
    </Routes>
  )
}

export default Main