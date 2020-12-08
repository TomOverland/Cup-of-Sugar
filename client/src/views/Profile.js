// This file is an example of how to restrict viewing certain information to
// Authenticated users only.

import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
//import JSONpretty from 'react-json-pretty';
// ^ JSON prettifier for webpages, would req an npm install. Component below
// would display the Auth0 "user" object.

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0;

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        isAuthenticated && (
            <div>
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                {/* <JSONPretty data={user} /> */}
            </div>
        )
    )
};

export default Profile;