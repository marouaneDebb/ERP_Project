import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';


function Main(): JSX.Element {

  const [prix, setPrix]=useState<String>(useParams().prix);
  async function handleToken(token: any): Promise<void> {
    
    try {
      await fetch('http://localhost:8090/stripe/charge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          description: 'education payment',
          amount: prix,
          currency: 'USD',
          stripeToken: token.id,
        }),
      });

      alert('Payment Success');
    } catch (error: any) {
      // Explicit type assertion or other handling
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert('An unknown error occurred');
      }
    }
  }
 
  return (
    <div className="App">
      <StripeCheckout
        stripeKey="pk_test_51OelsKJWksKY1lL7TXpXUdxUqtiQCAuRyCZVgHMPJk5pbDZdbvDgDo8kAc3PtEJsOLkNrXjw1BuHi5oCiez7roUc004ZQUL3IE"
        token={handleToken}
      />
    </div>
  );
}

export default Main;
