import React, { useContext, useEffect } from "react";
import { DataContext } from "../context/UserContext";
import { PiBowlFoodBold } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { food_items } from "../food";
import { useSelector } from "react-redux";

const Navbar = () => {

  const { input, setInput, setCate, showCart, setShowCart } = useContext(DataContext);

  const items = useSelector((state) => state.cart);

  useEffect(() => {

    let newlist = food_items.filter((item) =>
      item.food_name.toLowerCase().includes(input.toLowerCase())
    );

    setCate(newlist);

  }, [input]);

  return (
    <div className="w-full h-[90px] flex items-center justify-between gap-2 px-2 bg-blue-400">
      
      <div className="w-auto h-[45px] bg-white flex justify-center items-center p-4 rounded-md shadow-xl">
        <PiBowlFoodBold className="text-yellow-900 text-2xl"/>
         <div className="text-blue-400 font-bold">Foodify</div>
      </div>

      <form
        className="w-[60%] h-[45px] bg-white flex items-center px-3 gap-2 rounded-md shadow-xl"
        onSubmit={(e) => e.preventDefault()}
      >
        <IoSearch className="text-blue-800" />
        <input
          type="text"
          placeholder="Search"
          className="w-full outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>

      {/* CART BUTTON */}
      <div
        className="w-[45px] h-[45px] bg-white flex justify-center items-center rounded-md shadow-xl relative cursor-pointer"
        onClick={() => setShowCart(true)}
      >
        <span className="absolute top-0 right-1 bg-red-500 rounded-full h-4 w-4 text-[12px] font-bold text-white flex items-center justify-center">
          {items.length}
        </span>

        <FiShoppingBag className="text-black" />
      </div>

    </div>
  );
};

export default Navbar;
