import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Checkout.css";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderAmount, setOrderAmount] = useState(0);
  const [orders, setOrders] = useState([]);

  function loadRazorpay() {
    setOrderAmount("550");
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onerror = () => {
      alert("Razorpay SDK failed to load. Are you online?");
    };
    script.onload = async () => {
      try {
        setLoading(true);
        const result = await axios.post("/create-order", {
          amount: orderAmount + "00",
        });
        const { amount, id: order_id, currency } = result.data;
        const {
          data: { key: razorpayKey },
        } = await axios.get("/get-razorpay-key");

        const options = {
          key: razorpayKey,
          amount: amount.toString(),
          currency: currency,
          name: "Bright",
          description: "Yellow T shirt",
          order_id: order_id,
          handler: async function (response) {
            const result = await axios.post("/pay-order", {
              amount: amount,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
            });
            alert(result.data.msg);
            // fetchOrders();
          },
          prefill: {
            name: "Name",
            email: "email@example.com",
            contact: "",
          },
          notes: {
            address: "example address",
          },
          theme: {
            color: "#ffbf00",
          },
        };

        setLoading(false);
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      } catch (err) {
        alert(err);
        setLoading(false);
      }
    };
    document.body.appendChild(script);
  }

  return (
    <div className="checkout-main-div">
      <div className="checkout-header">
        <h4 style={{ color: "#ffbf00" }}> BRIGHT PAYMENT PAGE</h4>
      </div>

      <div className="checkout-body">
        <h5> PAY HERE</h5>
        Net Payable Amount : 550 <br />
        <br />
        {/* <input
            placeholder="INR"
            type="number"
            value={orderAmount}
            onChange={(e) => setOrderAmount(e.target.value)}
          ></input> */}
        <button
          disabled={loading}
          onClick={loadRazorpay}
          className="cart-btns-3"
        >
          Make Payment
        </button>
        {loading && <div>Loading...</div>}
        <br />
        <br />
      </div>
    </div>
  );
};
export default Checkout;
