// View of single product from results list
import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Login from '../../views/Login';
import Wrapper from "../Wrapper/Wrapper"
import API from "../../utils/API";

const SingleProductPage = (props) => {
 const [request, setRequest] = useState({
   loading: false,
   data: null
 });
  const id = props.match.params.id
  useEffect(() => {
    API.getSingleItem(id).then((res) => {
      setRequest({
        loading: false,
        data: res
      })
    });
  });
  console.log(request.data)
  
  return (
    
    <div>
      
      <div className="container mx-auto pt-5 mt-5 ">
          <div className= "bg-gray-100 mb-4 rounded overflow-auto py-10 px-10 space-y-4 justify-items-end">
              <img alt="mockup" src={process.env.PUBLIC_URL + "/lawnmower.jpg"} className="h-64 w-auto  bg-blue bg-cover pb-1 block" />
              <br />
              <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold block ml-4">{}</div>
              <hr />
              <div className="text-base sm:text-sm md:text-md lg:text-lg mt-3 block mr-2">Description of product</div>
              <div className="text-base sm:text-sm md:text-md lg:text-lg mt-3 block">Price per Day: $5.00</div>
              <br/>
              <hr className="p-3" />  
                 
          </div>
          <div>
              <Link to="/contact" className="py-2 px-4 pr-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md focus:outline-none flex-3">Rent it!</Link>
              <Link to="/" className="ml-2 py-2 px-4 pr-4 bg-red-500 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md focus:outline-none flex-3">Cancel</Link> 
          </div>
      </div>
  
  </div>
    
    
  );
};

export default withAuthenticationRequired(SingleProductPage, {
  onRedirecting: () => <Login />
});

