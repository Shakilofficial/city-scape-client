import {
  FaCheckDouble,
  FaHome,
  FaList,
  FaListAlt,
  FaQuoteLeft,
  FaScrewdriver,
  FaUser,
  FaUserCircle,
  FaUserFriends,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import useAdmin from "../../hooks/useAdmin";

const Sidebar = () => {
  const [isAdmin] = useAdmin();

  return (
    <div className="w-80 min-h-screen bg-gray-900">
      <img src={logo} alt="" className="h-48 w-full" />

      <ul className="menu p-4 space-y-5">
        {isAdmin ? (
          <>
          <li className="p-2 bg-sky-200 rounded-md">
              <NavLink
                to="/dashboard/admin-profile"
                className="flex justify-start items-center gap-2 font-bold"
              >
                <FaUserCircle/>
                Admin Profile
              </NavLink>
            </li>
            <li className="p-2 bg-sky-200 rounded-md">
              <NavLink
                to="/dashboard/manage-properties"
                className="flex justify-start items-center gap-2 font-bold"
              >
                <FaScrewdriver/>
                Manage Properties
              </NavLink>
            </li>
            <li className="p-2 bg-sky-200 rounded-md">
              <NavLink
                to="/dashboard/manage-users"
                className="flex justify-start items-center gap-2 font-bold"
              >
                <FaUserFriends />
                Manage Users
              </NavLink>
            </li>
            <li className="p-2 bg-sky-200 rounded-md">
              <NavLink
                to="/dashboard/manage-reviews"
                className="flex justify-start items-center gap-2 font-bold"
              >
                <FaListAlt />
                Manage reviews
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li className="p-2 bg-sky-200 rounded-md">
              <NavLink
                to="/dashboard/profile"
                className="flex justify-start items-center gap-2 font-bold"
              >
                <FaUser></FaUser>
                My Profile
              </NavLink>
            </li>
            <li className="p-2 bg-sky-200 rounded-md">
              <NavLink
                to="/dashboard/wishlist"
                className="flex justify-start items-center gap-2 font-bold"
              >
                <FaList></FaList>
                Wishlist
              </NavLink>
            </li>
            <li className="p-2 bg-sky-200 rounded-md">
              <NavLink
                to="/dashboard/my-review"
                className="flex justify-start items-center gap-2 font-bold"
              >
                <FaQuoteLeft />
                My reviews
              </NavLink>
            </li>
            <li className="p-2 bg-sky-200 rounded-md">
              <NavLink
                to="/dashboard/bookings"
                className="flex justify-start items-center gap-2 font-bold"
              >
                <FaCheckDouble />
                Property bought
              </NavLink>
            </li>
          </>
        )}
        <div className="divider border border-sky-500"></div>
        <li className="p-2 bg-sky-200 rounded-md">
          <NavLink
            to="/"
            className="flex justify-start items-center gap-2 font-bold"
          >
            <FaHome />
            Home
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
