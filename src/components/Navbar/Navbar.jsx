import { useState } from "react";
import logo from "../../assets/images/LogoI.png";
import { Link } from "react-router-dom";
import avatarImg from "../../assets/images/placeholder.jpg";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = (
    <>
      <li>
        <Link to="/" className="text-sky-600 hover:text-sky-800">
          Home
        </Link>
      </li>
      <li>
        <Link to="/properties" className="text-sky-600 hover:text-sky-800">
          All Properties
        </Link>
      </li>
      <li>
        <Link to="/dashboard/wishlist" className="text-sky-600 hover:text-sky-800">
          Dashboard
        </Link>
      </li>
    </>
  );

  const navButton = user ? (
    <button
      onClick={logOut}
      className="py-2 px-3 bg-sky-600 rounded-md text-white"
    >
      Log Out
    </button>
  ) : (
    <Link className="py-2 px-3 bg-sky-600 rounded-md text-white" to="/login">
      Log In
    </Link>
  );
  return (
    <nav>
      <div className="p-3 shadow-md rounded-md">
        <div className="flex justify-between">
          <div className="flex space-x-4 md:gap-16 lg:gap-48">
            {/* Logo */}
            <div className="flex justify-center items-center">
              <Link
                to="/"
                href="#"
                className="flex justify-center items-center gap-2 text-gray-700 hover:text-gray-900"
              >
                <img className="h-12 w-12" src={logo} alt="" />
                <span className="font-bold text-sky-600 text-xl">
                  City Scape
                </span>
              </Link>
            </div>

            {/* Primary Nav */}
            <div className="hidden font-semibold text-lg list-none md:flex items-center space-x-4">
              {navLinks}
            </div>
          </div>

          {/* Secondary Nav */}
          <div className="hidden md:flex gap-4 items-center font-semibold">
            <div className="">
              {/* Avatar */}
              <img
                className="rounded-full"
                referrerPolicy="no-referrer"
                src={user && user.photoURL ? user.photoURL : avatarImg}
                alt="profile"
                height="30"
                width="30"
              />
            </div>
            <div>{navButton}</div>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button
              className="mobile-menu-button"
              onClick={handleMobileMenuToggle}
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu ${isMobileMenuOpen ? "" : "hidden"} md:hidden`}
      >
        <div className="p-4 font-semibold text-center shadow-lg rounded-lg space-y-3 bg-blue-100  list-none">
          {navLinks}
          <div className="flex justify-center gap-4">
            {/* Avatar */}
            <img
              className="rounded-full"
              referrerPolicy="no-referrer"
              src={user && user.photoURL ? user.photoURL : avatarImg}
              alt="profile"
              height="30"
              width="30"
            />
            <div>{navButton}</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
