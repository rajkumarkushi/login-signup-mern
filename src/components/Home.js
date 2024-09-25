import React from "react";
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    const location = useLocation();

    return (
        <div className="container mt-5 text-center">
            <div className="card p-4">
                <h1 className="display-4">Hello, {location.state.id}!</h1>
                <p className="lead">Welcome to the Home Page.</p>
            </div>
        </div>
    );
}

export default Home;