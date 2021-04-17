import React, { Component } from 'react';
import './checkout.css';
import { Customer, CustomerDet, BookCart } from '../model/Book';

interface propsType{
    customers: Customer[],
    customerDet: CustomerDet,
    cart: BookCart,
    actions:any,
    history:any
}

interface stateInterface{
    validation:boolean
}

export default class Checkout extends Component<propsType,stateInterface>{
    form:any;
    constructor(props:any){
        super(props);
        this.state={
            validation:false//button gets enabled when this state becomes true, same validation process as add book
        }
    }
    setFormRef=(form: any)=>{
        this.form = form;
    }
    
    validate=()=>{
            let flag=true;
            for(let i=0;i<this.form.elements.length-1;i++){
                if(!this.form.elements[i].checkValidity()){
                    flag=false;
                    break;
                }
            }
            this.setState({
                validation:flag
            })
    
        } 


    render() {
            
            return(
                <>
                    <div className="container form-container">
                        <div className="card blue-grey darken-2">
                            <div className="card-content white-text">
                                <span className="card-title">Enter customer Details</span>
                                <form ref={this.setFormRef}>
                                    <div className="row">
                                        <div className="input-field">
                                            <input id="name" name="name" type="text" className="validate"  required value={this.props.customerDet.name} onChange= { (e) => {
                                                this.props.actions.HandleValueCart(e.target.name,e.target.value);
                                                this.validate();
                                            } 
                                        } />
                                            <label htmlFor="name">Full Name</label>
                                        </div>
                                        <div className="input-field">
                                            <input id="address" name="address" type="text" className="validate" required value={this.props.customerDet.address} onChange= { (e) => {
                                                this.props.actions.HandleValueCart(e.target.name,e.target.value);
                                                this.validate();
                                            } 
                                        } />
                                            <label htmlFor="address">address</label>
                                        </div>
                                        <div className="input-field">
                                            <input id="phone" name="phone" type="text" className="validate" pattern="[0-9]+" required value={this.props.customerDet.phone} onChange= { (e) => {
                                                this.props.actions.HandleValueCart(e.target.name,e.target.value);
                                                this.validate();
                                            } 
                                        } />
                                            <label htmlFor="phone">phone</label>
                                        </div>
                                        
                                    </div>
                                
                                    <div className="card-action">
                                        <button className="waves-effect waves-light btn center-align" disabled={!this.state.validation} type="submit" onClick={
                                            (e)=> {
                                                e.preventDefault();
                                                let customer={
                                                    ...this.props.customerDet,
                                                    cart:this.props.cart
                                                }
                                                this.props.actions.AddCustApi(customer);
                                                this.props.history.push('/checkoutdet');
                                            }}>Checkout <i className="material-icons right">send</i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
            </>
            );
    }
}