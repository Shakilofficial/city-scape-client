/* eslint-disable react/prop-types */
import { FaMapMarkerAlt, FaMoneyBillAlt, FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdvertisementCard = ({ ad }) => {
  return (
    <div className="px-4">
      <div className="advertisement-card bg-white hover:shadow-lg transition-all duration-300 p-4 rounded-lg h-auto">
        <div className="relative overflow-hidden group">
          <img
            src={ad.image}
            alt={`Property ${ad.title}`}
            className="w-full h-[240px] rounded-lg object-cover transition-transform duration-500 transform group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Link
              to={`/properties/${ad?._id}`}
              className="bg-sky-500 hover:bg-sky-700 text-white px-6 py-2 rounded-full transition-all duration-300"
            >
              Details
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center space-y-2 my-4">
          <h3 className="text-xl text-sky-600 font-bold">{ad.title}</h3>
          <p className="flex items-center text-gray-600">
            <FaMapMarkerAlt className="text-sky-500 mr-2" /> {ad.location}
          </p>
          <p className="flex items-center text-gray-600">
            <FaMoneyBillAlt className="text-sky-500 mr-2" /> Price: {ad.price}
          </p>
          <p className="flex items-center text-gray-600">
            <FaCheck className="text-sky-500 mr-2" />
            Status:
            {ad.status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdvertisementCard;
