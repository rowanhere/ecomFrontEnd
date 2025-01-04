import React, { createContext, useState } from "react";
import MenuBar from "./components/MenuBar";
import HomeMain from "./components/HomePage/HomeMain";
import NavBar from "./components/NavBar";
import SearchMain from "./components/SearchPage/SearchMain";
import ProductMain from "./components/ProductPage/ProductMain";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import ErrorBoundary from "./components/helpers/ErrorBoundary";
import Register from "./components/Profile/Register";
import Login from "./components/Profile/Login";
import ProfileMain from "./components/Profile/ProfileMain";
import { ToastContainer } from "react-toastify";
import ForgotPassword from "./components/Profile/ForgotPassword";
import WishListMain from "./components/WishList/WishListMain";
export const TriggerCart = createContext(null);

function Layout({ alert }) {
  return (
    <>
      <NavBar
        notificationAlert={alert.notificationAlert}
        cartAlert={alert.cartAlert}
      />
      <Outlet />
      <MenuBar />
      <ScrollRestoration
        getKey={(location, matches) => {
          // default behavior
          return location.key;
        }}
      />
    </>
  );
}
function App() {
  const [alert, setAlert] = useState({
    notificationAlert: false,
    cartAlert: false,
  });
  const checkCart = () => {
    setAlert((prev) => ({
      notificationAlert: !prev.notificationAlert,
      cartAlert: !prev.cartAlert,
    }));
  };
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorBoundary />,
      element: <Layout alert={alert} />, // Layout wraps around child routes
      children: [
        { path: "/", element: <HomeMain /> },
        { path: "/search", element: <SearchMain /> },
        { path: "/products/:id", element: <ProductMain /> },
        { path: "/wishlist", element: <WishListMain /> },
        {
          path: "/profile",
          element: <ProfileMain />,
          children: [
            // Define ProfileMain as a child route
            { path: "login", element: <Login /> }, // Nested under /profile
            { path: "register", element: <Register /> }, // Nested under /profile
            { path: "forgotpassword", element: <ForgotPassword /> }, // Nested under /profile
          ],
        },
      ],
    },
  ]);

  return (
    <TriggerCart.Provider value={checkCart}>
      <RouterProvider router={router} />
      <ToastContainer />
    </TriggerCart.Provider>
  );
}

export default App;
