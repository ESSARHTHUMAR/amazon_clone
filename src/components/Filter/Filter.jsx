    import { FormControl , InputLabel, MenuItem, Select } from "@mui/material";
    import React, { useState } from "react";
    import { useContext } from "react";
    import { CategoryContext } from "../../Context/CategoryContext";
    import "./filter.css"

    const Filter = ({getCategory}) => {
    const { category } = useContext(CategoryContext);

    const [selectedCategory, setselectedCategory] = useState();

    const handleChange = (e) => {
        // setCate(e.target.value);
        setselectedCategory(e.target.value)
    };
    // getCategory(selectedCategory);
    // console.log(selectedCategory.toString())

    return (
        <div className="flex justify-end gap-4 items-center">
        <label className="text-xl text-gray-500 font-titleFont" htmlFor="">
            Choosse a Catagory:{" "}
        </label>
        <select onChange={handleChange} className="text-sm p-2 rounded-md border-2 hover:border-yellow-400 cursor-pointer active:border-yellow-500" name="Catagory" id="filter">
            <option className="text-xs" value="">
            --Select a Category--
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
        // <div className="flex flex-row items-center justify-end">
        //   <FormControl className="w-[10%]">
        //     <InputLabel id="demo-simple-select-label">Category</InputLabel>
        //     <Select  labelId="demo-simple-select-label" label="Choose a Category" value={cate} id="demo-simple-select" sx={{borderRadius: "6px",  hover: "yellow"}} className="select__box" onChange={handleChange}>
        //       {category.map((category, index) => {
        //         return (
        //           <MenuItem key={index} value={category}>
        //             {category.toUpperCase()}
        //           </MenuItem>
        //         );
        //       })}
        //     </Select>
        //     </FormControl>
        // </div>
    );
    };

    export default Filter;
