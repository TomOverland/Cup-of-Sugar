// inital created by Nou for skeleton, but will change in future for Alex's sidebar slider

import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {useTransition, animated} from 'react-spring';
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import { useAuth0 } from '@auth0/auth0-react';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const { isAuthenticated } = useAuth0();
       
    const maskTransitions = useTransition(showMenu, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })
    const menuTransitions = useTransition(showMenu, null, {
        from: { opacity: 0, transform: "translateX(-100%)" },
        enter: { opacity: 1,transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(-100%)" },
    })

  return ( isAuthenticated && 
    <nav>
            <span className="text-xl cursor-pointer">
            <FontAwesomeIcon
             icon={faBars}
             onClick={() => setShowMenu(!showMenu)}
            />
            </span>
            {
                maskTransitions.map(({ item, key, props }) =>
                    item && 
                    <animated.div 
                        key={key} 
                        style={props}
                        className="fixed top-0 left-0 w-full h-full z-50"
                        onClick={() => setShowMenu(false)}
                    >      
                        
                    </animated.div>
                )
            }
            {
                menuTransitions.map(({ item, key, props }) =>
                    item && 
                    <animated.div 
                        key={key} 
                        style={props}
                        className="fixed bg-white top-0 left-0 w-2/5 h-full z-50 shadow p-3"
                    >
                        <NavigationMenu
                            closeMenu={() => setShowMenu(false)}
                        />
                    </animated.div>
                )
            }
        </nav>
  );
}

export default Navbar;
