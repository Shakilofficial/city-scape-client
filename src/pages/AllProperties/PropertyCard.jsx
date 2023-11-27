/* eslint-disable react/prop-types */

import { FaDollarSign, FaCheck } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

const PropertyCard = ({ property }) => {
  const { _id, image, title, location, agent, status, price } = property;

  return (
    <div className="w-[324px] h-[420px] mx-auto bg-white shadow-md rounded-md overflow-hidden transition-transform duration-300 transform hover:scale-105">
      <div className="aspect-w-4 aspect-h-3">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-[180px]"
          style={{ minHeight: "100%" }}
        />
      </div>

      <div className="p-4 flex flex-col items-center">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="flex items-center text-gray-600 mb-2">
          <MdLocationOn className="text-sky-500 mr-2" />
          {location}
        </p>

        <div className="flex items-center mb-4">
          <img
            src={agent.image}
            alt={agent.name}
            className="w-10 h-10 border-3 border-sky-500 rounded-full mr-2"
          />
          <p className=" text-gray-700">{agent.name}</p>
        </div>

        <div className="flex items-center mb-2">
          <p
            className={`flex justify-center items-center gap-1 ${
              status === "Available" ? "text-green-500" : "text-red-500"
            } mr-2`}
          >
            <FaCheck className="mr-1" />
            {status}
          </p>

          <p className="flex justify-center items-center gap-1 text-lg font-bold">
            <FaDollarSign className="text-sky-500 mr-1" />
            {price}
          </p>
        </div>

        <Link
          to={`/properties/${_id}`}
          className="bg-blue-500 text-white text-sm px-4 py-2 rounded-full hover:bg-blue-700"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
