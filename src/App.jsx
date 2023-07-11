// import { useState } from "react";
import "./App.css";
import Header from "./components/Navigation/Header";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Login from "./components/LoginPage/Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./Context/StateProvider";
import Checkout from "./components/Checkout/Checkout";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Footer from "./Footer/footer";


const promise = loadStripe(
  "pk_test_51N7a5sSGmImoVJjJFxrXtYUMy5VCxgycZOYq09u1lXTXG5tkx6Nk7TTzEJ98R98qW7GYFLCkbj6XVP7Krs2uCMpl00a0fOXFBF"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app font-bodyFont">
        <Routes>
        
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Checkout />
                </Elements>
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            path="/shopping_cart"
            element={
              <>
                <Header />
                <Cart />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
              
                <Header />
                <Home />
              </>
            }
          />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
