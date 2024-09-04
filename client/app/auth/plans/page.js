
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
// import styles from "./page.module.css";
import { loadStripe } from '@stripe/stripe-js';
import Header from '@/app/component/Navbar';
import PricingSection from '@/app/component/PricingSection';


import '../plans/plans.css'
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

// console.log("dfnfnf",NEXT_PUBLIC_STRIPE_PUBLIC_KEY);


// const PricingCard = ({ title, price, onBuy }) => (
//   <div className="card m-0" style={{width: '18rem'}}>
//     <div className="card-body">
//       <h5 className="card-title text-center">{title}</h5>
//       <p className="card-text text-center display-4">rupee{price}</p>
//       <button className="btn btn-primary w-100" onClick={() => onBuy(title, price)}>
//         Buy
//       </button>
//     </div>
//   </div>
// );


export default function Plans() {
  const router = useRouter();

  const handleBuy = async (title, price) => {
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
    

  //   const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/payment`, {
      
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({title,price,UID}),
  
  // });
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

    <>
    <Header/>
    {/* <main >    
        <div className="allPlansCard flex justify-center space-x-4">
          <PricingCard title="Silver" price={200} onBuy={handleBuy} />
          <PricingCard title="Gold" price={400} onBuy={handleBuy} />
       </div>
    </main> */}



<div className='main-container '>
    <div className='mainheading text-white'>
      <h1 className='subheading fw-bold text-center m-auto'>Level up your learning. Level up your career.</h1>
    </div>
    <div className='features m-auto '>
      <span className='text-white col-md-4'><i className="fa-brands fa-readme"></i> 100+ Courses</span>
      <span className='text-white col-md-4'><i className="fa-solid fa-users"></i> 100+ Learners</span>
      <span className='text-white col-md-4'><i className="fa-solid fa-microchip"></i> AI-Powered Learning</span>
    </div>
    <PricingSection />
    <section className="features-section text-white">
      <h2 className="text-gray fw-bold text-center mt-3">Why Shiksha Mitra?</h2>
      <hr />
      <div className="features-grid">
        <div className="feature-card">
          <i className="fa-solid fa-chalkboard"></i>
          <h3 className="feature-title">Learn Interactively</h3>
          <p className="feature-description text-white">
            Our courses include built-in coding playgrounds that let you learn new things without any setup.
          </p>
        </div>
        <div className="feature-card">
          <i className="fa-solid fa-book-atlas"></i>
          <h3 className="feature-title">Learn Faster</h3>
          <p className="feature-description text-white">
            All of our learning products are text-based. You get to learn at your own pace. No pauses.
          </p>
        </div>
        <div className="feature-card">
          <i className="fa-solid fa-section"></i>
          <h3 className="feature-title">Personalize Your Learning</h3>
          <p className="feature-description text-white">
            Achieve your goals faster with a path designed just for you. Personalized Paths are customized and focused on your individual learning needs and career goals. Unlock your potential with tailored guidance, ensuring every step you take is aligned with your success.
          </p>
          <span className="premium-badge">PREMIUM</span>
        </div>
        <div className="feature-card">
          <i className="fa-solid fa-puzzle-piece"></i>
          <h3 className="feature-title">Build Real-World Projects</h3>
          <p className="feature-description text-white">
            Complete a real-world programming project designed to exercise practical skills used in the workplace. Everything you learn from a Project will help you practice skills that are in-demand, useful, and highly relevant.
          </p>
          <span className="premium-badge">PREMIUM</span>
        </div>
      </div>

    </section>
  </div>
    </>
  );
}
