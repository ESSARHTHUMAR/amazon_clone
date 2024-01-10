import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../../Context/StateProvider";
import { basketTotal } from "../../Reducers/reducer";
import CartProducts from "../Cart/CartProducts";
import axios from "axios"

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [disabled, setDisabled] = useState(null);
  const [proccessing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(true);
  const [clientSecret, setClientSecret] = useState();
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        url: `/payments/create?total=${basketTotal(basket) * 100}`
      })
      setClientSecret(response.data.clientSecret);
    }
    getClientSecret();
  }, [basket])

  console.log(clientSecret)

   const handleSubmit = async(e) => {
    e.preventDefalut();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then(({ paymentIntent }) => {
      setSucceeded(true);
      setError(null);
      setProcessing(false)

      navigate('/orders', {replace:true});
    })
  }

  function handleChange(e) {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold p-[10px] border-b-[2px] border-solid border-lightgray">
        CHECKOUT (<Link to={"/shopping_cart"}>{basket?.length} ITEMS</Link>)
      </h1>
      <div className="bg-white w-80 md:w-auto">
        <div className="flex gap-10 md:gap-6 lg:gap-0 p-[20px] my-[20px] border-solid border-b-2 border-lightgray">
          <p className="text-md font-bold basis-[20%]">Delivery Address</p>
          <div className="text-sm basis-[80%]">
            <p>{user ? user?.email : "Guest"}</p>
            <p>test 123</p>
            <p>150 south west</p>
            <p>New York, NY</p>
          </div>
        </div>
        <div className="flex gap-10 md:gap-6 lg:gap-0 p-[20px] my-[20px] border-solid border-b-2 border-lightgray">
          <p className="text-md font-bold basis-[20%] mt-[30px]">Review items</p>
          <div className="">
            {basket.map((product) => {
              return (
                <CartProducts
                  id={product.id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                />
              );
            })}
          </div>
        </div>
        <div className="flex gap-10 md:gap-6 lg:gap-0 p-[20px] my-[20px] border-solid border-b-2 border-lightgray">
          <p className="text-md font-bold basis-[20%]">Payment Method</p>
          <div className="basis-[80%]">
            <form action="" onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="mt-[10px]">
                
                  {
                    <>
                      <p>
                        Order Total: <strong>${basketTotal(basket)}</strong>
                      </p>
                    </>
                  }
                
                <button className="w-[50%] font-titleFont font-bold h-[30px] border-2 border-solid  bg-yellow-400 cursor-pointer hover:bg-yellow-500 active:bg-yellow-700 rounded-sm mt-[10px]" disabled={disabled || proccessing || succeeded}>
                  <span>{proccessing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
