import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axiosSecure from "../../../api";
import useAuth from "../../../hooks/useAuth";

const MakeOffer = () => {
  const [offeredAmount, setOfferedAmount] = useState("");
  const [buyingDate, setBuyingDate] = useState("");

  const properties = useLoaderData();
  const { id } = useParams();

  const property = properties.find((pr) => pr._id === id);
  const { user } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user && user.email && property && property._id) {
      try {
        const response = await axiosSecure.post("/make-offer", {
          propertyId: property._id,
          title: property.title,
          location: property.location,
          image: property.image,
          status: 'Pending',
          offeredAmount,
          buyingDate,
          buyerEmail: user.email,
          buyerName: user.displayName,
        });

        const data = response.data;
        if (data.success) {
          Swal.fire({
            title: "Success!",
            text: "Offer made successfully!",
            icon: "success",
          }).then(() => {
            window.location.href = "/dashboard/wishlist";
          });
        } else {
          console.error("Error making offer:", data.message);
        }
      } catch (error) {
        console.error("Error making offer:", error.message);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Make an Offer
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Property Title</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md"
            value={property.title}
            readOnly
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">
            Property Location
          </label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md"
            value={property.location}
            readOnly
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Agent Name</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md"
            value={property.agent_name}
            readOnly
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Offered Amount</label>
          <input
            type="number"
            className="w-full p-3 border border-gray-300 rounded-md"
            value={offeredAmount}
            onChange={(e) => setOfferedAmount(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Buyer Email</label>
          <input
            type="email"
            className="w-full p-3 border border-gray-300 rounded-md"
            value={user.email}
            readOnly
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Buyer Name</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md"
            value={user.displayName}
            readOnly
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Buying Date</label>
          <input
            type="date"
            className="w-full p-3 border border-gray-300 rounded-md"
            value={buyingDate}
            onChange={(e) => setBuyingDate(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-700"
        >
          Make Offer
        </button>
      </form>
    </div>
  );
};

export default MakeOffer;
