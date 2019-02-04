import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { stepthree } from './../../../ducks/reducer';
import axios from 'axios';

class WizardThree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            monthlyMortgageAmount: 0,
            desiredMonthlyRent: 0
        }
    }

    mortInput(val) {
        this.setState({ monthlyMortgageAmount: val })
    }

    rentInput(val) {
        this.setState({ desiredMonthlyRent: val })
    }

    submit = () => {
        let sendObj = this.props.item;
        console.log(this.props.item, 'props wizard three')
        axios.post(`/api/houser/add`, sendObj).then(() => {
            console.log(sendObj, 'Added object')
        })
    }


    render() {
        return (
            <div>
                <div className='WizardThreeHeader'>
                    <h2>Add New Listing</h2>
                    <button>Cancel</button>
                </div>
                <div className='MonthlyMortgageAmount'>
                    <h4>Monthly Mortgage Amount</h4>
                    <input value={this.state.monthlyMortgageAmount} onChange={(e) => this.mortInput(e.target.value)} />
                </div>
                <div className='DesiredMonthlyRent'>
                    <h4>Desired Monthly Rent</h4>
                    <input value={this.state.desiredMonthlyRent} onChange={(e) => { this.rentInput(e.target.value) }} />
                </div>
                <div className='WizardThreeFooter'>
                    <Link to='/wizard/step2'><button>Previous Step</button></Link>
                    <button onClick={
                        () => this.props.stepthree({
                            monthlyMortgageAmount: this.state.monthlyMortgageAmount,
                            desiredMonthlyRent: this.state.desiredMonthlyRent
                        })}>Submit</button>
                    <Link to='/'><button onClick={this.submit}>Complete</button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    console.log(reduxState, 'state at wizard three')
    return {
        item: reduxState.item
    }
}

//output new info to redux 
const mapDispatchToProps = {
    stepthree
}

const connectComp = connect(mapStateToProps, mapDispatchToProps)(WizardThree)
export default connectComp;