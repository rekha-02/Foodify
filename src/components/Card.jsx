import React from "react";
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { AddItem } from "../redux/cartSlice";
import { toast } from "react-toastify";

const Card = ({ name, image, id, price, type }) => {

  const dispatch = useDispatch();

  return (
    <div className="w-[300px] h-[400px] bg-white p-3 mb-8 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 border-blue-400">
      
      {/* Image */}
      <div className="w-full h-[60%] overflow-hidden rounded-lg">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Name */}
      <div className="text-2xl font-semibold">{name}</div>

      {/* Price + Type */}
      <div className="w-full flex justify-between">

        <div className="text-blue-500 text-lg font-semibold">
          Rs. {price}/-
        </div>

        <div className="flex items-center gap-2 text-blue-500 text-lg font-semibold">
          {type === "veg" ? <LuLeafyGreen /> : <GiChickenOven />}
          <span>{type}</span>
        </div>

      </div>

      <button
        className="bg-blue-400 w-full p-3  rounded-lg text-black hover:bg-blue-300"
        onClick={() =>
          {dispatch(AddItem({ id, name, price, image, type }))
          toast.success("item added")
         }
        }>
        Add to dish
      </button>

    </div>
  );
};

export default Card;
