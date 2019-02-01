import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import trash from "./../../assets/waste_bin_red.svg";
import { connect } from 'react-redux';
import {removeItem} from './../../ducks/reducer';
import axios from 'axios';
import {getList} from './../../ducks/reducer';

class DashBoard extends Component{
    // should have mapper here
    componentDidMount(){
        axios.get(`/api/houser`).then((res)=>{
            console.log(res.data,'axios')
            this.props.getList(res.data)
        })
    }
    remove(i,id){
        // app.delete(`/api/houser/delete/:id`,ctrl.deleteProperty);
        axios.delete(`/api/houser/delete/${id}`).then(()=>{
            console.log(id,'deleted')
            this.props.remove(i)
        })
    }
    render(){
    let { list } = this.props;
    console.log(list);
    
    let mapper = list.map((item, i) => {
        return (
            <div className="list_item" key={i}>
                <div className='Image'>
                <img src={item.imageUrl} alt="Home Image" height="42" width="42" />
                </div>
                <img src={trash} alt="delete" onClick={() => this.remove(i,item.id)} height='20' width='20'/>
                <p>Property Name:{item.propertyName}</p>
                <p>Address:{item.address}</p>
                <p>City:{item.city}</p>
                <p>State:{item.stateinput}</p>
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
}

function mapStateToProps(reduxState) {
    console.log(reduxState)
    return {
        list: reduxState.list
    }
}

  const mapDispatchToProps = {
    remove:removeItem,
    getList:getList
  }





const connectComponent = connect(mapStateToProps,mapDispatchToProps)(DashBoard); // makes a connection to the redux data

export default connectComponent;