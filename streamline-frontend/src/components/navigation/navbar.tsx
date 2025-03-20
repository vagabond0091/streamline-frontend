import { ShoppingCart } from "lucide-react";
import { User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar (){
  const [cartCount, setCartCount] = useState(3); 
    return (
      <nav className="hidden md:flex mt-4 md:mt-0">
      <ul className="flex space-x-6 text-gray-700 font-medium items-center">
        <li><Link to='/' className="transition">Home</Link></li>
        <li><Link to='/products' className="transition">Products</Link></li>
        <li className="relative">
          <Link to='/cart' className=" transition flex items-center gap-2">
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </li>
        <li>
          <Link to="/login" className=" transition flex items-center gap-2">
              <User size={20} />
          </Link>
        </li>
      </ul>
    </nav>
    );
}
export default Navbar;