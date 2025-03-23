    import { Edit, Plus, PlusCircle, Search, Trash, X } from "lucide-react";
    import { useState } from "react";
import { Link } from "react-router-dom";

    function Product(){
        const [searchTerm, setSearchTerm] = useState("");
        const [filterType, setFilterType] = useState("All");
        const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
        const [currentPage, setCurrentPage] = useState(1);
        const itemsPerPage = 8;

        const products = [
            { id: 1, name: "Laptop", price: "$1200", type: "Electronics", quantity: 5, image: "https://via.placeholder.com/150" },
            { id: 2, name: "Shoes", price: "$80", type: "Fashion", quantity: 10, image: "https://via.placeholder.com/150" },
            { id: 3, name: "Headphones", price: "$200", type: "Electronics", quantity: 7, image: "https://via.placeholder.com/150" },
            { id: 4, name: "Headphones", price: "$200", type: "Electronics", quantity: 7, image: "https://via.placeholder.com/150" },
            { id: 5, name: "Headphones", price: "$200", type: "Electronics", quantity: 7, image: "https://via.placeholder.com/150" },
            { id: 6, name: "Headphones", price: "$200", type: "Electronics", quantity: 7, image: "https://via.placeholder.com/150" },
            { id: 7, name: "Laptop", price: "$1200", type: "Electronics", quantity: 5, image: "https://via.placeholder.com/150" },
            { id: 8, name: "Shoes", price: "$80", type: "Fashion", quantity: 10, image: "https://via.placeholder.com/150" },
            { id: 9, name: "Headphones", price: "$200", type: "Electronics", quantity: 7, image: "https://via.placeholder.com/150" },
            { id: 10, name: "Headphones", price: "$200", type: "Electronics", quantity: 7, image: "https://via.placeholder.com/150" },
            { id: 11, name: "Headphones", price: "$200", type: "Electronics", quantity: 7, image: "https://via.placeholder.com/150" },
            { id: 12, name: "Headphones", price: "$200", type: "Electronics", quantity: 7, image: "https://via.placeholder.com/150" },
        ];
        
        const filteredProducts = products.filter(product => 
            (filterType === "All" || product.type === filterType) &&
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
        const displayedProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

        const toggleSelectProduct = (id: any) => {
            setSelectedProducts(prev => prev.includes(id) ? prev.filter(pid => pid !== id) : [...prev, id]);
        };
        const selectAllProducts = () => {
            if (selectedProducts.length === displayedProducts.length) {
                setSelectedProducts([]);
            } else {
                setSelectedProducts(displayedProducts.map(product => product.id));
            }
        };
        const handlePageChange = (page: number) => {
            setCurrentPage(page);
        };

        return (
            <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Products</h2>
                <div className="flex justify-between items-center space-x-4 mb-4">
                        <div className="relative w-full md:w-1/3">
                            <input 
                                type="text" 
                                placeholder="Search products..." 
                                className="border border-gray-300 rounded-lg px-4 py-2 w-full pr-10" 
                                value={searchTerm} 
                                onChange={(e) => setSearchTerm(e.target.value)} 
                            />
                            <button className="absolute right-3 top-2.5 text-gray-500">
                                <Search size={20} />
                            </button>
                        </div>
                        <select 
                            className="border border-gray-300 rounded-lg px-4 py-2"
                            value={filterType} 
                            onChange={(e) => setFilterType(e.target.value)}
                        >
                            <option value="All">Filter by Category</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Fashion">Fashion</option>
                        </select>
                        <div className="flex space-x-2">
                            <Link to="/dashboard/addproduct">
                                <button className="text-blue-500 hover:text-blue-700 flex items-center p-2 rounded-lg shadow-md bg-white" title="Update">
                                <Edit size={20} />
                                </button>
                            </Link>
                            <button className="text-red-500 hover:text-red-700 flex items-center p-2 rounded-lg shadow-md bg-white" title="Delete">
                                <Trash size={20} />
                            </button>
                            <Link to="/admin/addproduct">
                                <button className="text-green-500 hover:text-green-700 flex items-center p-2 rounded-lg shadow-md bg-white" title="Add Product">
                                    <Plus size={20} />
                                </button>
                            </Link>
                        </div>
                    </div>


                <div className="overflow-auto">
                    <table className="w-full max-w-5xl mx-auto  bg-white shadow-md rounded-lg">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="p-2">
                                    <input 
                                        type="checkbox" 
                                        checked={selectedProducts.length === displayedProducts.length}
                                        onChange={selectAllProducts}
                                    />
                                </th>
                                <th className="p-2">Image</th>
                                <th className="p-2">Name</th>
                                <th className="p-2">Price</th>
                                <th className="p-2">Category</th>
                                <th className="p-2">Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayedProducts.map(product => (
                                <tr key={product.id} className="text-center bg-white border-t border-gray-300">
                                    <td className="p-2 border">

                                            <input 
                                                type="checkbox" 
                                                checked={selectedProducts.includes(product.id)}
                                                onChange={() => toggleSelectProduct(product.id)}
                                            />
                                    </td>
                                    <td className="p-2">
                                        <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded" />
                                    </td>
                                    <td className="p-2">{product.name}</td>
                                    <td className="p-2">{product.price}</td>
                                    <td className="p-2">{product.type}</td>
                                    <td className="p-2">{product.quantity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="flex justify-center mt-4 space-x-2">
                        {[...Array(totalPages)].map((_, index) => (
                            <button key={index} onClick={() => handlePageChange(index + 1)}
                                className={`px-4 py-2 rounded-lg ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        
        );
    }

    export default Product;