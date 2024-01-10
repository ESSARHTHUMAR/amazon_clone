import React, { useContext } from "react";
import { ProductsContext } from "../../Context/ProductsContext";
import { useStateValue } from "../../Context/StateProvider";
import "./products.css";
import CompareIcon from "@mui/icons-material/Compare";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import StarIcon from "@mui/icons-material/Star";
// import products from "../../data/home";

function Products({ product }) {
  
  const [{ basket }, dispatch] = useStateValue();
  const { id, image, title, description, price, rating } = product;

  function handleClick() {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      },
    });
  }

  return (
    // <div className="products">
    //       <div className="row">
    //         <div className="card">
    //           <div className="card_body">
    //             <p className="card_title">{title}</p>
    //             <p className="card_text">
    //               $<strong>{price}</strong>
    //             </p>
    //             {/* <div className="products__rating">
    //               {Array(rating)
    //                 .fill()
    //                 .map((_, i) => (
    //                   <p>⭐</p>
    //                 ))}
    //             </div> */}

    //           <div className="card_img">
    //             <img src={image} alt="" />
    // </div>
    //             <button onClick={handleClick}>Add to basket</button>
    //           </div>
    //         </div>
    //       </div>
    //     // </div>

    <div>
      <div className="mb-4 relative group"></div>
      <div className="bg-white w-full min-w-[100px] h-auto flex flex-col items-center rounded-md z-30 border-[2px] border-gray-200 hover:border-transparent hover:shadow-black hover:drop-shadow-2xl">
        <div className="mt-5 mx-5 h-[100px] w-[100%] flex flex-col z-10 bg-white">
          <p className="font-titleFont text-lg font-medium mx-5 tracking-wide">
            <strong>{title?.length > 20 ? title.slice(0, 20) : title}</strong>
          </p>
          <p className="mx-5 text-sm">
            {description?.length > 90
              ? description.slice(0, 90) + "..."
              : description}
          </p>
          <div className="flex items-center justify-between mt-2">
            <p className="mx-5 text-sm text-gray-600 font-semibold">
              <strong>$</strong> {Math.round(price, 2)}
            </p>
            <div className="products__rating flex mx-5 text-yellow-500">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
          </div>
        </div>
        <div className="w-[full] h-auto  my-10 flex justify-center items-center relative group">
          <img className="w-60 h-[150px] object-contain" src={image} alt="" />
          <ul className="hidden w-full z-1 h-36 bg-white absolute top-[-158px] xl:flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-none group-hover:top-0 duration-500">
            <li className="text-gray-600 hover:text-black text-sm font-medium border-b-[1px] border-b-gray-400 hover:border-b-gray-700 flex items-center justify-end gap-2 hover:cursor-pointer duration-300 w-full">
              Compare
              <span>
                <CompareIcon />
              </span>
            </li>
            <li className="text-gray-600 hover:text-black text-sm font-medium border-b-[1px] border-b-gray-400 hover:border-b-gray-700 flex items-center justify-end gap-2 hover:cursor-pointer duration-300 w-full">
              Add to Wishlist{" "}
              <span>
                <FavoriteIcon />
              </span>{" "}
            </li>
            <li className="text-gray-600 hover:text-black text-sm font-medium border-b-[1px] border-b-gray-400 hover:border-b-gray-700 flex items-center justify-end gap-2 hover:cursor-pointer duration-300 w-full">
              View Details{" "}
              <span>
                <ArrowCircleRightIcon />
              </span>{" "}
            </li>
          </ul>
        </div>
        <div className="flex gap-8">
          <div className="p-2 relative z-10">
            <button
              onClick={handleClick}
              className="mx-auto mb-4 bg-yellow-400 rounded-md cursor-pointer hover:bg-yellow-500 active:bg-yellow-700 px-3 py-1 text-md font-bold"
            >
              Add to Cart
            </button>
          </div>

          <ul className="xl:hidden flex items-center justify-center mb-4 group">
            <li className="text-gray-600 hover:text-black rounded-md px-2 py-1 hover:bg-yellow-500 active:bg-yellow-700 text-sm font-medium duration-300 w-full">
              <CompareIcon />
            </li>
            <li className="text-gray-600 hover:text-black rounded-md px-2 py-1 hover:bg-yellow-500 active:bg-yellow-700 text-sm font-medium duration-300 w-full">
              <FavoriteIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Products;
