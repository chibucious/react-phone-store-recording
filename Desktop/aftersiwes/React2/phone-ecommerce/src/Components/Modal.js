import React, { Component } from 'react';
import styled from "styled-components";
import {ButtonContainer} from "./Button";
import {Link} from "react-router-dom";

export default class Modal extends Component {

    closeModal=()=>{
        document.getElementById('container4modal').style.display="none";
    }

    render() {
        return (
            <div id="container4modal">
                <ModalContainer>
                    <div className="container">
                        <div className="row">
                            <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                <h5>item added to cart</h5>
                                <img src="../img/product-1.png" className="img-fluid" alt="product" />
                                <h5>Google Pixel - Black</h5>
                                <h5 className="text-muted">price : ₦ 10000</h5>
                                <Link to="/">
                                    <ButtonContainer onClick={this.closeModal}>
                                        Back
                                    </ButtonContainer>
                                </Link>
                                <Link to="/cart">
                                    <ButtonContainer cart onClick={this.closeModal}>
                                        Go to Cart
                                    </ButtonContainer>
                                </Link>
                            </div>
                        </div>
                    </div>
                </ModalContainer>
            </div>
        )
    }
}

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    #modal{
        background: var(--mainWhite);
    }
`;
