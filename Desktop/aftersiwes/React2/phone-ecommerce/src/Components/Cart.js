import React, { Component } from 'react';
import Title from "./Title";
import {Link} from "react-router-dom";


export default class Cart extends Component {
    ccount = 1;
    cprice = 10000;
    csubtotal = this.ccount * this.cprice;
    ctempTax = this.csubtotal * 0.1;
    ccartTax = parseFloat((this.ctempTax).toFixed(2));
    ctotal = this.csubtotal + this.ccartTax;

    // Testing for another cart item
    canothercount = 1;
    canotherprice = 16000;
    canothersubtotal = this.canothercount * this.canotherprice;
    canothertempTax = this.canothersubtotal * 0.1;
    canothercartTax = parseFloat((this.canothertempTax).toFixed(2));
    canothertotal = this.canothersubtotal + this.canothercartTax;

    state={
        cartTotal: 0,
        cartTax: this.ccartTax,
        count: this.ccount,
        price: this.cprice,
        subtotal: this.csubtotal,
        total: this.ctotal,

        anothercartTax: this.canothercartTax,
        anothercount: this.canothercount,
        anotherprice: this.canotherprice,
        anothersubtotal: this.canothersubtotal,
        anothertotal: this.canothertotal,
    }


    increment =()=>{

        // const newsubtotal = this.state.subtotal * this.state.count;
        const newcount = this.state.count + 1;
        const newsubtotal = newcount * this.state.price;
        const newtotal = newsubtotal + this.state.cartTax;

        this.setState({
            count: newcount,
            subtotal: newsubtotal,
            total: newtotal
        })
    }

    anotherincrement =()=>{

        const anothernewcount = this.state.anothercount + 1;
        const anothernewsubtotal = anothernewcount * this.state.anotherprice;
        const anothernewtotal = anothernewsubtotal + this.state.anothercartTax;
        
        this.setState({
            anothercount: anothernewcount,
            anothersubtotal: anothernewsubtotal,
            anothertotal: anothernewtotal
        })
    }


    decrement =()=>{
        // this.addTotals();
        const newcount = this.state.count - 1;

        if(newcount < 1){
            return false;
        }else{
            const newsubtotal = newcount * this.state.price;
            const newtotal = newsubtotal + this.state.cartTax;
            this.setState({
                count: newcount,
                subtotal: newsubtotal,
                total: newtotal,
            })
        }
    }


    anotherdecrement =()=>{
        const anothernewcount = this.state.anothercount - 1;
        if(anothernewcount < 1){
            return false;
        }else{
            const anothernewsubtotal = anothernewcount * this.state.anotherprice;
            const anothernewtotal = anothernewsubtotal + this.state.anothercartTax;
            this.setState({
                anothercount: anothernewcount,
                anothersubtotal: anothernewsubtotal,
                anothertotal: anothernewtotal,
            })

        }
    }
    

    removeItem =()=>{
        alert("Remove just this");
    }
    clearCart =()=>{
        alert("Clear all items");
    }
    // addTotals =()=>{
    //     this.setState({
        
    //     })
    // }

    render() {
        return (
            <div>
                <section>
                    {/* <Title name="Your" title="Cart is Currently Empty" /> */}
                    <Title name="Your" title="Cart" />
                </section>
                <div className="container-fluid text-center d-lg-block">
                    <div className="d-lg-block d-md-none d-sm-none d-none">
                    <div className="row">
                        <div className="col-10 mx-auto col-lg-2">
                            <p className="text-uppercase">products</p>
                        </div>
                        <div className="col-10 mx-auto col-lg-2">
                            <p className="text-uppercase">name of product</p>
                        </div>
                        <div className="col-10 mx-auto col-lg-2">
                            <p className="text-uppercase">price</p>
                        </div>
                        <div className="col-10 mx-auto col-lg-2">
                            <p className="text-uppercase">quantity</p>
                        </div>
                        <div className="col-10 mx-auto col-lg-2">
                            <p className="text-uppercase">remove</p>
                        </div>
                        <div className="col-10 mx-auto col-lg-2">
                            <p className="text-uppercase">total</p>
                        </div>
                    </div>
                    </div>

                    <div className="row my-2 text-capitalize text-center">
                        <div className="col-10 mx-auto col-lg-2">
                            <img src="../img/product-1.png" style={{width:'5rem',height:'5rem'}} className="img-fluid" 
                            alt="product" />
                        </div>
                        <div className="col-10 mx-auto col-lg-2">
                            <span className="d-lg-none">product : </span>Google Pixel - Black
                        </div>
                        <div className="col-10 mx-auto col-lg-2">
                            <span className="d-lg-none">price : ₦</span>{this.state.price}
                        </div>
                        <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                            <div className="d-flex justify-content-center">
                                <div>
                                    <span className="btn btn-black mx-1" onClick={this.decrement}>-</span>
                                    <span className="btn btn-black mx-1">{this.state.count}</span>
                                    <span className="btn btn-black mx-1" onClick={this.increment}>+</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-10 mx-auto col-lg-2">
                            <div className="cart-icon" onClick={this.removeItem}>
                                <i className="fa fa-trash" />
                            </div>
                        </div>
                        <div className="col-10 mx-auto col-lg-2">
                            <strong> item total : ₦ {this.state.subtotal}</strong>
                        </div>
                    </div>


                    {/* <div className="row my-2 text-capitalize text-center">
                        <div className="col-10 mx-auto col-lg-2">
                            <img src="../img/product-1.png" style={{width:'5rem',height:'5rem'}} className="img-fluid" 
                            alt="product" />
                        </div>
                        <div className="col-10 mx-auto col-lg-2">
                            <span className="d-lg-none">product : </span>Google Pixel - Black
                        </div>
                        <div className="col-10 mx-auto col-lg-2">
                            <span className="d-lg-none">price : ₦</span>{this.state.anotherprice}
                        </div>
                        <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                            <div className="d-flex justify-content-center">
                                <div>
                                    <span className="btn btn-black mx-1" onClick={this.anotherdecrement}>-</span>
                                    <span className="btn btn-black mx-1">{this.state.anothercount}</span>
                                    <span className="btn btn-black mx-1" onClick={this.anotherincrement}>+</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-10 mx-auto col-lg-2">
                            <div className="cart-icon" onClick={this.removeItem}>
                                <i className="fa fa-trash" />
                            </div>
                        </div>
                        <div className="col-10 mx-auto col-lg-2">
                            <strong> item total : ₦ {this.state.anothersubtotal}</strong>
                        </div>
                    </div> */}
                </div>




            


                {/* Cart Total */}
                <div className="container">
                    <div className="row">
                        <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                            <Link to="/">
                                <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={this.clearCart}>
                                    Clear Cart
                                </button>
                            </Link>
                            <h5>
                                <span className="text-title">Subtotal :</span>
                                <strong>₦ {this.state.subtotal}</strong>
                            </h5>
                            <h5>
                                <span className="text-title">Tax :</span>
                                <strong>₦ {this.state.cartTax}</strong>
                            </h5>
                            <h5>
                                <span className="text-title">Total :</span>
                                <strong>₦ {this.state.total}</strong>
                            </h5>
                        </div>
                    </div>
                </div>
                {/* end of Card Total */}
            </div>
        )
    }
}
