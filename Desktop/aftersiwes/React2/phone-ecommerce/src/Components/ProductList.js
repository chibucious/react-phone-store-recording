import React, { Component } from 'react';
import Product from "./Product";
import Title from "./Title";
import {storeProducts, detailProduct} from "../data";
import {Link} from "react-router-dom";
import styled from 'styled-components';
import Modal from "./Modal";

export default class ProductList extends Component {
    state={
        modalOpen: true,
        modalProduct: detailProduct,

    };

    // openModal =id=>{
        // const product = this.getItem(id);
    openModal =()=>{
        document.getElementById('container4modal').style.display="block";
        
    }
  
    render() {
        return (
            <ProductWrapper>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products" />
                        <div className="row">
                            <div className="col-lg-3 col-md-6 mx-auto my-3">
                                <div className="card">
                                    <div className="img-container p-5" onClick={()=>console.log('you clicked me on the image container')}>
                                        <Link to="/details">
                                            <img src="../img/product-1.png" alt="product" className="card-img-top" />
                                        </Link>
                                        <button className="cart-btn" onClick={this.openModal}>
                                            <p className="text-capitalize mb-0 incart">In Cart</p>
                                            <i className="fa fa-cart-plus" />
                                        </button>
                                    </div>
                                    {/* card footer */}
                                    <div className="card-footer d-flex justify-content-between">
                                        <p className="align-self-center mb-0">Google Pixel - Black</p>
                                        <h5 className="text-blue font-italic mb-0">
                                            <span className="mr-1">₦</span>10000                                       
                                        </h5>                                    
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mx-auto my-3">
                                <div className="card">
                                    <div className="img-container p-5" onClick={()=>console.log('you clicked me on the image container')}>
                                        <Link to="/details">
                                            <img src="../img/product-2.png" alt="product" className="card-img-top" />
                                        </Link>
                                        <button className="cart-btn" onClick={this.openModal}>
                                            <p className="text-capitalize mb-0 incart">In Cart</p>
                                            <i className="fa fa-cart-plus" />
                                        </button>
                                    </div>
                                    {/* card footer */}
                                    <div className="card-footer d-flex justify-content-between">
                                        <p className="align-self-center mb-0">Samsung S7</p>
                                        <h5 className="text-blue font-italic mb-0">
                                            <span className="mr-1">₦</span>16000                                       
                                        </h5>                                    
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mx-auto my-3">
                                <div className="card">
                                    <div className="img-container p-5" onClick={()=>console.log('you clicked me on the image container')}>
                                        <Link to="/details">
                                            <img src="../img/product-3.png" alt="product" className="card-img-top" />
                                        </Link>
                                        <button className="cart-btn" onClick={this.openModal}>
                                            <p className="text-capitalize mb-0 incart">In Cart</p>
                                            <i className="fa fa-cart-plus" />
                                        </button>
                                    </div>
                                    {/* card footer */}
                                    <div className="card-footer d-flex justify-content-between">
                                        <p className="align-self-center mb-0">HTC 10 - Black</p>
                                        <h5 className="text-blue font-italic mb-0">
                                            <span className="mr-1">₦</span>8000                                       
                                        </h5>                                    
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mx-auto my-3">
                                <div className="card">
                                    <div className="img-container p-5" onClick={()=>console.log('you clicked me on the image container')}>
                                        <Link to="/details">
                                            <img src="../img/product-4.png" alt="product" className="card-img-top" />
                                        </Link>
                                        <button className="cart-btn" onClick={this.openModal}>
                                            <p className="text-capitalize mb-0 incart">In Cart</p>
                                            <i className="fa fa-cart-plus" />
                                        </button>
                                    </div>
                                    {/* card footer */}
                                    <div className="card-footer d-flex justify-content-between">
                                        <p className="align-self-center mb-0">HTC 10 - White</p>
                                        <h5 className="text-blue font-italic mb-0">
                                            <span className="mr-1">₦</span>18000                                       
                                        </h5>                                    
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mx-auto my-3">
                                <div className="card">
                                    <div className="img-container p-5" onClick={()=>console.log('you clicked me on the image container')}>
                                        <Link to="/details">
                                            <img src="../img/product-5.png" alt="product" className="card-img-top" />
                                        </Link>
                                        <button className="cart-btn" onClick={this.openModal}>
                                            <p className="text-capitalize mb-0 incart">In Cart</p>
                                            <i className="fa fa-cart-plus" />
                                        </button>
                                    </div>
                                    {/* card footer */}
                                    <div className="card-footer d-flex justify-content-between">
                                        <p className="align-self-center mb-0">HTC Desire 626s</p>
                                        <h5 className="text-blue font-italic mb-0">
                                            <span className="mr-1">₦</span>24000                                       
                                        </h5>                                    
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mx-auto my-3">
                                <div className="card">
                                    <div className="img-container p-5" onClick={()=>console.log('you clicked me on the image container')}>
                                        <Link to="/details">
                                            <img src="../img/product-6.png" alt="product" className="card-img-top" />
                                        </Link>
                                        <button className="cart-btn" onClick={this.openModal}>
                                            <p className="text-capitalize mb-0 incart">In Cart</p>
                                            <i className="fa fa-cart-plus" />
                                        </button>
                                    </div>
                                    {/* card footer */}
                                    <div className="card-footer d-flex justify-content-between">
                                        <p className="align-self-center mb-0">Vintage Iphone</p>
                                        <h5 className="text-blue font-italic mb-0">
                                            <span className="mr-1">₦</span>17000                                       
                                        </h5>                                    
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mx-auto my-3">
                                <div className="card">
                                    <div className="img-container p-5" onClick={()=>console.log('you clicked me on the image container')}>
                                        <Link to="/details">
                                            <img src="../img/product-7.png" alt="product" className="card-img-top" />
                                        </Link>
                                        <button className="cart-btn" onClick={this.openModal}>
                                            <p className="text-capitalize mb-0 incart">In Cart</p>
                                            <i className="fa fa-cart-plus" />
                                        </button>
                                    </div>
                                    {/* card footer */}
                                    <div className="card-footer d-flex justify-content-between">
                                        <p className="align-self-center mb-0">Iphone 7</p>
                                        <h5 className="text-blue font-italic mb-0">
                                            <span className="mr-1">₦</span>30000                                       
                                        </h5>                                    
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mx-auto my-3">
                                <div className="card">
                                    <div className="img-container p-5" onClick={()=>console.log('you clicked me on the image container')}>
                                        <Link to="/details">
                                            <img src="../img/product-8.png" alt="product" className="card-img-top" />
                                        </Link>
                                        <button className="cart-btn" onClick={this.openModal}>
                                            <p className="text-capitalize mb-0 incart">In Cart</p>
                                            <i className="fa fa-cart-plus" />
                                        </button>
                                    </div>
                                    {/* card footer */}
                                    <div className="card-footer d-flex justify-content-between">
                                        <p className="align-self-center mb-0">Smashed Iphone</p>
                                        <h5 className="text-blue font-italic mb-0">
                                            <span className="mr-1">₦</span>2000                                       
                                        </h5>                                    
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </ProductWrapper>
        )
    }
}

const ProductWrapper = styled.div`
    .incart{
        display:none;
    }
    .card{
        border-color: transparent;
        transition: all 1s linear;
    }
    .card-footer{
        background: transparent;
        border-top: transaprent;
        transition: all 1s linear;
    }

    .card:hover{
        border: 0.04rem solid rgba(0,0,0,0.2);
        box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);  
    }
    .card:hover .card-footer{
        background: rgba(247, 247, 247);
    }
    
    .img-container{
        position: relative;
        overflow: hidden;
    }
    .img-container:hover .card-img-top{
        transform: scale(1.2);
    }
    .card-img-top{
        transition: all 1s linear;
    }
    .cart-btn{
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 0.2rem 0.4rem;
        background: var(--lightBlue);
        color: var(--mainWhite);
        border: none;
        font-size: 1.4rem;
        border-radius: 0.5rem 0 0 0;
        transform: translate(100%, 100%);
        transition: all 1s linear;
    }
    .img-container:hover .cart-btn{
        transform: translate(0, 0);
        // transition: all 1s linear;
    }
    .cart-btn:hover{
        color: var(--mainBlue);
        cursor: pointer;
    }
`;

const ModalContainer = styled.div`

`;
