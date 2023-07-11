import { compose } from "@mui/system";
import React, { useContext } from "react";
import { useState } from "react";
import { ProductsContext } from "../../Context/ProductsContext";
import { BsSearch } from "react-icons/bs";
import SearchIcon from "@mui/icons-material/Search";

function Search() {
  const { product } = useContext(ProductsContext);
  let titles = [];
  {
    product.map((item) => {
      return titles.push(item.title);
    });
  }

  const [products, setProducts] = useState(titles);
  const [searchQuery, setSeachQuery] = useState("");

  function handleClick() {
    if (searchQuery === "") {
      setSeachQuery("");
      return;
    }
    const filterBySearch = titles.filter((item) => {
      if (item.toLowerCase().includes(searchQuery.toLowerCase())) {
        return item;
      }
    });
    setProducts(filterBySearch);
  }

  //   const mystyle = {
  //     marginLeft: "600px",
  //     marginTop: "20px",
  //     fontWeight: "700",
  //   };

  return (
    <>
      <div className="flex items-center rounded-3xl">
        <input
          className="w-[100%] h-[30px] p-[10px] border-none"
          onChange={(e) => setSeachQuery(e.target.value)}
        ></input>
        <SearchIcon
          className="bg-yellow-500 p-[5px] h-[30px]"
          onClick={handleClick}
        />
      </div>
      <div className="bg-white m-[10px] p-[10px] max-h-[200px] overflow-y-scroll">
        {products.map((product) => {
          return <div className="p-[5px]">{product}</div>;
        })}
      </div>
    </>
  );
}

export default Search;
