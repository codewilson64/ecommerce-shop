import { Link } from "react-router-dom";
import { cart, profile_icon } from "../assets";
import { useSelector } from "react-redux";

const Header = () => {
  const productData = useSelector((state) => state.ecommerce.productData);
  const userInfo = useSelector((state) => state.ecommerce.userInfo);
  console.log(userInfo);

  return (
    <div className="w-full text-white bg-black sm:px-16 px-6 h-20 sticky top-0 z-[10]">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/ecommerce-shop">
          <div>
            <h1 className="font-bold font-poppins ss:text-3xl text-2xl">E-commerce</h1>
          </div>
        </Link>
        <div className="flex items-center gap-8 font-poppins">
          {/* <ul className="flex items-center gap-8 font-poppins">
            <li className="text-base font-semibold cursor-pointer">Home</li>
            <li className="text-base font-semibold cursor-pointer">Pages</li>
            <li className="text-base font-semibold cursor-pointer">Shop</li>
            <li className="text-base font-semibold cursor-pointer">Blog</li>
          </ul> */}
          <Link to="/cart">
            <div className="relative">
              <img src={cart} alt="cart" className="cursor-pointer" />
              <span className="absolute w-5 h-5 bottom-3 left-4 text-sm text-black font-poppins flex items-center justify-center font-semibold bg-white rounded-full">{productData.length}</span>
            </div>
          </Link>
          <Link to="/login">
            <img src={userInfo ? userInfo.image : profile_icon} alt="profile icon" className="w-10 h-10 border-2 rounded-full cursor-pointer" />
          </Link>
          {userInfo && <p className="ss:flex hidden">{userInfo.name}</p>}
        </div>
      </div>
    </div>
  );
};

export default Header;
