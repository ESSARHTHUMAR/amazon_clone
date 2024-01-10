import React, { useState } from "react";
import { useStateValue } from "../../Context/StateProvider";
import { AnimatePresence, motion } from "framer-motion";

function CartProducts({ id, title, price, image, isVisible }) {
  const [{ basket }, dispatch] = useStateValue();
  
  // const { id, image, price, title } = item;
  function handleClick() {

    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  }

  return (
    <>
    <AnimatePresence>
    
      <motion.div
        initial={{ y:0, opacity: 1 }}
        animate={{ y:0, opacity: 1 }}
        transition={{delay: 0.5, duration: 0.5, }}
        exit={{ opacity:0 }}
        className="flex my-10"
        key={id}
      >
        <div className="image lg:border-2 lg:border-solid lg:rounded-md lg:hover:border-yellow-500 hover:scale-105 duration-300">
          <img
            className="w-44 md:w-[180px] md:h-[180px] p-4 object-contain"
            src={image}
            alt=""
          />
        </div>

        <div className="info w-[600px] flex flex-col pl-6">
          <div>
            <p className="font-titleFont text-lg font-bold lg:text-xl tracking-wide">
              {title}
            </p>
          </div>
          <p className="text-sm lg:text-md text-gray-600 font-semibold">
            <strong>$</strong> {price}
          </p>
          <button
            onClick={handleClick}
            className="mt-6 md:w-[40%] bg-yellow-400 rounded-md cursor-pointer hover:bg-yellow-500 active:bg-yellow-700 px-3 py-1 text-md font-semibold"
          >
            Remove from basket
          </button>
        </div>
      </motion.div>
      
      </AnimatePresence>
    </>
  );
}

export default CartProducts;
