import { useDispatch, useSelector } from "react-redux";
import { MdOutlineClose } from "react-icons/md";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { decrementQuantity, deleteItem, incrementQuantity, resetCart } from "../redux/ecommerceSlice";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

const CartItem = () => {
  const dispatch = useDispatch();

  const productData = useSelector((state) => state.ecommerce.productData);

  return (
    <div className="md:w-2/3 max-w-[500px] mx-auto pr-0">
      <div className="w-full">
        <h2 className="font-poppins text-2xl">Your Cart</h2>
      </div>
      <div>
        {productData.map((item) => (
          <div key={item._id} className="flex items-center justify-between sm:gap-3 gap-6 mt-6">
            <div className="flex items-center gap-2">
              <MdOutlineClose onClick={() => dispatch(deleteItem(item._id))} className="text-xl cursor-pointer" />
              <img src={item.image} alt="productImage" className="sm:w-32 w-20 sm:h-32 h-20 object-cover" />
            </div>

            <div>
              <h2 className="w-52 md:mb-4 mb-2">{item.title}</h2>

              <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border border-gray-400 p-3">
                <p className="text-sm">Quantity</p>
                <div className="flex items-center gap-4 text-sm font-semibold">
                  <button
                    onClick={() =>
                      dispatch(
                        decrementQuantity({
                          _id: item._id,
                          title: item.title,
                          image: item.image,
                          price: item.price,
                          quantity: 1,
                          description: item.description,
                        })
                      )
                    }
                    className="border border-gray-400 h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() =>
                      dispatch(
                        incrementQuantity({
                          _id: item._id,
                          title: item.title,
                          image: item.image,
                          price: item.price,
                          quantity: 1,
                          description: item.description,
                        })
                      )
                    }
                    className="border border-gray-400 h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <p className="w-14">${item.quantity * item.price}</p>
          </div>
        ))}
      </div>
      <button onClick={() => dispatch(resetCart())} className="bg-black text-white mt-8 ml-7 py-1 px-6 hover:bg-gray-700 duration-300">
        Empty Cart
      </button>
      <Link to="/ecommerce-shop">
        <button className="flex items-center md:mb-0 mb-4 mt-8 ml-7 gap-1 text-gray-500 hover:text-black duration-300">
          <span>
            <HiOutlineArrowLeft />
          </span>
          Go Shopping
        </button>
      </Link>
      <ToastContainer position="top-left" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" />
    </div>
  );
};

export default CartItem;
