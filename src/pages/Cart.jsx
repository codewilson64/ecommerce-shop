import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";

const Cart = () => {
  const productData = useSelector((state) => state.ecommerce.productData);
  const [totalAmount, setTotalAmount] = useState("");

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmount(price);
  }, [productData]);

  return (
    <div>
      <div className="max-w-screen-xl mx-auto py-20 sm:px-16 px-2 md:flex block font-poppins">
        <CartItem />
        <div className="md:w-1/3 max-w-[500px] mx-auto bg-gray-200 py-6 px-4">
          <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
            <h2 className="text-2xl font-medium">cart totals</h2>
            <p className="flex items-center gap-4 text-base">
              Subtotal <span className="font-bold text-lg">$ {totalAmount}</span>
            </p>
          </div>
          <p className="font-semibold flex justify-between mt-6">
            Total <span className="text-xl font-bold">$ {totalAmount}</span>
          </p>
          <button className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300">Checkout</button>
        </div>
      </div>
      <ToastContainer position="top-left" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" />
    </div>
  );
};

export default Cart;
