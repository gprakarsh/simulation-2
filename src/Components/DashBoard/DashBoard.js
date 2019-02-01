import React from 'react';

export default function DashBoard(props) {
    // should have mapper here
    return (
        <div>
            <div className='DashBoardHeader'>
                <p>DashBoard</p>
                <button>Add New Property</button>
            </div>
            <div>
                Home Listings
            </div>
            <div>
                <img src="" alt="Home Image" height="42" width="42" />
                <div>                                      
                    {/* mapper to be used here */}
                    <p>Property Name:{}</p>
                    <p>Address:{}</p>
                    <p>City:{}</p>
                    <p>State:{}</p>
                    <p>Zip:{}</p>
                    <p>Monthly Mortgage</p>
                    <p>Desired Rent</p>
                </div>
            </div>
        </div>
    )
}