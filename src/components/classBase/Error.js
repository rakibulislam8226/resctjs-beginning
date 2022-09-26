import React from 'react';
import { Link } from 'react-router-dom';
const Error = () => {
    return (
        <div>
            <h1>Error. Page not found</h1>
            <p>Go to home <Link to="/home">Home</Link></p>
        </div>
    );
};

export default Error;