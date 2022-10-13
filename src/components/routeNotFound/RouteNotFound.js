import React from 'react';
import { Link } from 'react-router-dom';

const RouteNotFound = () => {
    return (
        <div>
            <h2>There is no route.Please Go to Home page</h2>
            <Link to='/'>Home page</Link>
        </div>
    );
};

export default RouteNotFound;