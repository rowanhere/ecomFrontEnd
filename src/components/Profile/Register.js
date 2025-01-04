import React, { useEffect, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { ProductMenuButton } from "../ProductPage/ProductMenu";
import { ProfileBottom } from "./Login";
import { Bounce, toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [checkPassword, setCheckPassword] = useState({
    password: "",
    confirmPassword: "",
  });
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
  
    useEffect(() => {
      const getUserId = localStorage.getItem("userId");
      if (getUserId) {
        navigate("/profile");
      }
    }, []);
  
  const validateForm = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formEntries = Object.fromEntries(formData.entries());
    if (formEntries.password !== formEntries.confirmPassword) {
      toast.warn("Password should match", toastConfig);
      return;
    }
    delete formEntries.confirmPassword;
    const id = toast.loading("Please wait...", toastConfig);
    try {
      const registerUser = await axios.post(
        process.env.REACT_APP_API_URL + "auth/register",
        formEntries
      );
      const message = registerUser.data.message;

      toast.update(id, {
        render: message,
        type: "success",
        isLoading: false,
        autoClose: 5000,
      });
      navigate("/profile/login");
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
    <div className="font-josefin mt-6 text-center">
      <h1 className="text-2xl">Create your Luxeshop account</h1>
      <span className="text-gray-400">
        Sign up to buy products from Luxeshop.
      </span>
      <form onSubmit={validateForm} className="grid text-start mt-5 gap-y-3">
        <label htmlFor="email">Username</label>
        <input
          required
          type="text"
          name="username"
          className="outline-none border-2  p-2 rounded-lg"
          id="username"
          placeholder="Enter your username"
        />
        <label htmlFor="email">Email</label>
        <input
          required
          type="email"
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
            required
            onChange={(e) =>
              setCheckPassword((prev) => {
                return { ...prev, password: e.target.value };
              })
            }
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
        <label htmlFor="confirmPassword">Confirm Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            required
            onChange={(e) =>
              setCheckPassword((prev) => {
                return { ...prev, confirmPassword: e.target.value };
              })
            }
            className={`outline-none ${
              checkPassword.confirmPassword &&
              (checkPassword.confirmPassword !== checkPassword.password
                ? "border-red-500"
                : "border-green-500")
            } border-2 w-full  p-2 rounded-lg`}
            id="confirmPassword"
            placeholder="Confirm your password"
          />
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="text-gray-400 text-2xl absolute right-0 top-1/2 -translate-y-1/2 mr-2"
          >
            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </span>
        </div>
        <span className="-mb-3 text-red-600">
          {checkPassword.confirmPassword &&
            (checkPassword.confirmPassword !== checkPassword.password
              ? "Password must match"
              : "")}
        </span>
        <ProductMenuButton
          type={"submit"}
          className={"text-white bg-orange-500 mt-3 border-orange-500"}
        >
          Sign Up
        </ProductMenuButton>
      </form>
      <ProfileBottom
        Ortext={"Or Sign up with"}
        accountText1={"Already have an account?"}
        accountText2={"Sign in"}
        redirectLink={"login"}
      />
    </div>
  );
};

export default Register;
