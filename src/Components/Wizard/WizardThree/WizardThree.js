import React from 'react';
import {Link} from 'react-router-dom';

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
                <Link to='/wizard/step2'><button>Previous Step</button></Link>
                <Link to='/'><button>Complete</button></Link>
            </div>
        </div>
    )
}