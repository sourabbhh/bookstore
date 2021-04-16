import * as material from 'materialize-css';
import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import './home.css';


export class Home extends Component<any>{
    componentDidMount(){
    var elems = document.querySelectorAll('.carousel');
    var instances = material.Carousel.init(elems);//to initiate the carousel animation provided by materialize css
    }

    render(){
        return(
            <>
            <div className="carousel">
                <NavLink to="/books" className="carousel-item" ><img src={'1.jpg'}/></NavLink>
                <NavLink to="/books" className="carousel-item" ><img src={'2.jpg'}/></NavLink>
                <NavLink to="/books" className="carousel-item" ><img src={'3.jpg'}/></NavLink>
                <NavLink to="/books" className="carousel-item" ><img src={'4.jpg'}/></NavLink>
                <NavLink to="/books" className="carousel-item" ><img src={'5.jpg'}/></NavLink>
            </div>
            <div className="container">
                <h5 className="center-align">Welcome to <strong>BOOKSTORE</strong>, best place for buying books.</h5>
                <div className="button-container center-align">
                    <NavLink to="/books" className="waves-effect waves-light btn center-align">Explore</NavLink>
                </div>
            </div>
            </>     
        );
    }
    
}