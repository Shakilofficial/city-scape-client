import { useQuery } from "@tanstack/react-query";

import SectionTitle from "../../../components/Shared/SectionTitle";
import axiosSecure from "../../../api";
import Swal from "sweetalert2";

const ManageProperties = () => {
  const { data: properties = [], refetch } = useQuery({
    queryKey: ["properties"],
    queryFn: async () => {
      const res = await axiosSecure.get("/properties");
      return res.data;
    },
  });

  const handleVerify = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Verify Property",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axiosSecure.patch(`/properties/verify/${id}`);
          refetch();
          Swal.fire({
            title: "Verified!",
            text: "Property has been verified.",
            icon: "success",
          });
        } catch (error) {
          console.error("Error verifying property:", error);
          // Handle error (e.g., show an alert)
        }
      }
    });
  };

  const handleReject = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, Reject Property",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axiosSecure.patch(`/properties/reject/${id}`);
          refetch();
          Swal.fire({
            title: "Rejected!",
            text: "Property has been rejected.",
            icon: "success",
          });
        } catch (error) {
          console.error("Error rejecting property:", error);
        }
      }
    });
  };

  return (
    <div>
      <SectionTitle heading="Manage Properties" />
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-4 border-b">Property Title</th>
              <th className="py-3 px-4 border-b">Property Location</th>
              <th className="py-3 px-4 border-b">Agent Name</th>
              <th className="py-3 px-4 border-b">Price</th>
              <th className="py-3 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {properties.map((property) => (
              <tr key={property._id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{property.title}</td>
                <td className="py-2 px-4 border-b">{property.location}</td>
                <td className="py-2 px-4 border-b">{property.agent.name}</td>
                <td className="py-2 px-4 border-b">{property.price}</td>
                <td className="py-2 px-4 border-b space-x-2">
                  {property.status === "Available" && (
                    <>
                      <button
                        onClick={() => handleVerify(property._id)}
                        className="text-sm font-bold bg-green-500 text-white py-1 px-2 rounded"
                      >
                        Verify
                      </button>
                      <button
                        onClick={() => handleReject(property._id)}
                        className="text-sm font-bold bg-red-500 text-white py-1 px-2 rounded"
                      >
                        Reject
                      </button>
                    </>
                  )}
                  {property.status === "Verified" && (
                    <span className="text-green-500">Verified</span>
                  )}
                  {property.status === "Rejected" && (
                    <span className="text-red-500">Rejected</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProperties;
