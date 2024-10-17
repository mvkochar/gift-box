import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Catalogue, Home } from '../pages'


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
    </Routes>
  )
}

export default Main