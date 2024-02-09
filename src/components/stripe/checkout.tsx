import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


function Main(): JSX.Element {
  async function handleToken(token: any): Promise<void> {
    console.log(token);
    try {
      await fetch('http://localhost:8090/stripe/charge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          description: 'education payment',
          amount: 400,
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
