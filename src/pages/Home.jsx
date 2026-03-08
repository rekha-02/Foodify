import Navbar from "../components/Navbar";
import Category from "../Category";
import Card from "../components/Card";
import { food_items } from "../food";
import { DataContext } from "../context/userContext";
import { useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { useContext } from "react";
import { toast } from "react-toastify";
import Card2 from "../components/card2";

const Home = () => {
  const { cate, setCate, input, showCart, setShowCart } =
    useContext(DataContext);

  const items = useSelector((state) => state.cart);

  let subtotal = items.reduce(
    (total, item) => total + item.qty * item.price,
    0,
  );
  let deliveryFee = 20;
  let taxes = (subtotal * 0.5) / 100;
  let total = Math.floor(subtotal + deliveryFee + taxes);

  function filter(category) {
    if (category === "All") {
      setCate(food_items);
    } else {
      const newList = food_items.filter(
        (item) => item.food_category === category,
      );
      setCate(newList);
    }
  }

  return (
    <div className="bg-slate-200 w-full min-h-screen">
      <Navbar />

      {/* CATEGORY */}
      {!input && (
        <div className="flex flex-wrap justify-center items-center mt-5 mb-5 gap-5 w-full">
          {Category.map((item) => (
            <div
              key={item.id}
              className="w-[140px] h-[150px] bg-white flex flex-col gap-5 p-5 text-xl font-semibold text-gray-500 rounded-lg shadow-xl hover:bg-blue-200 cursor-pointer duration-200"
              onClick={() => filter(item.name)}
            >
              {item.icon}
              {item.name}
            </div>
          ))}
        </div>
      )}

      {/* CARDS */}

      <div className="flex flex-wrap gap-6 justify-center mt-8">
        {cate.length > 0 ? (
          cate.map((item) => (
            <Card
              key={item.id}
              name={item.food_name}
              image={item.food_image}
              id={item.id}
              price={item.price}
              type={item.food_type}
            />
          ))
        ) : (
          <div>Dish not found</div>
        )}
      </div>

      {/* CART SIDEBAR */}
      <div
        className={`w-full md:w-[40vw] h-screen fixed top-0 right-0 bg-gray-50 shadow-xl p-6 transform transition-transform duration-500 flex flex-col items-center overflow-auto ${
          showCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="w-full flex justify-between items-center mb-6">
          <span className="text-black font-semibold text-lg">
            Cart Items ({items.length})
          </span>

          <RxCross2
            className="text-black text-2xl cursor-pointer"
            onClick={() => setShowCart(false)}
          />
        </header>

        {/* CART ITEMS */}
        {items.map((item) => (
          <Card2
            key={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            id={item.id}
            qty={item.qty}
          />
        ))}

        {items.length > 0 ? (
          <>
            <div className="w-full border-t-2 border-gray-400 border-b-2 mt-7 flex flex-col gap-4 p-8">
              <div className="w-full flex justify-between items-center">
                <span className="text-xl text-gray-700 font-semibold">
                  Subtotal
                </span>
                <span className="text-black-400 font-semibold">
                  Rs {subtotal}/-
                </span>
              </div>

              <div className="w-full flex justify-between items-center">
                <span className="text-xl text-gray-700 font-semibold">
                  Delivery Fee
                </span>
                <span className="text-black font-semibold">
                  Rs {deliveryFee}/-
                </span>
              </div>

              <div className="w-full flex justify-between items-center">
                <span className="text-xl text-gray-700 font-semibold">
                  Taxes
                </span>
                <span className="text-black font-semibold">
                  Rs {taxes}/-
                </span>
              </div>
            </div>

            <div className="w-full flex justify-between items-center p-9">
              <span className="text-gray-700 font-bold text-2xl">Total</span>
              <span className="text-black font-bold text-xl">
                Rs {total}/-
              </span>
            </div>
            <button
              className="w-[80%] p-3 rounded-lg bg-blue-700 text-white hover:bg-blue-500 transition-transform"
              onClick={() => toast.success("Order placed ...")}
            >
              Place Order
            </button>
          </>
        ) : (
          <div className="text-center text-2xl text-black font-semibold pt-5">
            Empty Cart
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
