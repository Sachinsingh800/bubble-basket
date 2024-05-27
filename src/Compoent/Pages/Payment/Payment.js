import React, { useEffect } from 'react';
import axios from 'axios';

function Payment() {
  const REACT_APP_SQUARE_APPLICATION_ID = process.env.REACT_APP_SQUARE_APPLICATION_ID || 'sandbox-sq0idb-lhuzqiKR6VIBNoMFKNfjMw';

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://sandbox.web.squarecdn.com/v1/square.js';
    script.async = true;
    script.onload = async () => {
      try {
        const payments = window.Square.payments(REACT_APP_SQUARE_APPLICATION_ID, 'sandbox');
        const card = await payments.card();
        await card.attach('#card-container');

        document.getElementById('card-button').addEventListener('click', async () => {
          const tokenResult = await card.tokenize();
          if (tokenResult.status === 'OK') {
            axios.post('https://paymentgateway-0x97.onrender.com', {
              nonce: tokenResult.token,
              amount: 1000, // Amount in cents (e.g., 1000 cents = $10.00)
            })
            .then(response => {
              if (response.data.success) {
                alert('Payment successful!');
              } else {
                alert('Payment failed: ' + response.data.error);
              }
            })
            .catch(error => {
              console.error('Error processing payment:', error);
            });
          } else {
            console.error('Error tokenizing card:', tokenResult.errors);
          }
        });
      } catch (error) {
        console.error('Square Payments initialization failed:', error);
      }
    };
    document.body.appendChild(script);
  }, [REACT_APP_SQUARE_APPLICATION_ID]);

  return (
    <div className="App">
      <h1>Square Payment Integration</h1>
      <form id="payment-form">
        <div id="amount-container">
          <label>Amount: $10.00</label>
        </div>
        <div id="card-container"></div>
        <button id="card-button" type="button">Pay</button>
      </form>
    </div>
  );
}

export default Payment;
