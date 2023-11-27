import { FaDollarSign, FaUser } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import axiosSecure from "../../api";
import useAuth from "../../hooks/useAuth";

const PropertyDetails = () => {
  const property = useLoaderData();
  const { user } = useAuth();

  const handleAddToWishlist = () => {
    if (user && user.email && property && property._id) {
      const wishlistItem = {
        propertyId: property._id,
        email: user.email,
        name: user.displayName,
        title: property.title,
        image: property.image,
        price: property.price,
      };
      axiosSecure
        .post("/wishlist", wishlistItem)
        .then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${property.title} added to your wishlist`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((error) => {
          console.error("Error adding to wishlist:", error);
        });
    }
  };

  return (
    <div className="my-6">
      <div className="max-w-3xl mx-auto p-2">
        {/* Property Details */}
        <div className="flex justify-between items-center px-4 mb-4">
          <h1 className="text-2xl font-bold">{property.title}</h1>
          <button
            className="bg-blue-500 text-sm text-white px-4 py-2 rounded-full hover:bg-blue-700"
            onClick={handleAddToWishlist}
          >
            Add to Wishlist
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
