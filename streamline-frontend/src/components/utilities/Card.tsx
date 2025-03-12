import assets from '../../assets/strawberry.jpg'
function Card() {
   
    return (
        <div className="flex flex-wrap">
            <div className="w-1/4 bg-white rounded-lg shadow-md  mx-3  mt-4">
                <div className="flex flex-col justify-between">
                    <div >
                        <div>
                            <img src={assets} className="h-auto max-w-full"alt="product" />
                            {/* <img src="../../assets/strawberry.jpg" alt="" /> */}
                        </div>
                        <div className="px-3 py-3">
                            <h2>Title</h2>
                            <p>Description</p>
                        </div>
                        <div className="flex justify-between px-3 py-3">
                            <div>
                                <p className='text-primary'>Price</p>
                            </div>
                            <div>
                                <p>Stock</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-secondaryBtn rounded-md px-3 py-1 text-center mb-3 mx-2 shadow-xl ">
                        <button>Add to Order</button>
                    </div>
                    
                </div>
                
            </div>
            <div className="w-1/4 bg-white rounded-lg shadow-md mx-3  mt-4 ">
                <div className="flex flex-col justify-between">
                    <div >
                        <div>
                            <img src={assets} className="h-auto max-w-full"alt="product" />
                            {/* <img src="../../assets/strawberry.jpg" alt="" /> */}
                        </div>
                        <div className="px-3 py-3">
                            <h2>Title</h2>
                            <p>Description</p>
                        </div>
                        <div className="flex justify-between px-3 py-3">
                            <div>
                                <p className='text-primary'>Price</p>
                            </div>
                            <div>
                                <p>Stock</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-secondaryBtn rounded-md px-3 py-1 text-center mb-3 mx-2 shadow-xl ">
                        <button>Add to Order</button>
                    </div>
                    
                </div>
                
            </div>
            <div className="w-1/4 bg-white rounded-lg shadow-md mx-3  mt-4 ">
                <div className="flex flex-col justify-between">
                    <div >
                        <div>
                            <img src={assets} className="h-auto max-w-full"alt="product" />
                            {/* <img src="../../assets/strawberry.jpg" alt="" /> */}
                        </div>
                        <div className="px-3 py-3">
                            <h2>Title</h2>
                            <p>Description</p>
                        </div>
                        <div className="flex justify-between px-3 py-3">
                            <div>
                                <p className='text-primary'>Price</p>
                            </div>
                            <div>
                                <p>Stock</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-secondaryBtn rounded-md px-3 py-1 text-center mb-3 mx-2 shadow-xl ">
                        <button>Add to Order</button>
                    </div>
                    
                </div>
                
            </div>
            <div className="w-1/4 bg-white rounded-lg shadow-md mx-3 mt-4 ">
                <div className="flex flex-col justify-between">
                    <div >
                        <div>
                            <img src={assets} className="h-auto max-w-full"alt="product" />
                            {/* <img src="../../assets/strawberry.jpg" alt="" /> */}
                        </div>
                        <div className="px-3 py-3">
                            <h2>Title</h2>
                            <p>Description</p>
                        </div>
                        <div className="flex justify-between px-3 py-3">
                            <div>
                                <p className='text-primary'>Price</p>
                            </div>
                            <div>
                                <p>Stock</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-secondaryBtn rounded-md px-3 py-1 text-center mb-3 mx-2 shadow-xl ">
                        <button>Add to Order</button>
                    </div>
                    
                </div>
                
            </div>
        </div>
       
    );
  }
  
  export default Card;