import { createContext, useState } from "react";
import { food_items } from "../food";

export const DataContext = createContext();

const UserContext = ({ children }) => {

  const [cate, setCate] = useState(food_items);
  const [input, setInput] = useState("");
  const [showCart, setShowCart] = useState(false);

  return (
    <DataContext.Provider value={{ cate, setCate, input, setInput, showCart, setShowCart }}>
      {children}
    </DataContext.Provider>
  );
};

export default UserContext;