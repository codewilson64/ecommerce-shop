import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MdOutlineStar } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/ecommerceSlice";
import { ToastContainer, toast } from "react-toastify";

const ProductDisplay = () => {
  const dispatch = useDispatch();

  const [details, setDetails] = useState({});

  let [baseQty, setBaseQty] = useState(1);

  const location = useLocation();

  useEffect(() => {
    setDetails(location.state.item);
  }, []);

  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-16 my-10 md:flex block gap-10 font-poppins">
        <div className="md:w-2/5 w-full">
          <img src={details.image} alt="productImage" className="w-full ss:h-[550px] h-[350px] object-cover" />
        </div>
        <div className="md:w-3/5 w-full flex flex-col justify-center ss:gap-12 gap-8">
          <div>
            <h2 className="font-semibold ss:text-4xl text-2xl mt-3">{details.title}</h2>
            <div className="flex items-center gap-4 mt-3">
              <p className="line-through text-gray-500">${details.oldPrice}</p>
              <p className="ss:text-2xl text-xl font-semibold">${details.price}</p>
            </div>
          </div>
          <div className="flex items-center text-base">
            <div className="flex">
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
            </div>
            <p className="text-xs text-gray-500">(1 Customer review)</p>
          </div>
          <p className="text-base text-gray-500 -mt-3">{details.description}</p>
          <div className="ss:flex block ss:w-[350px] w-[200px] gap-4">
            <div className="ss:w-52 w-full flex items-center justify-between text-gray-500 gap-4 border border-gray-400 p-3 ss:mb-0 mb-3">
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                <button
                  onClick={() => setBaseQty(baseQty === 1 ? (baseQty = 1) : baseQty - 1)}
                  className="border border-gray-400 h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  -
                </button>
                <span>{baseQty}</span>
                <button onClick={() => setBaseQty(baseQty + 1)} className="border border-gray-400 h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black">
                  +
                </button>
              </div>
            </div>
            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: details._id,
                    title: details.title,
                    image: details.image,
                    price: details.price,
                    quantity: baseQty,
                    description: details.description,
                  })
                ) & toast.success(`${details.title} is added`)
              }
              className="ss:w-[150px] w-[140px] bg-black text-white py-3 px-6 active:bg-gray-800"
            >
              add to cart
            </button>
          </div>
          <p className="text-base text-gray-500">
            Category: <span className="capitalize font-medium">{details.category}</span>
          </p>
        </div>
      </div>
      <ToastContainer position="top-left" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" />
    </div>
  );
};

export default ProductDisplay;
