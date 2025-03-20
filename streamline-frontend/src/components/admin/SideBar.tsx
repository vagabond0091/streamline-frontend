import { Link, Outlet, useNavigate } from "react-router-dom";
import { Users, ShoppingBag, BarChart, Settings, PlusCircle, LayoutDashboard, Package } from "lucide-react";

function SideBar(){
    const navigate = useNavigate();
    return (
    <div className="min-h-screen flex">
    <div className="w-64 bg-[#1E2A38] text-white p-6 flex flex-col space-y-6">
    <h2 className="text-2xl font-semibold">Admin Panel</h2>
    <nav className="flex flex-col space-y-4">
        <Link to="/admin" className="flex items-center space-x-3 hover:text-blue-300">
            <LayoutDashboard size={20} /> <span>Dashboard</span>
        </Link>
        <Link to="/admin/products" className="flex items-center space-x-3 hover:text-blue-300">
            <Package size={20} /> <span>Products</span>
        </Link>
        <Link to="/admin/orders" className="flex items-center space-x-3 hover:text-blue-300">
            <ShoppingBag size={20} /> <span>Orders</span>
        </Link>
        <Link to="/admin/analytics" className="flex items-center space-x-3 hover:text-blue-300">
            <BarChart size={20} /> <span>Analytics</span>
        </Link>
        <Link to="/admin/settings" className="flex items-center space-x-3 hover:text-blue-300">
            <Settings size={20} /> <span>Settings</span>
        </Link>
    </nav>
        </div>
            <div className="flex-1 p-8 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200">
                <Outlet />
            </div>
        </div>
    );
}

export default SideBar;