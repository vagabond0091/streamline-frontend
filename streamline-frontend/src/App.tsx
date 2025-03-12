
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './view/User'
import LandingPage from './view/LandingPage'
import Product from './view/Product'

function App() {

  return (
    <>
      <div>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login/>}/>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/products" element={<Product/>}/>
          <Route path="/product/:id" element={<Product/>}/>
        </Routes>
      </BrowserRouter>
    
      </div>
    </>
  )
}

export default App
