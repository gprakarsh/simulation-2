import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { steptwo } from './../../../ducks/reducer';

class WizardTwo extends Component {
    constructor() {
        super();
        this.state = {
            imgUrl: ''
        };
    }

    imgInput(val) {
        this.setState({ imgUrl: val })
    }


    render() {
        return (
            <div>
                <div className='WizardTwoHeader'>
                    <h2>Add New Listing</h2>
                    <button>Cancel</button>
                </div>
                <div>
                    <h4>Image URL</h4>
                    <input value={this.state.imageUrl} onChange={(e)=>this.imgInput(e.target.value)}/>
                </div>
                <div className='WizardTwoFooter'>
                    <Link to='/wizard/step1'><button>Previous Step</button></Link>
                    <Link to='/wizard/step3'><button onClick={()=>this.props.steptwo(this.state.imgUrl)}>Next Step</button></Link>
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
    steptwo
}

const connectComp = connect(mapStateToProps, mapDispatchToProps)(WizardTwo)
export default connectComp;