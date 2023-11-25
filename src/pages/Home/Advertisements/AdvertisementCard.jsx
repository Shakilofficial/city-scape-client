/* eslint-disable react/prop-types */
import { FaDollarSign, FaInfo, FaLocationDot } from "react-icons/fa6";

const AdvertisementCard = ({ ad }) => {
  return (
    <div className="px-4">
      <div className="advertisement-card bg-gray-200 hover:bg-gray-300 shadow-sm p-1 rounded-lg h-[440px]">
        <img
          src={ad.image}
          alt={`Property ${ad.title}`}
          className="w-full h-[240px] rounded-lg"
        />
        <div className="flex flex-col justify-center items-center space-y-1">
          <h3 className="text-xl text-sky-600 font-bold mt-2">{ad.title}</h3>
          <p className="flex justify-center items-center gap-1">
            <FaLocationDot /> {ad.location}
          </p>
          <p className="flex justify-center items-center gap-1">
            <FaDollarSign /> Price: {ad.price}
          </p>
          <p className="flex justify-center items-center gap-1">
            <FaInfo /> Verification Status: {ad.status}
          </p>
          <button className="bg-blue-500 hover:bg-sky-700 font-semibold text-white px-6 py-2 rounded-lg mt-2">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvertisementCard;
