import React, { Component } from 'react';
import styled from 'styled-components'
import { ProductConsumer } from '../context'
import { ButtonContainer } from './Buttons'
export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { modalOpen, closeModal } = value;
                    const { img, title, price } = value.modalProduct;
                    if (!modalOpen) {
                        return null;
                    } else {
                        return (
                            <ModalContainer>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitali">
                                                <h5>item added to the cart</h5>
                                                <img src={img} className="img-fluid" alt="product" />
                                                <h5>{title}</h5>
                                                <h5 className="text-muted">price : ${price}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ModalContainer>
                        );
                    }
                }}
            </ProductConsumer>
        );
    }

}


const ModalContainer = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0,3);
display:flex;
align-items:center;
justify-content:center;
#modal{
    background: var(--mainWhite);
}
`;

Nom complet : Fossou Mah Marie-Noëlle
5 Rue du Coustet Ramonville-Saint-Agne 
Toulouse 
Code Postal : 31520
Téléphone : 0649324420