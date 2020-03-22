import React, { Component } from "react";
import api from '../../services/api';
import './styles.css';

export default class Product extends Component {
    state = {
        Product:{},
    };


    async componentDidMount(){

        const { id } = this.props.match.params;
        const response = await api.get(`/products/${id}`);

        this.setState({Product: response.data});

    }
    render(){

        const { Product } = this.state;
        return(
            <div className="product-info">
                <h1>{Product.title}</h1>
                <p>{Product.description}</p>
                <p>
                  URL: <a href={Product.url}>{Product.url}</a>
                </p>
            </div>
        );
    }
};