import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {ButtonContainer} from "./Button";

export default class Details extends Component {

    addToCart=()=>{
        console.log("Hello from add to cart");
    }
  
    render() {
        return (
            <div>
                <div className="container py-1">
                    {/* title */}
                    <div className="row">
                        <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                            <h1>Google Pixel - Black</h1>
                        </div>
                    </div>
                    {/* end of title */}

                    {/* Product Info */}
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <img src="../img/product-1.png" alt="product" className="img-fluid" />
                        </div>
                        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                            <h2>model: Google Pixel - Black</h2>
                            <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                made by : <span className="text-uppercase">Google</span> 
                            </h4>
                            <h4 className="text-blue">
                                <strong>price: <span>₦</span>10000</strong>
                            </h4> 
                            <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                Some Info about product
                            </p>
                            <p className="text-muted lead text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            {/* buttons */}
                            <div>
                                <Link to="/">
                                    <ButtonContainer>back to products</ButtonContainer> {/*go and import the styled btn*/}
                                </Link>
                                <ButtonContainer cart onClick={this.addToCart}>add to cart</ButtonContainer> {/*if in cart display in cart*/}
                            </div>
                            {/* end of buttons */}
                        </div>
                    </div>
                    {/* end of Product Info */}
                </div>
            </div>
        )
    }
}
