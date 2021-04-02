import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import { Spinner } from 'react-bootstrap';
import './Home.css'

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className="row">
            {
                products.length === 0 && <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            }
            {
                products.map(product => <Product key={product.name} product={product}></Product>)
            }
        </div>
    );
};

export default Home;