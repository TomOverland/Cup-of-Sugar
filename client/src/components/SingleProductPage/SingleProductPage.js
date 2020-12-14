// View of single product from results list
import React from "react";
import { Link } from "react-router-dom";
const SingleProductPage = () => {
  return (
    <div className="container mx-auto pt-3">
        <div className= "bg-gray-100 mb-4 rounded overflow-hidden max-w-6x1 py-10 px-10">
            <div>
              <img alt="mockup" src={process.env.PUBLIC_URL + "/logo512.png"} className="h-64 bg-blue bg-cover" />
            </div>
            <hr />
            <div className="p-3">
              <div className="text-2xl font-bold mb-3">Mockup Text</div>
              <div className="text-lg mb-3">Description of product</div>
              <div className="text-lg mb-3">Price per Day: $5.00</div>
              <div>
                 <Link to="/contact" className="bg-blue-500 text-white p-2 flex justify-center">Rent it!</Link>
              </div>
            </div>

        </div>
    </div>

  );
};

export default SingleProductPage;

