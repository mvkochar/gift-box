import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { BuildBox, Catalogue, Home, Services } from '../pages'


const Main = () => {
  return (
    <Routes>
        <Route
            path='/'
            element={<Home/>}
        />
        <Route
          path='catalogue'
          element={<Catalogue/>}
        />
        <Route
          path='build-box'
          element={<BuildBox/>}
        />
        <Route
          path='services'
          element={<Services/>}
        />
    </Routes>
  )
}

export default Main