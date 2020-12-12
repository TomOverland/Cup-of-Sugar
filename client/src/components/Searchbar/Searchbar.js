import React from "react";

function Searchbar() {
    return(
        <div>
            <div className="flex space-x-4">
            <input className="py-2 px-10 bg-white rounded-lg placeholder-gray-400 text-gray-900 appearance-none inline-block w-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 flex-1" placeholder="Find Your Rental Today"></input>
            <button className="py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md focus:outline-none flex-2">Search</button> 
            </div>
        </div>
    )

}

export default Searchbar;