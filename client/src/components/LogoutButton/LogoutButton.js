import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const LogoutButton = () => {
    const { logout, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return(
            <button onClick={() => logout({
                returnTo: window.location.origin
            })} className="py-2 px-4 bg-red-500 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md focus:outline-none">
                Logout <FontAwesomeIcon icon={faSignOutAlt}/>
            </button>
        )
}

export default LogoutButton;