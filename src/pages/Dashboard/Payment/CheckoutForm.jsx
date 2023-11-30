import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import axiosSecure from "../../../api";
import useAuth from "../../../hooks/useAuth";
import usePropertyBought from "../../../hooks/usePropertyBought";

const CheckoutForm = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [buyingList, refetch] = usePropertyBought();

  const totalPrice = buyingList.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", {
          price: totalPrice,
          propertyId: buyingList[0]._id,
        })
        .then((res) => {
          setClientSecret(res.data.client_secret);
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  }, [axiosSecure, totalPrice, buyingList]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements || loading) {
      return;
    }

    setLoading(true);

    const card = elements.getElement(CardElement);

    if (!card) {
      setLoading(false);
      return;
    }

    try {
      const { paymentIntent, error: confirmError } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card,
            billing_details: {
              email: user?.email || "anonymous",
              name: user?.displayName || "anonymous",
            },
          },
        });

      if (confirmError) {
        setError(confirmError.message);
      } else if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);

        const payment = {
          email: user?.email || "anonymous",
          price: totalPrice,
          status: "Bought",
  
        };


      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="bg-rose-400 px-4 py-2 text-white my-4"
        type="submit"
        disabled={!stripe || !clientSecret || loading}
      >
        {loading ? "Processing..." : "Pay"}
      </button>
      <p className="text-red-600">{error}</p>
      {transactionId && (
        <p className="text-green-600"> Your transaction id: {transactionId}</p>
      )}
    </form>
  );
};

export default CheckoutForm;
