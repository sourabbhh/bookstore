import React, {Component} from 'react';
import './adminbooks.css';

export default class AdminBooks extends Component<any> {
    constructor(props:any){
        super(props);
        this.props.actions.InitBooksApi();
    }
    render(){
        return(
            <section className="container admin-container">
                <h3>Manage Books Here</h3>
                <div className="card   blue-grey lighten-4">
                    <div className="card-content">
                    
                    <button className="waves-effect waves-light btn center-align" onClick={()=>{
                                                                this.props.actions.EditBookInit({},-1);
                                                                this.props.history.push('/bookform');
                                                                }
                                                            }>Create New Book
                    </button>
                    <table className="striped highlight centered">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Pages</th>
                                        <th>Price</th>
                                        <th>Author</th>
                                        <th>Category</th>
                                        <th></th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.books.map((book:any, index:number) =>{
                                                    return (
                                                        <>
                                                            
                                                            <tr>
                                                                <td>{book.name} </td>
                                                                <td>{book.pages}  </td>
                                                                <td>{book.price}  </td>
                                                                <td>{book.author} </td> 
                                                                <td>{book.category} </td>
                                                                <td>
                                                                <button className="waves-effect waves-light btn center-align" onClick={()=>{
                                                                    this.props.actions.EditBookInit(book,index);
                                                                    this.props.history.push('/bookform');
                                                                    }
                                                                }>Edit</button>
                                                                <button className="waves-effect waves-light btn center-align" onClick={()=>{
                                                                    this.props.actions.DeleteBookApi(book.id,index);
                                                                    }
                                                                }>Delete</button>
                                                                </td>
                                                            </tr>
                                                        </>
                                                    )
                                                }
                                            )
                                    }
                                </tbody>
                            </table>
                
                    </div>
                    <div className="card-action">
                    </div>
                </div>            
                        
            </section>
        )
    }
}