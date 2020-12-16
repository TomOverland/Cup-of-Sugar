// View of single product from results list
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer"

const SingleProductPage = (props) => {
  return (
    <div>
    <div className="container mx-auto pt-3">
        <div className= "bg-gray-100 mb-4 rounded overflow-hidden py-10 px-10">
            <div className="flex">
              <img alt="mockup" src={process.env.PUBLIC_URL + "/lawnmower.jpg"} className="h-64 w-auto bg-blue bg-cover pb-1" />
            <div className="text-2xl font-bold mb-3 flex-1 ml-3">{props.item.itemName}</div>
            <div className="text-lg mb-3 flex-1">{props.item.itemDescription}</div>
            <div className="text-lg mb-3 flex-1">{props.item.rentalFee}</div>
              
            </div>
            <br />
            <hr className="p-3"/>
            <div className="p-3 flex">            
                 <Link to="/contact" className="py-2 px-4 pr-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md focus:outline-none flex-2">Rent it!</Link>
                 <Link to="/" className="ml-2 py-2 px-4 pr-4 bg-red-500 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md focus:outline-none flex-2">Cancel</Link>
            </div>
        </div> 
    </div>
    <Footer />
    </div>
    
  );
};

export default SingleProductPage;

