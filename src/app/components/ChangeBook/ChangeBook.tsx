//form to edit or add book
import React, { Component } from 'react';
import './changebook.css';
import * as material from 'materialize-css';
import { Book } from '../model/Book';

interface propsType{
    books: [],
    book: Book,
    index: number,
    actions: any,
    history:any
}

interface stateInterface{
    validation:boolean
}

export default class ChangeBook extends Component<propsType,stateInterface> {
    form:any;
    constructor(props:any){
        super(props);
        this.state={
            validation:false//button gets enabled when this state becomes true
        };
        

    }
    componentDidMount(){
        if(this.props.book.name!=undefined){
            material.updateTextFields();//in materializecss, text and placeholder gets overlapped for dynamic data. so checking if book variable is empty or not, if not, using this function solves the problem.   
        }
        
    }

    setFormRef=(form: any)=>{
        this.form = form;//reference to form
    }

    validate=()=>{
        let flag=true;
        for(let i=0;i<this.form.elements.length-1;i++){//checking for all elements of form in forms collection for html5 validation
            if(!this.form.elements[i].checkValidity()){
                flag=false;
                break;
            }
        }
        this.setState({
            validation:flag//setting state if validation is true or false
        })

    }
    
    render(){    
        return(
            <>
                <div className="container form-container">
                    <div className="card blue-grey darken-2">
                        <div className="card-content white-text">
                            <span className="card-title">Enter Book Details</span>
                            <form ref= {this.setFormRef}>
                                <div className="row">
                                    <div className="input-field">
                                        <input id="name" name="name" type="text" className="validate"  required 
                                        value={this.props.book.name} 
                                        onChange= { (e) => {this.props.actions.HandleValue(e.target.name,e.target.value);
                                            this.validate();
                                        } }
                                        
                                        
                                        />
                                        <label htmlFor="name">Book Name</label>
                                    </div>
                                    <div className="input-field">
                                        <input id="pages" name="pages" type="text" className="validate" pattern="[0-9]+" required value={this.props.book.pages} onChange= { (e) => {
                                            this.props.actions.HandleValue(e.target.name,e.target.value);
                                            this.validate();
                                            } 
                                        } 
                                        
                                        />
                                        <label htmlFor="pages">Pages</label>
                                    </div>
                                    <div className="input-field">
                                        <input id="price" name="price" type="text" className="validate" pattern="[0-9]+" required value={this.props.book.price} onChange= { (e) => {
                                            this.props.actions.HandleValue(e.target.name,e.target.value);
                                            this.validate();
                                            }
                                        } 
                                        
                                        />
                                        <label htmlFor="price">Price</label>
                                    </div>
                                    <div className="input-field">
                                        <input id="author" name="author" type="text" className="validate" required value={this.props.book.author} onChange= { (e) => {
                                            this.props.actions.HandleValue(e.target.name,e.target.value);
                                            this.validate();
                                            }
                                        } 
                                        
                                        />
                                        <label htmlFor="author">Author</label>
                                    </div>
                                    
                                    <p>
                                        <label>
                                            <input name="group1" type="radio" value="academics" checked={this.props.book.category==='academics'} onChange={(e)=> {
                                                this.props.actions.HandleValue('category',e.target.value);
                                                this.validate();
                                            }
                                        } required />
                                            <span>Academics</span>
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            <input name="group1" type="radio"  value="technical" checked={this.props.book.category==='technical'} onChange={(e)=> {
                                                this.props.actions.HandleValue('category',e.target.value);
                                                this.validate();
                                            }
                                        } />
                                            <span>Technical</span>
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            <input name="group1" type="radio"  value="children" checked={this.props.book.category==='children'} onChange={(e)=> {
                                                this.props.actions.HandleValue('category',e.target.value);
                                                this.validate();
                                            }
                                        } />
                                            <span>Children</span>
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            <input name="group1" type="radio"  value="others" checked={this.props.book.category==='others'} onChange={(e)=> {
                                                this.props.actions.HandleValue('category',e.target.value);
                                                this.validate();
                                            }
                                        } />
                                            <span>Others</span>
                                        </label>
                                    </p>
                                </div>
                            
                                <div className="card-action">
                                    <button className="waves-effect waves-light btn center-align" type="submit" disabled={!this.state.validation} onClick={
                                        (e)=> {
                                            e.preventDefault();
                                            this.props.actions.AddBookApi(this.props.book,this.props.book.id, this.props.index);
                                            this.props.history.push('/adminbooks');
                                        }}>Add <i className="material-icons right">send</i>
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