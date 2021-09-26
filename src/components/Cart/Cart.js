import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props
    let total = 0
    let name = ''
    for (const student of cart) {
        total = total + student.tutionFee
        name = student.name
    }
    return (
        <div className="cart mt-5">
            <h3 className="text-secondary">Total Student: {props.cart.length}</h3>
            <h3>Total Fee: {total}</h3>
            <h6>name: {name}</h6>

        </div>
    );
};

export default Cart;