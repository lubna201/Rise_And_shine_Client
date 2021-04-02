import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Manage from '../Manage/Manage';
import './AddProduct.css'

const AddProduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const onSubmit = data => {
        const productData = {
            name: data.name,
            weight: data.weight,
            price: data.price,
            imageURL: imageURL
        };
        const url = `http://localhost:4000/addProducts`;
        console.log('product data', productData);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => console.log('server side response', res))
    };
    const handleImageUpload = product => {
        console.log(product.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'a933000ef6755dd3610166024f14e3c7')
        imageData.append('image', product.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    function myFunction() {
        console.log('Clicked search');
        if (document.getElementById("addproduct") && document.getElementById("table")) {
            document.getElementById("table").style.display = "block";
            document.getElementById("addproduct").style.display = "none";
        }
    }
    function myFunction1() {
        console.log('Clicked search');
        if (document.getElementById("addProducts") && document.getElementById("table")) {
            document.getElementById("table").style.display = "none";
            document.getElementById("addproduct").style.display = "block";
        }
    }
    

    return (
        <div>
            <div class="sidenav">
                <a href="#addproduct" onClick={myFunction}>Manage Product</a>
                <a href="#addproduct" onClick={myFunction1}>Add Product</a>
                <a href="#edit">Edit Product</a>
            </div>
            <div class="main" id="addProducts">
                <div id="addproduct">
                    <h1>Add Product</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label >Product Name: </label>
                        <br />
                        <input name="name" placeholder="Enter Name" ref={register} />
                        <br />
                        <label >Weight: </label>
                        <br />
                        <input name="weight" placeholder="Enter Weight" ref={register} />
                        <br />
                        <label >Add Price :</label>
                        <br />
                        <input name="price" placeholder="Enter Price" ref={register} />
                        <br />
                        <label >Add Photo :</label>
                        <br />
                        <input name="exampleRequired" type="file" onChange={handleImageUpload} />
                        <br />


                        <input type="submit" name="Save" className="submitbtn" />
                    </form>
                </div>
                <Table id="table">

                    <tr>
                        <th>Product Name</th>
                        <th>Weight</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>

                    {
                        products.map(product => <Manage key={product.name} product={product}></Manage>)
                    }
                </Table>
            </div>

        </div>
    );
};

export default AddProduct;