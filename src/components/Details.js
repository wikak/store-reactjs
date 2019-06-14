import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { ButtonContainer } from './Buttons'
import { ProductConsumer } from '../context';
import { identifier } from '@babel/types';
export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const { id, company, img, info, price, title, inCart } =
                        value.detailProduct;
                    return (
                        <div className="container py-5">
                            {/** title */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/* end title */}
                        </div>
                    )

                }}
            </ProductConsumer>
        );
    }
}