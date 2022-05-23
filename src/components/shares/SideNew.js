import React from 'react';

export default function SideNew({ image }) {
    return (
        <div className="col-12 mt-3">
            <div className='card mb-2'>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-6'>
                            <img src={image} className="card-img-top" alt="p1" />
                        </div>
                        <div className='col-6'>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}
