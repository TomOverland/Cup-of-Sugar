// View of single product from results list
import React from "react";
import { Link } from "react-router-dom";
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Login from '../../views/Login';
import Wrapper from "../Wrapper/Wrapper"

const SingleProductPage = () => {
  return (
    
    <div>
      <Wrapper>
      <div className="flex space-x-4 p-3">
        <div className="flex-grow flex-1 items-center justify-center ">
          <div className= "bg-gray-100 mb-4 rounded overflow-auto py-10 px-10">
              <img alt="mockup" src={process.env.PUBLIC_URL + "/lawnmower.jpg"} className="h-64 w-auto bg-blue bg-cover pb-1" />
              <br />
              <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold  ">Mockup Text</div>
              <hr />
              <div className="text-base sm:text-sm md:text-md lg:text-lg mt-3">Description of product</div>
              <div className="text-base sm:text-sm md:text-md lg:text-lg mt-3 ">Price per Day: $5.00</div>
              <br/>
              <hr className="p-3" />  
              <Link to="/contact" className="py-2 px-4 pr-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md focus:outline-none flex-2">Rent it!</Link>
                 <Link to="/" className="ml-2 py-2 px-4 pr-4 bg-red-500 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md focus:outline-none">Cancel</Link>    
          </div>
        </div>
        <div className="flex-grow w-auto flex-2 items-center justify-center ">
          <div className= "bg-gray-100 mb-4 rounded overflow-auto py-10 px-10">
              <img alt="mockup" src={process.env.PUBLIC_URL + "/lawnmower.jpg"} className="h-64 w-auto bg-blue bg-cover pb-1" />
              <br />
              <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold  ">Mockup Text</div>
              <hr />
              <div className="text-base sm:text-sm md:text-md lg:text-lg mt-3">Description of product</div>
              <div className="text-base sm:text-sm md:text-md lg:text-lg mt-3 ">Price per Day: $5.00</div>
              <br/>
              <hr className="p-3" />  
              <Link to="/contact" className="py-2 px-4 pr-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md focus:outline-none flex-2">Rent it!</Link>
                 <Link to="/" className="ml-2 py-2 px-4 pr-4 bg-red-500 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md focus:outline-none">Cancel</Link>    
          </div>
        </div>
      </div>
      </Wrapper>
      <br />
      <br />
  </div>
    
    
  );
};

export default withAuthenticationRequired(SingleProductPage, {
  onRedirecting: () => <Login />
});

