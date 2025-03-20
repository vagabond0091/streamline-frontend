import { Link } from "react-router-dom";

function Footer (){
    return (
        <footer className="bg-gray-900 text-white py-10 mt-10 rounded-t-lg">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start pl-6">
            <img src="/images/logo.png" alt="ShopLogo" className="w-32 mb-4" />
            <h2 className="text-2xl font-bold">ShopLogo</h2>
            <p className="mt-2 text-gray-400">Your one-stop shop for quality products.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Shop</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Cart</a></li>
              <li><Link to="/privacypolicy" className="text-gray-400 hover:text-white transition">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="mt-2 text-gray-400">Email: support@shoplogo.com</p>
            <p className="text-gray-400">Phone: +1 234 567 890</p>
          </div>
        </div>
        <p className="text-center text-sm text-gray-500 mt-6">&copy; 2025 ShopLogo. All rights reserved.</p>
      </footer>
    );
}

export default Footer;