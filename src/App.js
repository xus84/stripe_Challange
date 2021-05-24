
import { loadStripe } from '@stripe/stripe-js'
import "bootswatch/dist/lux/bootstrap.min.css";
import './App.css';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe("pk_test_51ItWL3FsljR1JBuoBjwzyQHxPKsYWuYb4gwt9UpT7oPCWwNnPyOs1omRSRlmbshqsCZGE5KHR3f6trjFayWgSBzI00ZtZmYGLt")

const CheckoutForm = () => {

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {error, paymentMethod} =await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <CardElement/>
      <button>
        Buy
      </button>
    </form>
  )
}


function App() {
  return (
   <Elements stripe={stripePromise} >
     <CheckoutForm />
   </Elements>
  );
}

export default App;
