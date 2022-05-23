import React from 'react'

export default function HomeAffair({ image }) {
    return (
        <div className='col-md-4 mt-3'>
            <div className="card mb-3">
                <img src={image} className="card-img-top" height="200px" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    )
}
