import React from 'react';
import './Section.css'

const Section = (props) => {
    const { name, id, email, phone, tutionFee, img } = props.student
    return (
        <div className='section'>
            <div className="image-container mb-3">
                <img src={img} alt="" />
            </div>
            <div className="">
                <h3 className="text-secondary">Name:{name}</h3>
                <h3>ID: {id}</h3>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>TutionFee: {tutionFee}</p>
            </div>
            <button className="btn btn-warning text-light" onClick={() => props.eventHandler(props.student)}>
                <span className="mr-2"><i class="fas fa-school"></i></span>
                add to cart</button>
        </div>
    );
};

export default Section;