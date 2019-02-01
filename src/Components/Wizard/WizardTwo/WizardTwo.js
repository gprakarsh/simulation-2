import React from 'react';

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
            <button>Previous Step</button>
            <button>Next Step</button>
            </div>
        </div>
    )
}