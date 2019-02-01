import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {stepone} from './../../../ducks/reducer';

class WizardOne extends Component{
    constructor() {
        super();
        this.state = {
            propertyName: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        };
    }

    propInput(val) {
        this.setState({ propertyName: val })
    }


    addressInput(val) {
        this.setState({ address: val })
    }


    cityInput(val) {
        this.setState({ city: val })
    }


    stateInput(val) {
        this.setState({ state: val })
    }

    zipInput(val) {
        this.setState({ zip: val })
    }

    submit() {
        console.log(this.state)
        let infoObj = {
            propertyName: this.state.propertyName,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip }
        
        this.props.stepone(infoObj)        
    }

    render() {
        return (
            <div>
                <div className='WizardOneHeader'>
                    <h2>Add New Listing</h2>
                    <button>Cancel</button>
                </div>
                <div className='Property'>
                    <h4>Property Name</h4>
                    <input value={this.state.propertyName} onChange={(e) => this.propInput(e.target.value)} />
                </div>

                <div className='Address'>
                    <h4>Address</h4>
                    <input value={this.state.address} onChange={(e) => this.addressInput(e.target.value)} />
                </div>

                <div className='City'>
                    <h4>City</h4>
                    <input value={this.state.city} onChange={(e) => this.cityInput(e.target.value)} />
                </div>


                <div className='State'>
                    <h4>State</h4>
                    <input value={this.state.state} onChange={(e) => this.stateInput(e.target.value)} />
                </div>


                <div className='Zip'>
                    <h4>Zip</h4>
                    <input value={this.state.zip} onChange={(e) => this.zipInput(e.target.value)} />
                </div>

                <div className='WizardOneFooter'>
                    <Link to='/wizard/step2'><button onClick={()=>this.submit()}>Next Step</button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    return reduxState
}

//output new info to redux 
const mapDispatchToProps = {
    stepone:stepone
}

const connectComp = connect(mapStateToProps, mapDispatchToProps)(WizardOne)
export default connectComp;