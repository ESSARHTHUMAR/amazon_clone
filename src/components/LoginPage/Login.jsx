import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { auth } from "../../firebase";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  function handleSignIn(e) {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
    .then((auth) => {
      if(auth){
        navigate('/');
      }
    })
    .catch((error) => alert(error.message));
  }

  function handleRegister(e) {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if(auth){
          navigate("/")
        }
      })
      .catch((error) => alert(error.message));
  }

  return (
    <div className="bg-white min-h-screen flex flex-col items-center">
      <Link to="/">
        <img
          className="w-[100px] object-contain my-[20px] mx-auto"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
          alt="amazon_logo"
        />
      </Link>
      <div className="p-5 w-[300px] h-fit flex flex-col border-[2px] border-solid border-lightgray">
        <h1 className="text-3xl font-bold mb-[20px]">Sign-in</h1>
        <form action="/">
          <h5 className="text-sm font-bold mb-[5px]">E-mail</h5>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="w-[98%] h-[30px] mb-[10px] bg-white border-2 border-gray-700 p-[3px]"
            type="email"
            value={email}
          />
          <h5 className="text-sm font-bold mb-[5px]">Password</h5>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="w-[98%] h-[30px] mb-[10px] bg-white border-2 border-gray-700 p-[3px]"
            type="password"
            value={password}
          />
          <button
            onClick={handleSignIn}
            className="mt-[10px] font-titleFont bg-yellow-400 rounded-md cursor-pointer hover:bg-yellow-500 active:bg-yellow-700 w-[98%] h-[30px]"
          >
            Login
          </button>
        </form>
        <p className="text-xs mt-[15px]">
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button
          onClick={handleRegister}
          className="mt-[15px] font-titleFont w-[98%] h-[30px] border-2 border-solid border-darkgray  bg-gray-100 rounded-md cursor-pointer hover:bg-yellow-500 active:bg-yellow-400"
        >
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
