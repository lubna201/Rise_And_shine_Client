import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Checkout = () => {
    const [checkout,setCheckout]=useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(()=>{
        fetch('http://localhost:4000/lastCheckout/'+ loggedInUser.email)
        .then(res=>res.json())
        .then(data=>setCheckout(data));
    },[])
    return (
        <div>
            <h1>Thank You "{loggedInUser.name}" - "{loggedInUser.email}" for placing your order</h1>
        </div>
    );
};

export default Checkout;