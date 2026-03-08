import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { IncreaseQty, DecreaseQty, RemoveItem } from "../redux/cartSlice";

const Card2 = ({ name, id, price, image, qty }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-full h-[120px] bg-white shadow-lg rounded-lg p-3 flex items-center justify-between mb-3">

      {/* Left Side */}
      <div className="flex items-center gap-4 w-[60%]">

        <div className="w-[80px] h-[80px] rounded-lg overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>

        <div className="flex flex-col">
          <span className="text-gray-700 text-lg font-semibold">{name}</span>

          {/* Increase & Decrease */}
          <div className="w-[110px] h-[40px] bg-slate-200 flex rounded-lg overflow-hidden shadow-md mt-2">
            <button
              className="w-[30%] bg-white flex justify-center items-center text-blue-700 font-bold"
              onClick={() => dispatch(DecreaseQty(id))}
            >
              -
            </button>

            <span className="w-[40%] flex justify-center items-center">{qty}</span>

            <button
              className="w-[30%] bg-white flex justify-center items-center text-blue-700 font-semibold"
              onClick={() => dispatch(IncreaseQty(id))}
            >
              +
            </button>
          </div>
        </div>

      </div>

      {/* Right Side */}
      <div className="flex flex-col items-end gap-2">
        <span className="text-lg font-semibold text-black">Rs {price}/-</span>
        <RiDeleteBin6Line
          className="text-2xl text-red-500 cursor-pointer"
          onClick={() => dispatch(RemoveItem(id))}
        />
      </div>

    </div>
  );
};

export default Card2;