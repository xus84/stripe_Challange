
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

    if (!error){
       console.log(paymentMethod)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card card-body">
      <div className="text-center">
         <img src="https://img.pccomponentes.com/articles/29/297584/raspberry-pi-4-modelo-b-8gb.jpg" className="img-fluid" width="75%"/>
      </div>
      <div className="description text-dark text-center" ><h5>Raspberry Pi 4 Modelo B 8GB</h5></div>
      <h4 className="text-center">Price: 88,90€</h4>

        <div className="form-group">
         <CardElement className="form-control"/>
        </div>

      <button className="btn btn-outline-secondary">
        Pay
      </button>
    </form>
  )
}


function App() {
  return (
   <Elements stripe={stripePromise} >
     <div className="container p-4">
        <div className="col-md-4 offset-md-4">
         <CheckoutForm />
        </div>
     </div>
     
   </Elements>
  );
}

export default App;
