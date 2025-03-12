import assets from '../../assets/laptopbanner.jpg'
function Testimonial(){
    const testimonials = [
        { id: 1, name: "John Doe", review: "Amazing products! High quality and great service.", image: assets },
        { id: 2, name: "Jane Smith", review: "Absolutely love my purchase. Will buy again!", image: assets },
        { id: 3, name: "Michael Lee", review: "Fast delivery and excellent customer support.", image: assets }
      ];
    
    return (
        <section className="mx-4 mt-10 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Our Customers Say</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
                <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mb-4" />
                <p className="text-gray-700 italic text-center">"{testimonial.review}"</p>
                <h4 className="text-lg font-semibold text-gray-900 mt-4">- {testimonial.name}</h4>
                </div>
            ))}
            </div>
        </section>
    )
}

export default Testimonial;