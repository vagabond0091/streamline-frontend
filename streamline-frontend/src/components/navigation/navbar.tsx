import { Link } from "react-router-dom";

function Navbar (){
    return (
        <nav className="hidden md:flex mt-4 md:mt-0">
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li><a  className="hover:text-purple-500 transition"><Link to='/'>Home</Link></a></li>
          <li><a  className="hover:text-purple-500 transition"><Link to='/products'>Products</Link></a></li>
          <li><a  className="hover:text-purple-500 transition"><Link to='/'>Cart</Link></a></li>
        </ul>
      </nav>
    );
}
export default Navbar;