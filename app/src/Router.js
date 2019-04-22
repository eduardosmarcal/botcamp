import React from "react";

import Login from './pages/Login';
import Chat from './pages/Chat';

const Router = () => {
    const routes = [];
    routes['/chat'] = <Chat />;

    return routes[window.location.pathname] || <Login />;
};

export default Router;