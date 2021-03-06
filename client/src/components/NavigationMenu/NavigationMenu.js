import React from "react";
import { Link } from "react-router-dom";

function NavigationMenu(props) {
    return(
        <div>
         <div className="font-bolder text-black py-3">Main Menu</div>
           <ul>
             <li>
               <Link to={{pathname: "/postproduct"}} className="text-blue-500 py-3 border-t border-b block"
              onClick={props.closeMenu} 
              >
                Post an item
               </Link>
             </li>
             <li>
               <Link to="/owner" className="text-blue-500 py-3 border-b block" onClick={props.closeMenu}>
               My Listings
               </Link>
             </li>
             {/* <li>
               <Link to="/" className="text-blue-500 py-3 border-b block" onClick={props.closeMenu}>
               My Rented Items
               </Link>
             </li> */}
            </ul>
        </div>
    )
}

export default NavigationMenu;
