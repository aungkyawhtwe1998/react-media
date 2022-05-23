import React from 'react';

export default function SideVideoNew({ video }) {
    return (
        <div className="col-12 mt-3">
            <video src={video} className="card-img-top" controls="true" alt="p1" />
        </div>
    )
}
