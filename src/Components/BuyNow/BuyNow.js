import { Container, Table, Button } from 'react-bootstrap';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './BuyNow.css'
import Checkout from '../Checkout/Checkout';
import { UserContext } from '../../App';

const BuyNow = () => {

    const { _id } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // const [selectedDate, setSelectedDate] = useState({
    //     date: new Date().getDate(),
    //  });
    const [data, setData] = useState({})

    useEffect(() => {
        fetch(`https://obscure-headland-73829.herokuapp.com/products/${_id}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])




    const handleBooking = () => {
        const newBooking = { ...loggedInUser, ...data };
        fetch('https://obscure-headland-73829.herokuapp.com/checkout', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(newBooking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        if (document.getElementById("order")) {
            document.getElementById("order").style.display = "block";
        }

    }

    return (
        <div className="back">
            <Container className="detail">
                <h1>Checkout</h1>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>

                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>{_id}</td>
                            <td>1</td>
                            <td>$234</td>
                        </tr>
                        <tr>

                            <td colSpan="2">Total</td>
                            <td>$234</td>
                        </tr>
                    </tbody>
                </Table>
                <Button variant="success" onClick={handleBooking}>Checkout</Button>
                <div id="order">
                    <Checkout></Checkout>
                </div>
            </Container>
        </div>
    );
};

export default BuyNow;