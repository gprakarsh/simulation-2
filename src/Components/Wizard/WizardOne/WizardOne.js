import React from 'react';
import {Link} from 'react-router-dom'

export default function (props) {
    return (
        <div>
            <div className='WizardOneHeader'>
                <h2>Add New Listing</h2>
                <button>Cancel</button>
            </div>
            <div className='Property'>
                <h4>Property Name</h4>
                <input />
            </div>
            
            <div className='Address'>
                <h4>Address</h4>
                <input />
            </div>
            
            <div className='City'>
                <h4>City</h4>
                <input />
            </div>

            
            <div className='State'>
                <h4>State</h4>
                <input />
            </div>

            
            <div className='Zip'>
                <h4>Zip</h4>
                <input />
            </div>

            <div className='WizardOneFooter'>
            <Link to ='/wizard/step2'><button>Next Step</button></Link>
            </div> 
        </div>
    )
}