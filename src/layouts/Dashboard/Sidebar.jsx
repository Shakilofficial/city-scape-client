
import { FaBars, FaCheckDouble, FaCheckSquare, FaHistory, FaHome, FaList, FaListAlt, FaQuoteLeft, FaScrewdriver, FaUser, FaUserCircle, FaUserClock, FaUserFriends } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import useAdmin from "../../hooks/useAdmin";
import useAgent from "../../hooks/useAgent";

const Sidebar = () => {
  const [isAdmin] = useAdmin();
  const [isAgent] = useAgent();

  return (
    <div className="w-80 min-h-screen bg-gray-900">
      <img src={logo} alt="" className="h-48 w-full" />

      <ul className="menu p-4 space-y-5">
        {isAdmin && (
          <>
            <li className="p-2 bg-sky-200 rounded-md">
              <NavLink to="/dashboard/admin-profile" className="flex justify-start items-center gap-2 font-bold">
                <FaUserCircle /> Admin Profile
              </NavLink>
            </li>
            <li className="p-2 bg-sky-200 rounded-md">
              <NavLink to="/dashboard/manage-properties" className="flex justify-start items-center gap-2 font-bold">
                <FaScrewdriver /> Manage Properties
              </NavLink>
            </li>
            <li className="p-2 bg-sky-200 rounded-md">
              <NavLink to="/dashboard/manage-users" className="flex justify-start items-center gap-2 font-bold">
                <FaUserFriends /> Manage Users
              </NavLink>
            </li>
            <li className="p-2 bg-sky-200 rounded-md">
              <NavLink to="/dashboard/manage-reviews" className="flex justify-start items-center gap-2 font-bold">
                <FaListAlt /> Manage Reviews
              </NavLink>
            </li>
          </>
        )}

        {!isAdmin && isAgent && (
          <>
            <li className="p-2 bg-sky-200 rounded-md">
              <NavLink to="/dashboard/agent-profile" className="flex justify-start items-center gap-2 font-bold">
                <FaUserClock /> Agent Profile
              </NavLink>
            </li>
            <li className="p-2 bg-sky-200 rounded-md">
              <NavLink to="/dashboard/added-properties" className="flex justify-start items-center gap-2 font-bold">
                <FaBars /> My Added Properties
              </NavLink>
            </li>
            <li className="p-2 bg-sky-200 rounded-md">
              <NavLink to="/dashboard/sold-properties" className="flex justify-start items-center gap-2 font-bold">
                <FaCheckSquare /> My Sold Properties
              </NavLink>
            </li>
            <li className="p-2 bg-sky-200 rounded-md">
              <NavLink to="/dashboard/requested-properties" className="flex justify-start items-center gap-2 font-bold">
                <FaHistory /> Requested Properties
              </NavLink>
            </li>
          </>
        )}

        {!isAdmin && !isAgent && (
          <>
            <li className="p-2 bg-sky-200 rounded-md">
              <NavLink to="/dashboard/profile" className="flex justify-start items-center gap-2 font-bold">
                <FaUser /> My Profile
              </NavLink>
            </li>
            <li className="p-2 bg-sky-200 rounded-md">
              <NavLink to="/dashboard/wishlist" className="flex justify-start items-center gap-2 font-bold">
                <FaList /> Wishlist
              </NavLink>
            </li>
            <li className="p-2 bg-sky-200 rounded-md">
              <NavLink to="/dashboard/my-review" className="flex justify-start items-center gap-2 font-bold">
                <FaQuoteLeft /> My Reviews
              </NavLink>
            </li>
            <li className="p-2 bg-sky-200 rounded-md">
              <NavLink to="/dashboard/bookings" className="flex justify-start items-center gap-2 font-bold">
                <FaCheckDouble /> Property Bought
              </NavLink>
            </li>
          </>
        )}

        <div className="divider border border-sky-500"></div>
        <li className="p-2 bg-sky-200 rounded-md">
          <NavLink to="/" className="flex justify-start items-center gap-2 font-bold">
            <FaHome /> Home
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

