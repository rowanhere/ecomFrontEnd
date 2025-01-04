import React, { useEffect, useState } from "react";
import { FaDiscord, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { ProductMenuButton } from "../ProductPage/ProductMenu";
import { FcGoogle } from "react-icons/fc";
import { Bounce, toast } from "react-toastify";
import axios from "axios";

export const ProfileBottom = ({
  Ortext,
  accountText1,
  accountText2,
  redirectLink,
}) => {
  return (
    <>
      <div className="mt-4 flex items-center">
        <div className="w-full bg-gray-300 h-[2px]"></div>
        <div className="grow shrink-0 mx-2 text-gray-400">{Ortext}</div>
        <div className="w-full bg-gray-300 h-[2px]"></div>
      </div>
      <div className="flex gap-2 mt-4">
        <ProductMenuButton className={"flex items-center"}>
          <FcGoogle size={25} />
          <span className="mt-1 text-gray-600"> Google</span>
        </ProductMenuButton>
        <ProductMenuButton className={"flex items-center"}>
          <FaDiscord size={25} className="text-blue-600" />
          <span className="mt-1 text-gray-600">Discord</span>
        </ProductMenuButton>
      </div>
      <div className="mt-4 text-gray-400 text-[1rem]">
        {accountText1}{" "}
        <Link
          to={`/profile/${redirectLink}`}
          className="text-black font-semibold"
        >
          {accountText2}
        </Link>
      </div>
    </>
  );
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getUserId = localStorage.getItem("userId");
    if (getUserId) {
      navigate("/profile");
    }
  }, []);

  const toastConfig = {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formEntries = Object.fromEntries(formData.entries());
    const id = toast.loading("Please wait...", toastConfig);
    try {
      const registerUser = await axios.post(
        process.env.REACT_APP_API_URL + "auth/login",
        formEntries
      );
      const message = registerUser.data.message;
      localStorage.setItem("userId", message);
      toast.update(id, {
        render: "Logged in sucessfully",
        type: "success",
        isLoading: false,
        autoClose: 1000,
        onClose:()=>{
          window.location.reload();
        }
      });
      
    } catch (err) {
      const errorMessage = err?.response?.data?.message ?? "Unknown error";

      toast.update(id, {
        render: errorMessage,
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });
    }
  };
  return (
    <div className="font-josefin mt-20 text-center">
      <h1 className="text-2xl">Welcome back to Luxeshop</h1>
      <span className="text-gray-400">
        Enter your username and password to continue.
      </span>
      <form onSubmit={handleLogin} className="grid text-start mt-5 gap-y-3">
        <label htmlFor="email">Email or Username</label>
        <input
          type="text"
          name="email"
          className="outline-none border-2  p-2 rounded-lg"
          id="email"
          placeholder="Enter your email address"
        />
        <label htmlFor="password">Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            className="outline-none border-2 w-full  p-2 rounded-lg"
            id="password"
            placeholder="Enter your password"
          />
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="text-gray-400 text-2xl absolute right-0 top-1/2 -translate-y-1/2 mr-2"
          >
            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              name="remember"
              className="h-[15px] aspect-square "
            />
            <label htmlFor="remember" className="text-gray-500 mt-1">
              Remember me
            </label>
          </div>
          <Link
            to={"/profile/forgotpassword"}
            className="underline underline-offset-[2px]"
          >
            Forgot password
          </Link>
        </div>
        <ProductMenuButton
          type={"submit"}
          className={"text-white bg-orange-500 mt-3 border-orange-500"}
        >
          Sign In
        </ProductMenuButton>
      </form>
      <ProfileBottom
        Ortext={"Or login with"}
        accountText1={"Don't have an account?"}
        accountText2={"Register"}
        redirectLink={"register"}
      />
    </div>
  );
};

export default Login;
