import React from "react";

const testimonials = [
  {
    name: "DR Ayesha Khan",
    position: "Cardiologist",
    message: "Smooth doctor onboarding and appointment management!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Ali Raza",
    position: "Admin Manager",
    message: "Makes managing patients and staff fast and easy.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Dr Azeem",
    position: "General Physician",
    message: "Quick setup and clean, responsive interface.",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

const Slider = () => {
  return (
    <div className="w-full py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          What Our Clients Say
        </h2>
        <div className="flex flex-wrap -mx-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-6"
            >
              <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center h-full">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{testimonial.position}</p>
                <p className="text-gray-600 italic">"{testimonial.message}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
