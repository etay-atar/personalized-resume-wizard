import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Button } from "@/components/ui/button";

export default function CheckoutForm({ price }) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      alert(error.message);
      setLoading(false);
      return;
    }

    const response = await fetch("http://localhost:5000/pay", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: price * 100, // סכום 
        payment_method: paymentMethod.id,
      }),
    });

    const result = await response.json();
    if (result.success) {
      alert("תשלום הצליח");
    } else {
      alert("תשלום נכשל");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 border rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">הזן פרטי אשראי</h2>
      <CardElement className="p-2 border rounded mb-4" />
      <Button type="submit" disabled={!stripe || loading}>
        {loading ? "מעבד..." : "בצע תשלום"}
      </Button>
    </form>
  );
}
