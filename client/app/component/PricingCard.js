'use client';

import React from 'react';
import '../styles/PricingCard.css';

import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const PricingCard = ({ title, price, features, isBestForLearning, discount }) => {


    const handleBuy = async () => {
        console.log(`Bought ${title} plan for $${price}`);
        try {
            // const userData = JSON.parse(localStorage.getItem('user'));
            // const UID = userData ? userData.UID : null; // Extract UID from user data
            // Retrieve token from localStorage
            const token = localStorage.getItem('token');

            const stripe = await stripePromise;
            if (!stripe) {
                console.error("Stripe has not been initialized");
                return;
            }




            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/payment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
                },
                body: JSON.stringify({ title, price }),
            });



            const session = await response.json();
            if (session.error) {
                console.error("Error creating checkout session:", session.error);
                return;
            }
            const result = await stripe.redirectToCheckout({
                sessionId: session.id
            });
            if (result.error) {
                console.error("Payment error:", result.error.message);
            }
        } catch (error) {
            console.error("Payment processing error:", error.message);
        }
    };


    return (
        <div className={`  customcard3 ${isBestForLearning ? 'bg-dark text-white' : 'bg-dark text-white'}`}>
            <div className=" mt-2 card-header text-center">
                {discount && <span className="discount-badge">{discount}% OFF</span>}
                <h4 className="my-0 font-weight-normal">{title}</h4>
                {isBestForLearning && <span className="most-popular-badge">Most Popular</span>}
                {isBestForLearning && <span className="best-for-learning-badge">Best for Learning</span>}
            </div>
            <hr></hr>

            <div className="card-body d-flex flex-column justify-content-between text-center">
                <div>
                    <h1 className="card-title pricing-card-title">
                        ₹{price} <small className="">/ year</small>
                    </h1>
                </div>
                <div>
                    <ul className="list-unstyled mt-3 mb-4">
                        {features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>

                <div className="text-center">
                    <button
                        type="button"
                        className=" text-white btn btn-lg btn-block btn-outline-light "
                        onClick={handleBuy}
                    >
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PricingCard;
