
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './view/User'
import LandingPage from './view/LandingPage'
import Product from './view/Product'
import DashboardProduct from './components/admin/Product'
import ProductView from './view/ProductView'
import PrivacyPolicy from './view/PrivacyPolicy'
import SignUp from './components/user/SignUp'
import Cart from './view/Cart'
import Dashboard from './components/admin/Dashboard'
import AddProductView from './components/admin/AddProductView'
import SideBar from './components/admin/SideBar'

function App() {

  return (
    <>
      <div>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login/>}/>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/products" element={<Product/>}/>
          <Route path="/product/:id" element={<ProductView/>}/>
          <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/cart" element={<Cart/>}/>
           {/* admin panel routes */}
          <Route path="/admin" element={<SideBar />}>
            <Route  index element={<Dashboard />} />
            <Route path="addproduct" element={<AddProductView/>}/>
            <Route path="products" element={<DashboardProduct/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    
      </div>
    </>
  )
}

export default App
