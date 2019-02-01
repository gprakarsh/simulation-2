import React from 'react';

export default function WizardThree(props) {
    return (
        <div>
            <div className='WizardThreeHeader'>
                <h2>Add New Listing</h2>
                <button>Cancel</button>
            </div>
            <div className='MonthlyMortgageAmount'>
                <h4>Monthly Mortgage Amount</h4>
                <input />
            </div>
            <div className='DesiredMonthlyRent'>
                <h4>Desired Monthly Rent</h4>
                <input />
            </div>
            <div className='WizardThreeFooter'>
                <button>Previous Step</button>
                <button>Complete</button>
            </div>
        </div>
    )
}