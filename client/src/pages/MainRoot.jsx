import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

function MainRoot() {
  return (
    <>
      <Navbar />
      <div style={{paddingTop: '100px'}}>
        <Outlet />

      </div>
    </>
  )
}

export default MainRoot