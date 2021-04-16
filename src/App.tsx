import React, { Component, Fragment } from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./App.css";
import { Header } from "./app/components/Header/Header";
import { Home } from "./app/components/Home/Home";
import { Switch, Route } from "react-router";
import ChangeBookCont from "./app/components/ChangeBook/container/ChangeBookCont";
import BooksCont from "./app/components/Books/container/BooksCont";
import CartCont from "./app/components/Cart/container/CartCont";
import AdminBooksCont from "./app/components/AdminBooks/container/AdminBooksCont";
import { Footer } from "./app/components/Footer/Footer";
import CheckoutCont from "./app/components/Checkout/container/CheckoutCont";
import OrderDetailsCont from "./app/components/OrderDetails/container/OrderDetailsCont";
import AdminOrderCont from "./app/components/AdminOrders/container/AdminOrderCont";
import * as material from "materialize-css";

class App extends Component {
  componentDidMount() {
    var elems = document.querySelectorAll(".sidenav");
    var instances = material.Sidenav.init(elems); //to init the materialize side navigation which will come from left side on clicking the menu button
  }
  render() {
    return (
      <>
        <Header />
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/bookform" component={ChangeBookCont} />
            <Route path="/books" component={BooksCont} />
            <Route path="/cart" component={CartCont} />
            <Route path="/adminbooks" component={AdminBooksCont} />
            <Route path="/admincusts" component={AdminOrderCont} />
            <Route path="/checkout" component={CheckoutCont} />
            <Route path="/checkoutdet" component={OrderDetailsCont} />
          </Switch>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
