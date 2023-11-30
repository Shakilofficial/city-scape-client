import Swal from "sweetalert2";
import axiosSecure from "../../../api";
import SectionTitle from "../../../components/Shared/SectionTitle";
import useProperties from "../../../hooks/useProperties";
import { Link } from "react-router-dom";

const AgentAddedProperties = () => {
  const [properties, refetch] = useProperties();
    console.log(properties);
    
    const handleDelete = (id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            axiosSecure.delete(`/properties/${id}`).then((res) => {
              if (res.data.deletedCount > 0) {
                refetch();
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
              }
            });
          }
        });
      };

  return (
    <div>
      <SectionTitle heading="My Added Properties" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {properties.map((property) => (
          <div
            key={property._id}
            className="bg-white rounded-xl overflow-hidden shadow-md mb-4"
          >
            <img
              className="w-full h-48 object-cover"
              src={property.image}
              alt={property.title}
            />
            <div className="p-4">
              <h3 className="text-gray-700 font-bold text-xl mb-2">
                {property.title}
              </h3>
              <p className="text-gray-600">{property.location}</p>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-sm text-gray-500">
                    Agent: {property.agent.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    Status: {property.status}
                  </p>
                  <p className="text-sm text-gray-500">
                    Price: {property.price}
                  </p>
                </div>
                <div className="flex space-x-2">
                  {property.status === "Rejected" && (
                    <Link to={`/dashboard/update-properties/${property._id}`}
                      className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
                    >
                      Update
                    </Link>
                  )}
                  <button
                    onClick={() => handleDelete(property._id)}
                    className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 focus:outline-none focus:shadow-outline-red"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentAddedProperties;
