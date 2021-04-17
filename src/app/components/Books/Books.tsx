import React, { Component } from 'react';
import './books.css';
import { BookCart } from '../model/Book';
import Button from '../Button/Button';

export interface propsType{
    books: [],
    book: any,
    cart:BookCart[],
    actions: any,
    history:any
}

export default class Books extends Component<propsType>{
    constructor(props:propsType){
        super(props);
        this.props.actions.InitBooksApi();
    }
    
    render(){
        return(
            <section className="container book-list">
                <h3 className="center-align">Our Awesome Books</h3>
                <div className="right-align"><button className="waves-effect waves-light btn" onClick={()=>this.props.history.push('/cart')} >Go to Cart</button></div>
                <div className="row books-row">
                        {this.props.books.map((book:any) =>{
                                    return (
                                    <>
                                    <div className="col s12 m6">
                                      <div className="card blue-grey darken-3 white-text hoverable">
                                        <div className="card-content">
                                          <span className="card-title">{book.name}</span>
                                          <div className="row">
                                            <div className="col s4">
                                                Pages:
                                            </div>
                                            <div className="col s8">
                                                {book.pages}
                                            </div>
                                          </div>
                                          <div className="row">
                                            <div className="col s4">
                                                Price:
                                            </div>
                                            <div className="col s8">
                                                {book.price}
                                            </div>
                                          </div>
                                          <div className="row">
                                            <div className="col s4">
                                                Author:
                                            </div>
                                            <div className="col s8">
                                                {book.author}
                                            </div>
                                          </div>
                                          <div className="row">
                                            <div className="col s4">
                                                Category:
                                            </div>
                                            <div className="col s8 capitalized">
                                                {book.category}
                                            </div>
                                          </div>
                                        </div>
                                        
                                        <div className="card-action">
                                            {
                                                !this.props.cart.length && (<a className="AddCartEmpty" onClick={()=>{//checking if cart has any book
                                                    
                                                    const tempBookCart: BookCart={
                                                        ...book,
                                                        quantity: 1
                                                    }
                                                  this.props.actions.AddBookCart(tempBookCart)
                                                  }}>Add to cart</a>)
                                                
                                            }
                                            <div className="ButtonCart">
                                            {
                                                this.props.cart.length>0 && (
                                                    this.props.cart.filter((lucky:BookCart)=>lucky.id==book.id).length>0?//if particular book is present, button component will be visible corresponding to the book, otherwise "add to cart" option will be shown
                                                    <Button uprops={this.props} id={book.id} quantity={this.props.cart.filter((lucky:BookCart)=>lucky.id==book.id)[0].quantity} /> //passing props to button component, id of present book amd the quantity of that particular book
                                                    :<a onClick={()=>{
                                                        const tempBookCart: BookCart={
                                                            ...book,
                                                            quantity: 1
                                                        }
                                                      this.props.actions.AddBookCart(tempBookCart)
                                                      }}>Add to cart</a>
                                                )   
                                            }
                                            </div>
                                            

                                            
                                        </div>
                                      </div>
                                    </div>
                                    </>
                                    )
                                }
                               
                            )
                        }
                        
                        
                    </div>
                    <div className="right-align"><button className="waves-effect waves-light btn" onClick={()=>this.props.history.push('/cart')} >Go to Cart</button></div>
            </section>
        )
    }
}