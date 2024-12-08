import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './view/User'

function App() {

  return (
    <>
      <div>
          {/* <h1 className='text-4xl text-blue-400'>asdasd</h1> */}
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    
      </div>
    </>
  )
}

export default App
