import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            this is error page, back to the home page
            <Link to="/">Home</Link>
        </div>
    );
};

export default ErrorPage;