import React from 'react';
import './cart.css';
import CartList from '../CartList/CartList';

interface propsType{
    cart:[],
    actions:any,
    history:any
}

export default function Cart(props:propsType){
    
    return(
        <div>
            <section className="container cart-book-list">
                <h3 className="center-align">Your Books</h3>
                    {
                     !props.cart.length? (<span>Your Cart is empty</span>)//showing cart table only when there is books in cart
                    :<>
                    <div className="card blue-grey lighten-4">
                        <div className="card-content">
                            <CartList cart={props.cart} checkoutFlag={true} actions={props.actions} />
                        </div>
                        <div className="card-action">
                            <div className="right-align"><button className="waves-effect waves-light btn" onClick={()=>props.history.push('/checkout')} >Checkout</button></div>
                        </div>
                    </div>
                    </>
                    }
            </section>            
        </div>
    )
}