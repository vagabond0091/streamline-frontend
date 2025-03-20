import assets from '../../assets/laptopbanner.jpg'
function Collection (props:any){
    
    const collections = [
        { id: 1, name: "New Arrival 1", price: "$119.99", image: assets },
        { id: 2, name: "New Arrival 2", price: "$129.99", image: assets },
        { id: 3, name: "New Arrival 3", price: "$139.99", image: assets },
        { id: 4, name: "New Arrival 4", price: "$149.99", image:assets }
      ];
    return (
        <section className="mx-4 mt-10">
            { props.isFromProductView ? <>
                <h2 className="text-3xl font-bold text-gray-900  mb-6">{props.productViewText}</h2>
            </> :
            <>
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Shop by Collection</h2>
            </>
                
            }
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {collections.map((collection) => (
                <div key={collection.id} className="bg-white shadow-lg rounded-lg overflow-hidden relative">
                <img src={collection.image} alt={collection.name} className="w-full h-48 object-cover absolute top-0 left-0" />
                <div className="p-6 mt-40 text-center relative bg-white">
                    <h3 className="text-xl font-semibold text-gray-900">{collection.name}</h3>
                    <p className="text-gray-700 font-bold">{collection.price}</p>
                    <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">Shop Now</button>
                </div>
                </div>
            ))}
            </div>
      </section>
    );
}

export default Collection;