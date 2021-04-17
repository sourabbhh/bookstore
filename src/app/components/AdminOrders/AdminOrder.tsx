import React, {Component} from 'react';
import './adminorder.css';
interface propsType{
    customers: [],
    actions: any,
    history:any
}
export default class AdminOrder extends Component<propsType> {
    constructor(props:any){
        super(props);
        this.props.actions.InitCustsApi();
    }
    render(){
        return(
            <section className="container admin-container">
                <h3>Manage Orders Here</h3>
                <div className="card   blue-grey lighten-4">
                    <div className="card-content">
                    
                    <table className="striped highlight centered">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Details</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.customers.map((cust:any) =>{
                                                    return (
                                                        <>
                                                            
                                                            <tr>
                                                                <td>{cust.id} </td>
                                                                <td>{cust.name}  </td>
                                                                <td>
                                                                    <button className="waves-effect waves-light btn center-align" onClick={
                                                                        ()=>{
                                                                            this.props.actions.InitCust(cust);
                                                                            console.log(this.props.history);
                                                                            this.props.history.push('/checkoutdet');
                                                                        }
                                                                    } > Detailed View</button>
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