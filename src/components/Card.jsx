import React from 'react'

function Card({ bookDetail }) {

    const { title, author, price, image } = bookDetail

    const handleClick = () => {
        console.log(bookDetail);
    }

    return (
        <div className="card m-2 rounded-0" style={{ width: "20rem" }}>
            <img className='card-img-top rounded-0' src={image} alt="logo" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <span className='d-flex align-items-center justify-content-between'>
                    <p className='fw-bold'>By: {author}</p>
                    <p className='fw-bold text-danger-emphasis'><i className="fa-solid fa-indian-rupee-sign"></i> {price}</p>
                </span>
                <a href="#" className="btn btn-dark rounded-0 w-100" onClick={handleClick}>Full Description</a>
            </div>
        </div>
    )
}

export default Card
