import React from 'react'
import { Link } from 'react-router-dom'

function Welcome() {
    return (
        <div className="container p-3 d-flex align-items-center justify-content-between flex-column p-5" style={{ backgroundImage: "data:image/jpeg;base64,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" }}>
            <p className='tex-center display-4 tex-dark fw-bold'>Welcome to Amazon Best Sellers</p>
            <button className="btn btn-warning" ><Link to="/all-books" className='text-dark'>Click Me!</Link ></button>
        </div>
    )
}

export default Welcome;