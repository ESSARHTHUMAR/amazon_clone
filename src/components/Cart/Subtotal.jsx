import React from "react";
import CurrencyFormat from "react-currency-format";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../../Context/StateProvider";
import { basketTotal } from "../../Reducers/reducer";

function Subtotal() {

  const[{basket}] = useStateValue();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-between w-[300px] p-2 bg-[#f3f3f3] border-2 border-solid rounded">
      <CurrencyFormat
        renderText=
        {(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="flex items-center">
              <input className="mr-2" type="checkbox" />This order contains a gift.
            </small>
          </>
        )}
        decimalScale={2}
        value={basketTotal(basket)*80}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      
      <button onClick={ basket.length ? e => navigate("/checkout") : e => navigate("/")} className="mt-4 mb-2 w-[100%] bg-yellow-400 rounded-md cursor-pointer hover:bg-yellow-500 active:bg-yellow-700 px-3 py-1 text-lg font-semibold">Proceed to Checkout</button>
      
    </div>
  );
}

export default Subtotal;