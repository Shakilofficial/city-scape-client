import { createBrowserRouter } from "react-router-dom";
import {
  getAllProperties,
  getSingleProperties,
  getSingleWishList,
} from "../api/properties";
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
import MyReviews from "../pages/Dashboard/MyReviews/MyReviews";
import PropertyBought from "../pages/Dashboard/PropertyBought/PropertyBought";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import ManageReviews from "../pages/Dashboard/ManageReviews/ManageReviews";
import ManageProperties from "../pages/Dashboard/ManageProperties/ManageProperties";
import AdminProfile from "../pages/Dashboard/AdminProfile/AdminProfile";
import AgentProfile from "../pages/Dashboard/AgentProfile/AgentProfile";
import AgentAddedProperties from "../pages/Dashboard/AgentAddedProperties/AgentAddedProperties";
import AgentSoldProperties from "../pages/Dashboard/AgentSoldProperties/AgentSoldProperties";
import AgentRequestedProperties from "../pages/Dashboard/AgentRequestedProperties/AgentRequestedProperties";
import UpdateProperties from "../pages/Dashboard/AgentAddedProperties/UpdateProperties";
import Payment from "../pages/Dashboard/Payment/Payment";

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
      //user Routes
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
      {
        path: "/dashboard/my-review",
        element: <MyReviews />,
      },
      {
        path: "/dashboard/bookings",
        element: <PropertyBought />,
      },
      {
        path: "/dashboard/payment/",
        element: <Payment />,
      },

      //agent Routes
      {
        path: "/dashboard/agent-profile",
        element: <AgentProfile />,
      },
      {
        path: "/dashboard/added-properties",
        element: <AgentAddedProperties />,
      },
      {
        path: "/dashboard/update-properties/:id",
        element: <UpdateProperties />,
        loader: () => getAllProperties(),
      },
      {
        path: "/dashboard/sold-properties",
        element: <AgentSoldProperties />,
      },
      {
        path: "/dashboard/requested-properties",
        element: <AgentRequestedProperties />,
      },

      //admin routes
      {
        path: "/dashboard/manage-users",
        element: <ManageUsers />,
      },
      {
        path: "/dashboard/manage-reviews",
        element: <ManageReviews />,
      },
      {
        path: "/dashboard/manage-properties",
        element: <ManageProperties />,
      },
      {
        path: "/dashboard/manage-properties",
        element: <ManageProperties />,
      },
      {
        path: "/dashboard/admin-profile",
        element: <AdminProfile />,
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
]);
