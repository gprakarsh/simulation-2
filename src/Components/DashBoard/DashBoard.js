import React from 'react';
import { Link } from 'react-router-dom';
import trash from "./../../assets/waste_bin_red.svg";
import { connect } from 'react-redux';
import {removeItem} from './../../ducks/reducer';

function DashBoard(props) {
    // should have mapper here
    let { list } = props;

    let mapper = list.map((item, i) => {
        return (
            <div className="list_item" key={i}>
                <div className='Image'>
                <img src={item.imageUrl} alt="Home Image" height="42" width="42" />
                </div>
                <img src={trash} alt="delete" onClick={() => props.remove(i)} height='20' width='20'/>
                <p>Property Name:{item.propertyName}</p>
                <p>Address:{item.address}</p>
                <p>City:{item.city}</p>
                <p>State:{item.city}</p>
                <p>Zip:{item.zip}</p>
                <p>Monthly Mortgage:{item.monthlyMortgageAmount}</p>
                <p>Desired Rent:{item.desiredMonthlyRent}</p>
            </div>
        );
    });
    return (
        <div>
            <div className='DashBoardHeader'>
                <h1>DashBoard</h1>
                <Link to='/wizard/step1'><button>Add New Property</button></Link>
            </div>
            <div>
                Home Listings
            </div>

            <div>
                {mapper}
            </div>

        </div>
    )
}

function mapStateToProps(reduxState) {
    console.log(reduxState)
    return {
        list: reduxState.list
    }
}

  const mapDispatchToProps = {
    remove:removeItem
  }





const connectComponent = connect(mapStateToProps,mapDispatchToProps)(DashBoard); // makes a connection to the redux data

export default connectComponent;