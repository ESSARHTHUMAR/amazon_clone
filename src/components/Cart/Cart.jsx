import React from "react";
import { useStateValue } from "../../Context/StateProvider";
import Products from "../Home/Products";
import "./cart.css";
import CartProducts from "./CartProducts";
import Subtotal from "./Subtotal";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Cart() {
  const [{ user, basket }] = useStateValue();
  

  return (
    <div className="cart lg:flex p-5 h-max bg-white">
      <div className="cart__left">
        <div>
          <img
            className="width-[100%] mb-10"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
          />
          <p className="text-xl font-bold">
            Hello, {user ? user.email : "Guest"}{" "}
          </p>
          <h2 className="text-2xl lg:text-3xl font-bold mr-2.5 p-2.5 border-b-2 border-solid border-gray-200">
            Your Shopping Basket
          </h2>
        </div>
        {basket.length !== 0 ? (
          basket?.map((item,index) => {
            return (
              
              <CartProducts
                key={index}
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
              />
              
            );
          })
        ) : (
          <>
            <motion.div
              initial={{ y: 70, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="md:flex justify-center items-center py-10"
            >
              <div>
                <img
                  className="w-80 rounded-lg p-4 mx-auto"
                  src="https://amazonyoutube.vercel.app/static/media/emptyCart.230e4848b62fb3cab325.png"
                  alt=""
                />
              </div>
              <div className="w-auto md:w-96 flex flex-col items-center rounded-md shadow-lg p-4 bg-white-500">
                <h1 className="text-xl font-bold">Your Cart feels lonely!</h1>
                <p className="text-sm text-center">
                  Your Shopping cart lives to serve. Give it purpose - fill it
                  with books, electronics, videos, etc. and make it happy.
                </p>
                <Link to="/">
                <button className="mt-6 bg-yellow-400 rounded-md cursor-pointer hover:bg-yellow-500 active:bg-yellow-700 px-8 py-2 text-lg font-semibold">
                  Continue Shopping
                </button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </div>
      <div className="cart__right flex justify-end md:items-start">
        <Subtotal />
      </div>
    </div>
  );
}
export default Cart;
