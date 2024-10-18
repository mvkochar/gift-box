import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { BuildBox, Catalogue, Home } from '../pages'


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
    </Routes>
  )
}

export default Main