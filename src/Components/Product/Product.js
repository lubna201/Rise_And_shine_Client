import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Button,Card } from 'react-bootstrap';
import './Product.css'


const Product = ({ product }) => {
    const history = useHistory();
    const handleTransport = (name) => {
        history.push(`/buy/${name}`);
    }
    console.log(product);
    return (
        <div className="col-md-4">
            <Card className="m-2  design" border="warning">
                <Card.Img variant="top"src={product.imageURL} />
                <Card.Body>
                    <Card.Title>{product.name}-{product.weight}</Card.Title>
                    <h3>${product.price} <Button variant="warning" onClick={() => handleTransport(product.name)}>Buy Now</Button></h3>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;