'use client'
import React, { use } from 'react';

const UserPage = ({UsersPromise}) => {
    const user = use(UsersPromise);
    console.log(user);
    return (
        <div>
            <h1>hello</h1>
            <p>User: {user.length}</p>
        </div>
    );
};

export default UserPage;