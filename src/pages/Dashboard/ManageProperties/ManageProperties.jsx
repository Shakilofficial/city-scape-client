import { useQuery } from "@tanstack/react-query";

import SectionTitle from "../../../components/Shared/SectionTitle";
import axiosSecure from "../../../api";

const ManageProperties = () => {
  const { data: properties = [], refetch } = useQuery({
    queryKey: ["properties"],
    queryFn: async () => {
      const res = await axiosSecure.get("/properties");
      return res.data;
    },
  });
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
              <th className="py-3 px-4 border-b">Price Range</th>
              <th className="py-3 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {properties.map((property) => (
              <tr key={property.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{property.title}</td>
                <td className="py-2 px-4 border-b">{property.location}</td>
                <td className="py-2 px-4 border-b">{property.agent.name}</td>
                <td className="py-2 px-4 border-b">{property.price}</td>
                <td className="py-2 px-4 border-b space-x-2">
                {property.status === "Available" && (
                    <>
                      <button
                        onClick={() => handleVerify(property.id)}
                        className="text-sm font-bold bg-green-500 text-white py-1 px-2 rounded"
                      >
                        Verify
                      </button>
                      <button
                        onClick={() => handleReject(property.id)}
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
