import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SectionTitle from "../../../components/Shared/SectionTitle";
import axiosSecure from "../../../api";
import Swal from "sweetalert2";

const UpdateProperties = () => {
  const properties = useLoaderData();
  const { id } = useParams();
  const property = properties.find((pr) => pr._id === id);

  const [formData, setFormData] = useState({
    image: property.image,
    title: property.title,
    location: property.location,
    price: property.price,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosSecure.patch(`/properties/update/${id}`, {
        image: formData.image,
        title: formData.title,
        location: formData.location,
        price: formData.price,
      });

      const data = response.data;
      if (data.success) {
        Swal.fire({
          title: "Success!",
          text: "Property updated successfully!",
          icon: "success",
        }).then(() => {
          window.location.href ="/dashboard/added-properties";
        });
      } else {
        console.error("Error updating property:", data.error);
      }
    } catch (error) {
      console.error("Error updating property:", error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <SectionTitle heading="Update The Property"></SectionTitle>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Property Image</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md"
            value={formData.image}
            onChange={handleChange}
            name="image"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Property Title</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md"
            value={formData.title}
            onChange={handleChange}
            name="title"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">
            Property Location
          </label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md"
            value={formData.location}
            onChange={handleChange}
            name="location"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Agent Name</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md"
            value={property.agent.name}
            readOnly
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Agent Email</label>
          <input
            type="email"
            className="w-full p-3 border border-gray-300 rounded-md"
            value={property.email}
            readOnly
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Price Range</label>
          <input
            type="number"
            className="w-full p-3 border border-gray-300 rounded-md"
            value={formData.price}
            onChange={handleChange}
            name="price"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-700"
        >
          Update Property
        </button>
      </form>
    </div>
  );
};

export default UpdateProperties;
