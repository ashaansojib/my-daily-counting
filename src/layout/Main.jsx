import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            main + home
            <Outlet />
        </div>
    );
};

export default Main;