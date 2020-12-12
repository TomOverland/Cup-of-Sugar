import React from "react";
import SiteDescription from "../SiteDescription/SiteDescription";
// import Login from './../Login/Login';
// import LoginButton from './../LoginButton/LoginButton';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function Banner() {
    return (
        // eslint-disable-next-line
        <div class="max-w-4xl bg-cover"><img className="w-full" src="https://i.ibb.co/KhyQjvK/Decor-Online-Store-Website.png"></img>
           <div class="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
                <div class="absolute top-20 right-20">
                    <SiteDescription />

                </div>
            </div>
        </div>
    )
};
  
  export default Banner;
 
