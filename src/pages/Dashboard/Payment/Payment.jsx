import React from 'react';
import CheckOutForm from './CheckOutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import useSelectClass from '../AllUser/hook/useSelectClass';
import { useLoaderData } from 'react-router-dom';


const stripePromise = loadStripe(import.meta.env.VITE_Secret_Payment_Key);
const Payment = () => {
    const cart = useLoaderData();
    const classPrice = cart.classPrice;
    return (
        <div className='w-96'>
            <h2>Payment Here: </h2>
            <Elements stripe={stripePromise}>
                <CheckOutForm classPrice={classPrice} cart={cart}></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;