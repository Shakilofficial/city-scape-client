import {
  FaCheckDouble,
  FaHome,
  FaList,
  FaQuoteLeft,
  FaUser,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import SectionTitle from "../../components/Shared/SectionTitle";

const Dashboard = () => {
  return (
    <div className="">
      <div className="flex">
        {/* dashboard side bar */}
        <div className="w-80 min-h-screen bg-gray-900">
          <SectionTitle heading="City Scape"></SectionTitle>

          <ul className="menu p-4 space-y-5">
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
        {/* dashboard content */}
        <div className="flex-1 p-8">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
