import { createBrowserRouter } from "react-router-dom";
import { getSingleProperties, getSingleWishList } from "../api/properties";
import Dashboard from "../layouts/Dashboard/Dashboard";
import Main from "../layouts/Main";
import AllProperties from "../pages/AllProperties/AllProperties";
import PropertyDetails from "../pages/AllProperties/PropertyDetails";
import MakeOffer from "../pages/Dashboard/WishList/MakeOffer";
import WishList from "../pages/Dashboard/WishList/WishList";
import ErrorPage from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/Dashboard/Profile/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/properties",
        element: (
          <PrivateRoute>
            <AllProperties />
          </PrivateRoute>
        ),
      },
      {
        path: "/properties/:id",
        element: (
          <PrivateRoute>
            <PropertyDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) => getSingleProperties(params.id),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
      {
        path: "/dashboard/wishlist",
        element: <WishList />,
      },
      {
        path: "/dashboard/make-offer/:id",
        element: <MakeOffer />,
        loader: () => getSingleWishList(),
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
]);
