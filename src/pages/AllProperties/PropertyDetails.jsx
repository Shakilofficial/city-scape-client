import { useState } from "react";
import { FaDollarSign, FaUser } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { useLoaderData } from "react-router-dom";

const PropertyDetails = () => {
  const property = useLoaderData();
  const [isInWishlist, setIsInWishlist] = useState(false);

  // Toggle wishlist status
  const handleToggleWishlist = async () => {
    try {
      // Assuming _id is the property ID
      const { _id } = property;

      // Update wishlist status in the database
      const response = await fetch(`/wishlist/${_id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isInWishlist: !isInWishlist,
        }),
      });
      const data = await response.json();

      // Update local state
      setIsInWishlist(data.isInWishlist);
    } catch (error) {
      console.error("Error updating wishlist status:", error);
    }
  };

  return (
    <div className="my-6">
      <div className="max-w-3xl mx-auto p-2">
        {/* Property Details */}
        <div className="flex justify-between items-center px-4 mb-4">
          <h1 className="text-2xl font-bold">{property.title}</h1>
          <button
            className={`bg-blue-500 text-white px-4 py-2 rounded-full ${
              isInWishlist ? "bg-red-500" : "hover:bg-blue-700"
            }`}
            onClick={handleToggleWishlist}
          >
            {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
          </button>
        </div>
        <div className="mb-4">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-92 rounded-lg object-cover"
          />
        </div>
        <div className="mb-4 flex justify-center gap-6 items-center">
          <p className="flex justify-center items-center text-gray-600">
            <MdLocationOn className="text-sky-500 mr-2" />
            {property.location}
          </p>
          <p className="flex justify-center items-center">
            <FaUser className="text-sky-500 mr-2" /> {property.agent.name}
          </p>
          <p className="flex justify-center items-center text-lg font-bold">
            <FaDollarSign className="text-sky-500 mr-1" />
            {property.price}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-gray-700">{property.details.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
