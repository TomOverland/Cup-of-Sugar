import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../Navbar/Navbar"; 
import AuthenticationButton from '../AuthenticationButton/AuthenticationButton';
// import Profile from "../Profile/Profile"

const Header = () => {
  
  return (
    <nav className=" bg-blue-300">
      <div className="flex items-center justify-between flex-wrap p-5">
        <div className="flex items-center flex-shrink-0 text-white ml-2">
        <Navbar />
          <span className="font-semibold text-xl pl-3">
            <Link to="/">Cup of Sugar</Link>
          </span>
          
        </div> 
          <AuthenticationButton />
      </div>
    </nav>
  );
};

export default Header;
