import React from 'react';
import './button.css';
interface propsType{
    uprops:any,
    id:number,
    quantity:number
}
export default function Button(props:propsType){
    return(
        <>
        <button className="btn-floating btn-small waves-effect waves-light red" onClick={()=> {
            if(props.quantity==1){//we have to delete the book form the cart array if quantity becomes 0
                props.uprops.actions.DeleteBookCart(props.id);  
            }
            else{
                props.uprops.actions.DecreBook(props.id);
            }
        }
        }> <i className="material-icons">remove</i> </button> 
        
        <span className="quantity">{props.quantity}</span>
        
        <button className="btn-floating btn-small waves-effect waves-light" onClick={()=> {
            props.uprops.actions.IncreBook(props.id);
            }
        } ><i className="material-icons">add</i></button>
        </>
    )

}