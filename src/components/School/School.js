import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Section from '../Section/Section';
import './School.css'
const School = () => {
    const [students, setStudents] = useState([])
    const [cart, setCart] = useState([])
    // uses useEffect for data
    useEffect(() => {
        fetch('./Students.JSON')
            .then(res => res.json())
            .then(data => setStudents(data))

    }, [])

    // add event handler
    const eventHandler = (student) => {
        const newCart = [...cart, student]
        setCart(newCart)
    }
    return (
        <div className="school-container row">
            <div className="section-container col-lg-9 col-md-9">
                {
                    students.map(student => <Section
                        student={student}
                        key={student.id}
                        eventHandler={eventHandler}

                    />
                    )
                }

            </div>
            <div className="cart-container col-lg-3 col-md-3">
                <Cart
                    cart={cart}
                />
            </div>
        </div>
    );
};

export default School;