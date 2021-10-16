import React from 'react';
import useAuth from '../../Hooks/useAuth';

const Home = () => {
    const {user} = useAuth()
    return (
        <div>
            <h2>home component</h2>
            <h4>User : {user.displayName} </h4>
        </div>
    );
};

export default Home;