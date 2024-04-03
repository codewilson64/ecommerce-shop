import React from "react";
import { google, github } from "../assets";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../redux/ecommerceSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch(
          addUser({
            _id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );
        setTimeout(() => {
          navigate("/ecommerce-shop");
        }, 1500);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Log Out Successfully!");
        dispatch(removeUser());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="max-w-[540px] mx-auto flex flex-col items-center justify-center gap-10 py-20 px-10">
      <div className="w-full ss:flex block items-center justify-center gap-5">
        <div onClick={handleGoogleLogin} className="text-base w-60 mx-auto h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300">
          <img src={google} alt="google-icon" className="w-8" />
          <span className="text-sm text-gray-900">Sign in with Google</span>
        </div>

        <button onClick={handleSignOut} className="flex items-center justify-center ss:w-36 w-60 mx-auto ss:mt-0 mt-3 bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-900 duration-300">
          Sign Out
        </button>
      </div>

      <div className="w-full ss:flex block items-center justify-center gap-5">
        <div className="text-base w-60 mx-auto h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300">
          <img src={github} alt="github-icon" className="w-8" />
          <span className="text-sm text-gray-900">Sign in with Github</span>
        </div>
        <button className="flex items-center justify-center ss:w-36 w-60 mx-auto ss:mt-0 mt-3 bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-900 duration-300">Sign Out</button>
      </div>

      <ToastContainer position="top-left" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" />
    </div>
  );
};

export default Login;
