import React from 'react';
import {Link} from 'react-router-dom';

export default function WizardTwo(props) {
    return (
        <div>
            <div className='WizardTwoHeader'>
                <h2>Add New Listing</h2>
                <button>Cancel</button>
            </div>
            <div>
                <h4>Image URL</h4>
                <input />
            </div>
            <div className='WizardTwoFooter'>
            <Link to='/wizard/step1'><button>Previous Step</button></Link>
            <Link to='/wizard/step3'><button>Next Step</button></Link>
            </div>
        </div>
    )
}