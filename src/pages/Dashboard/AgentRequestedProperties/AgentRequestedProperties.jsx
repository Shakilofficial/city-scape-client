import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../../../api";
import Swal from "sweetalert2";
import SectionTitle from "../../../components/Shared/SectionTitle";

const AgentRequestedProperties = () => {
  const { data: properties = [], refetch } = useQuery({
    queryKey: ["properties"],
    queryFn: async () => {
      const res = await axiosSecure.get("/make-offer");
      return res.data;
    },
  });

  const handleAccept = async (id) => {
    try {
      const response = await axiosSecure.patch(`/accept-offer/${id}`);

      const data = response.data;
      if (data.success) {
        Swal.fire({
          title: "Success!",
          text: "Offer accepted successfully!",
          icon: "success",
        }).then(() => {
          refetch();
        });
      } else {
        console.error("Error accepting offer:", data.error);
      }
    } catch (error) {
      console.error("Error accepting offer:", error.message);
    }
  };

  const handleReject = async (id) => {
    try {
      const response = await axiosSecure.patch(`/reject-offer/${id}`);
      const data = response.data;
      if (data.success) {
        Swal.fire({
          title: "Success!",
          text: "Offer rejected successfully!",
          icon: "success",
        }).then(() => {
          refetch();
        });
      } else {
        console.error("Error rejecting offer:", data.error);
      }
    } catch (error) {
      console.error("Error rejecting offer:", error.message);
    }
  };

  return (
    <div className="overflow-x-auto">
      <SectionTitle heading="Requested Properties" />
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Property Title</th>
            <th className="py-2 px-4 border-b">Property Location</th>
            <th className="py-2 px-4 border-b">Buyer Email</th>
            <th className="py-2 px-4 border-b">Buyer Name</th>
            <th className="py-2 px-4 border-b">Offered Price</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((property) => (
            <tr key={property._id}>
              <td className="py-3 px-4 border-b">{property.title}</td>
              <td className="py-3 px-4 border-b">{property.location}</td>
              <td className="py-3 px-4 border-b">{property.buyerEmail}</td>
              <td className="py-3 px-4 border-b">{property.buyerName}</td>
              <td className="py-3 px-4 border-b">${property.offeredAmount}</td>
              <td className="py-3 px-4 border-b">
                <span
                  className={`${
                    property.status === "Pending"
                      ? "text-yellow-600"
                      : property.status === "Accepted"
                      ? "text-green-600"
                      : "text-red-600"
                  } font-semibold`}
                >
                  {property.status}
                </span>
              </td>
              <td className="py-3 px-4 border-b">
                {property.status === "Pending" && (
                  <div className="flex space-x-2">
                    <button
                      className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:shadow-outline-green"
                      onClick={() => handleAccept(property._id)}
                    >
                      Accept
                    </button>
                    <button
                      className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:shadow-outline-red"
                      onClick={() => handleReject(property._id)}
                    >
                      Reject
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AgentRequestedProperties;
