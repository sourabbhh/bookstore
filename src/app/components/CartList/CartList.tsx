import React from 'react';
import { BookCart } from '../model/Book';
import Button from '../Button/Button';

interface propsType{
    cart:BookCart[],
    checkoutFlag: boolean,//checking if cart list is being used in cart or orderdetails. in orderdetails, quanitity manupulation is not allowed
    actions: any //passing the actions here from upper components as props to increment or decrement quantity in the button component
}

export default function CartList(props:propsType){
    let totalPrice:number=0;
    let totalQuantity:number=0;
    return(
        <>
        <table className="striped highlight centered">
                                        <thead>
                                            <tr>
                                                <th className="hide-on-med-and-down"></th>{/* table is wide for a mobile device, so hiding some of the rows in small devices. Here hiding on tablets and below screen sizes */}
                                                <th>Name</th>
                                                <th className="hide-on-med-and-down">Pages</th> 
                                                {}
                                                <th className="hide-on-small-only">Author</th>
                                                <th className="hide-on-small-only">Category</th>
                                                <th>Discount</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {props.cart.map((book:any, index:number) =>{
                                                // discount is applied here. this task could be done in middleware tool, but there we will have to again run a map/filter function on cart state array. 
                                                let discPer=0;
                                                let discPrice;
                                                if(book.category=='academics'){
                                                    discPer= .5;
                                                }
                                                else if (book.category=='technical'){
                                                    discPer= .2;
                                                }
                                                else{
                                                    discPer= .1;
                                                }
                                                discPrice=+((book.price- book.price*discPer)*book.quantity).toFixed(2);//discount shouldn't give more than one decimal place
                                                totalPrice+=+(discPrice);
                                                totalQuantity+=parseInt(book.quantity);
                                                            return (
                                                                <>
                                                                    
                                                                    <tr>
                                                                        <td className="hide-on-med-and-down" >{index+1}</td>
                                                                        <td>{book.name} </td>
                                                                        <td className="hide-on-med-and-down">{book.pages}  </td>
                                                                        <td className="hide-on-small-only">{book.author} </td> 
                                                                        <td className="hide-on-small-only">{book.category} </td>
                                                                        <td>{discPer*100}%</td>
                                                                        <td>{discPrice}</td>
                                                                        {!props.checkoutFlag && <td>{book.quantity} </td>}
                                                                        {props.checkoutFlag && 
                                                                        <td>{<Button uprops={props} id={book.id} quantity={props.cart.filter((a:BookCart)=>a.id==book.id)[0].quantity} />}</td>
                                                                        }
                                                                    </tr>
                                                                </>
                                                            )
                                                        }
                                                    )
                                            }
                                            <tr>
                                                <td>Total </td>
                                                <td className="hide-on-med-and-down"></td>
                                                <td className="hide-on-med-and-down"></td>
                                                <td className="hide-on-small-only"></td> 
                                                <td className="hide-on-small-only"></td>
                                                <td></td>
                                                <td>Rs {totalPrice}  </td>
                                                <td>{totalQuantity} </td>
                                            </tr>
                                        </tbody>
        </table>
        
        </>
    )
}