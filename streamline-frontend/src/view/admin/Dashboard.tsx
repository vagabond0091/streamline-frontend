
function Dashboard() {
   
    return (
        <div>
        <h2 className="text-2xl font-semibold text-gray-800">Dashboard Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="p-6 bg-white rounded-lg shadow-md border border-gray-300">
                <h3 className="text-lg font-medium">Total Users</h3>
                <p className="text-2xl font-bold mt-2">1,250</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md border border-gray-300">
                <h3 className="text-lg font-medium">Total Orders</h3>
                <p className="text-2xl font-bold mt-2">2,345</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md border border-gray-300">
                <h3 className="text-lg font-medium">Revenue</h3>
                <p className="text-2xl font-bold mt-2">$12,580</p>
            </div>
        </div>
    </div>
    );
}

export default Dashboard;
