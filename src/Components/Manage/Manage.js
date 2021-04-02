import React, { useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'

const Manage = ({ product }) => {
    const [state,setState]=useState();
    const deleteEvent = id => {
        console.log('remove clicked', id);
        const url = `https://obscure-headland-73829.herokuapp.com/deleteProduct/${id}`;
        fetch(url, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                product.target.parentNode.style.display="none"
            }
        })
    }
    return (
        <tbody>
            <tr>
                <td>{product.name}</td>
                <td>{product.weight}</td>
                <td>${product.price}</td>
                <td><FontAwesomeIcon icon={faEdit}> </FontAwesomeIcon><FontAwesomeIcon icon={faTrashAlt} onClick={() => deleteEvent(product._id)}/></td>
            </tr>
        </tbody>
    );
};

export default Manage;