import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="card">
                <h2>EVENT GATE</h2>
                <button onClick={() => navigate('/form')}>
                    Go to Event 1
                </button>
            </div>
        </div>
    )
};

export default Home;