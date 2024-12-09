import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './view/User'
import Index from './components/asd'
import Footer from './components/footer/footer'
import Header from './components/header/header'

function App() {

  return (
    <>
      <div>
          {/* <h1 className='text-4xl text-blue-400'>asdasd</h1> */}
      <BrowserRouter>
        {/* <Header/> */}
        <Routes>
          <Route path="login" element={<Login/>}/>
          <Route path="/index" element={<Index/>}/>
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    
      </div>
    </>
  )
}

export default App
