import React, { useContext, useState } from "react";
import "./home.css";
import Products from "./Products";
import ImageSlider from "../../Carousel/ImageSlider"
import images from "../../Carousel/images";
import { ProductsContext } from "../../Context/ProductsContext";
import Filter from "../Filter/Filter";
import { purple } from "@mui/material/colors";
import { CategoryContext } from "../../Context/CategoryContext";

function Home() {
  const { product } = useContext(ProductsContext);

  const { category } = useContext(CategoryContext);

  const [selectedCategory, setselectedCategory] = useState();

  const handleChange = (e) => {
    // setCate(e.target.value);
    setselectedCategory(e.target.value);
  };

  // const pull_category = (data) => {
  //   return data;

  // }
  // console.log(pull_category())

  const filteredProduct = selectedCategory ? product.filter((item) => (item.category.includes(selectedCategory))) : product;
  // console.log(filteredProduct)

  // const filteredProduct =  product.filter((item) => {
  //   item.category === selectedCategory ? selectedCategory : product;
  // });

  return (
    <div className="home max-w-[1440px] mx-auto">
      <ImageSlider className="mx-auto" images={images} />
      <div className="flex mt-[-50px] sm:mt-[-100px] xl:mt-[-300px] md:mt-[-150px] lg:mt-[-200px] flex-col relative lg:flex-row lg:justify-end lg:items-center items-end gap-1 lg:gap-4 justify-center mx-6">
        <label className="text-md md:text-lg z-1 lg:text-xl text-gray-500 font-titleFont" htmlFor="">
          Choose a Catagory:{" "}
        </label>
        <select
          onChange={handleChange}
          className="w-[40%] md:w-[30%] lg:w-[15%] text-sm p-2 rounded-md border-2 hover:border-yellow-400 cursor-pointer active:border-yellow-500"
          name="Catagory"
          id="filter"
        >
          <option className="text-xs" value="">
            ALL
          </option>
          {category.map((category, index) => {
            return (
              <option key={index} value={category}>
                {category.toUpperCase()}
              </option>
            );
          })}
        </select>
      </div>
      <section className="py-8">
        <div className="container mx-auto relative">
          {/* mt-[-160px] */}
          
          <div className="mx-auto grid grid-cols-1 px-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] max-w-sm md:max-w-none md:mx-0">
            {filteredProduct.map((product) => {
              return (
                <>
                  <Products key={product.id} product={product} />
                </>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
