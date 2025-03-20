import assets from '../../assets/laptopbanner.jpg'
function BannerWithImage(props: any){
    return (
       <section className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden mx-4 mt-6">
            {props.left ?
                <>  <div className="w-full md:w-1/2">
                        <img src={assets} alt="Special Offer" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-center md:text-left md:w-1/2 p-8">
                            <h2 className="text-5xl font-bold text-gray-900">Exclusive Deal Just for You!</h2>
                            <p className="mt-4 text-lg text-gray-700">Shop our latest collections with discounts up to 50% off. Limited time only!</p>
                            <a href="#" className="mt-6 inline-block px-6 py-3 text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 transition font-bold">Shop Now</a>
                </div></>: 
                <> 
                    <div className="text-center md:text-left md:w-1/2 p-8">
                            <h2 className="text-5xl font-bold text-gray-900">Exclusive Deal Just for You!</h2>
                            <p className="mt-4 text-lg text-gray-700">Shop our latest collections with discounts up to 50% off. Limited time only!</p>
                            <a href="#" className="mt-6 inline-block px-6 py-3 text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 transition font-bold">Shop Now</a>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img src={assets} alt="Special Offer" className="w-full h-full object-cover" />
                    </div>
                </>
            }
           
        </section>
    );
}
export default BannerWithImage;