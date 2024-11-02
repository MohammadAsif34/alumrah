import React from "react";
import {
  createBrowserRouter,
  createHashRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Error404 from "./pages/error404/Error404";
import Navbar from "./components/navbar/Navbar";
import TripList from "./pages/trip-list/TripList";
import Footer from "./components/footer/Footer";
import Regsiter from "./pages/register/Regsiter";
import TripDetails from "./pages/trip-detail/TripDetails";

const App = () => {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };
  const router = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/trip-list", element: <TripList /> },
        { path: "/trip-details", element: <TripDetails /> },
        // { path: "/", element: <Home /> },

        { path: "/login", element: <Login /> },
        { path: "/register", element: <Regsiter /> },
      ],
    },
    { path: "*", element: <Error404 /> },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
