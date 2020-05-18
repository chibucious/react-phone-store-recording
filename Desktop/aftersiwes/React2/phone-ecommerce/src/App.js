import React, { Component } from 'react';
import { Switch,Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import Details from "./Components/Details";
import Cart from "./Components/Cart";
import Default from "./Components/Default";
import Modal from "./Components/Modal";
import Footer from "./Components/Footer";

class App extends Component{
  render(){
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          {/* Any where you place "/" alone it will still be the current component to appear */}
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
          
        </Switch>
        {/* <ProductList blablabla /> */}

        <Modal />
        <Footer />
      </React.Fragment>
      
    );
  }
}

export default App;
