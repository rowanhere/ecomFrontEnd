import React, { useState } from "react";
import { ProductMenuButton } from "../ProductPage/ProductMenu";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
const ForgotComp = () => {
  return (
    <>
      <h1 className="text-2xl">Forgot password</h1>
      <span className="text-gray-400">
        No worries! Enter your email address below, and we'll send you a link to
        reset your password.
      </span>
      <form className="grid text-start mt-5 gap-y-3">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          className="outline-none border-2  p-2 rounded-lg"
          id="email"
          placeholder="Enter your email address"
        />
        <ProductMenuButton
          type={"submit"}
          className={"text-white bg-orange-500 mt-3 border-orange-500"}
        >
          Submit
        </ProductMenuButton>
      </form>
    </>
  );
};
const CheckMail = () => {
  return (
    <>
      <div className="flex justify-center mb-2 text-orange-400">
        <MdMarkEmailUnread size={60} />
      </div>
      <h1 className="text-2xl">Check your email</h1>
      <span className="text-gray-400">
        We sent a password reset link to your email. Please check your inbox
      </span>
      <div className="text-gray-400 mt-2">
        Didn't recive the email?{" "}
        <button className=" text-black font-bold">Resend</button>
      </div>
    </>
  );
};
const ChangePassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [checkPassword, setCheckPassword] = useState({
      password1: "",
      password2: "",
    });
  return (
    <>
    <h1 className="text-2xl">Create a New Password</h1>
    <span className="text-gray-400">
      Enter your new password below to complete the reset process. Ensure it's
      strong and secure
    </span>
    <form className="grid text-start mt-5 gap-y-3">
      <label htmlFor="password1">Password</label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          name="password1"
          required
          onChange={(e) =>
            setCheckPassword((prev) => {
              return { ...prev, password1: e.target.value };
            })
          }
          className="outline-none border-2 w-full  p-2 rounded-lg"
          id="password1"
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
      <label htmlFor="password2">Confirm your New password</label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          name="password2"
          required
          onChange={(e) =>
            setCheckPassword((prev) => {
              return { ...prev, password2: e.target.value };
            })
          }
          className={`outline-none ${
            checkPassword.password2 &&
            (checkPassword.password2 !== checkPassword.password1
              ? "border-red-500"
              : "border-green-500")
          } border-2 w-full  p-2 rounded-lg`}
          id="password2"
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
        {checkPassword.password2 &&
          (checkPassword.password2 !== checkPassword.password1
            ? "Password must match"
            : "")}
      </span>
      <ProductMenuButton
        type={"submit"}
        className={"text-white bg-orange-500 mt-3 border-orange-500"}
      >
        Submit
      </ProductMenuButton>
    </form>
    </>
  );
};
const ForgotPassword = () => {

  return <div className="font-josefin mt-20 text-center"></div>;
};

export default ForgotPassword;
