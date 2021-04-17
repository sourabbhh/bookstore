import React, { Component } from 'react';
import { BookCart, Book, CustomerDet, Customer } from '../model/Book';
import './orderdetails.css';
import CartList from '../CartList/CartList';
import { InitCust } from '../actions/actionsCart';

interface propType{
    cart:any[],
    customerDet:any,
    customer: Customer,
    actions:any,
    history:any
}

export default class OrderDetails extends Component <propType>{
    constructor(props:propType){
        super(props);
    }
    componentWillUnmount(){
        this.props.actions.InitCust({
            name: '',
            address: '',
            phone: 0 ,
            id: 0,
            cart: []
        });
    }
    render(){

        return(
            <div className="container">


                <div className="card blue-grey darken-2">
                    <div className="card-content blue-grey lighten-4">
                        <span className="card-title">Order Details: id- {this.props.customer.id} </span>
                        <br />
                        <div className="row">
                            <div className="col s2">
                                Name:
                            </div>
                            <div className="col s10">
                                {this.props.customer.name}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s2">
                                Address:
                            </div>
                            <div className="col s10">
                                {this.props.customer.address}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s2">
                                Phone:
                            </div>
                            <div className="col s10">
                                {this.props.customer.phone}
                            </div>
                        </div>
                        <CartList cart={this.props.customer.cart} checkoutFlag={false} actions=' ' />


                    </div>
                </div>
            </div>
        )
    }
}