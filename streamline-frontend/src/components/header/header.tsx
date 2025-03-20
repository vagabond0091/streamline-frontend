import { Link } from "react-router-dom";
import Navbar from "../navigation/navbar";

function Header() {
   
    return (
        <header className="bg-white shadow-lg py-4 px-8 flex items-center justify-between rounded-b-lg md:flex-row flex-col">
        <div className="flex justify-between w-full md:w-auto">
          <Link to="/"><h1 className="text-3xl font-extrabold text-gray-800">ShopLogo</h1></Link>
          <button className="md:hidden text-gray-800 text-2xl focus:outline-none" id="menu-btn">☰</button>
        </div>
        <input
          type="text"
          placeholder="Search for products..."
          className="border border-gray-300 rounded-full px-4 py-2 w-full md:w-1/3 mt-4 md:mt-0 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <Navbar/>
      </header>
    );

}
  
export default Header;