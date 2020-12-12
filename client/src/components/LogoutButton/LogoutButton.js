import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
    const { logout, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return(
        isAuthenticated && (
            <button onClick={() => logout()} className="py-2 px-4 bg-red-500 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md focus:outline-none">
                Logout
            </button>
        )
    )
}

export default LogoutButton;