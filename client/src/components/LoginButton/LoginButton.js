import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";

const LoginButton = () => {
    const { loginWithRedirect, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
            <button onClick={() => loginWithRedirect()} className="py-2 px-4 bg-red-500 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md focus:outline-none">
                Login <FontAwesomeIcon icon={faPowerOff}/>
            </button>
        )
}

export default LoginButton;