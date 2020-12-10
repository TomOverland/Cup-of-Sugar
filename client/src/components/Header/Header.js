import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../Navbar/Navbar"; 
import LoginButton from "../LoginButton/LoginButton"
import LogoutButton from "../LogoutButton/LogoutButton"
import Searchbar from "../Searchbar/Searchbar"




const Header = () => {
  
  return (
    <nav className=" bg-blue-900">
      <div className="container flex items-center justify-between flex-wrap p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Navbar />
          <span className="font-semibold text-xl tracking-tight pl-3">
            <Link to="/">Cup of Sugar</Link>
          </span>
        </div> 
        <Searchbar />
        <LoginButton />
        <LogoutButton />
      </div>
    </nav>
  );
};

export default Header;
