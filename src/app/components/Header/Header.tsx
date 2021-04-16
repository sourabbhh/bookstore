import React from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';
export let Header =()=>{
    return(
        <>
        <header>
            <nav>
                <div className="nav-wrapper">
                <a className="brand-logo"><img src={'logo.png'}/><span>BOOKSTORE</span></a>
                <a data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <ul className="right hide-on-med-and-down" role="navigation">
                    <li><NavLink to="/" exact activeClassName="active"><span>Home</span></NavLink></li>
                    <li><NavLink to="/books" activeClassName="active"><span>Books</span></NavLink></li>
                    <li><NavLink to="/cart" activeClassName="active"><span>Cart</span></NavLink></li>
                    <li><NavLink to="/adminbooks" activeClassName="active"><span>Manage Books</span></NavLink></li>
                    <li><NavLink to="/admincusts" activeClassName="active"><span>Manage Orders</span></NavLink></li>
                </ul>
                </div>
            </nav>
        </header>

            <ul className="sidenav" id="mobile-demo" role="navigation">{/*this navigation is for small screen devices, will be visible only in small devices*/}
                <li><NavLink to="/" exact activeClassName="active"><span>Home</span></NavLink></li>
                <li><NavLink to="/books" activeClassName="active"><span>Books</span></NavLink></li>
                <li><NavLink to="/cart" activeClassName="active"><span>Cart</span></NavLink></li>
                <li><NavLink to="/adminbooks" activeClassName="active"><span>Manage Books</span></NavLink></li>
                <li><NavLink to="/admincusts" activeClassName="active"><span>Manage Orders</span></NavLink></li>
            </ul>
        </>
        
       
    );
}