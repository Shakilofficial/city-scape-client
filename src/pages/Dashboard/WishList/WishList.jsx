import Swal from "sweetalert2";
import axiosSecure from "../../../api";
import useWishList from "../../../hooks/useWishList";
import { Link } from "react-router-dom";

const WishList = () => {
  const [wishlist, refetch] = useWishList();

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
        axiosSecure.delete(`/wishlist/${id}`).then((res) => {
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
    <div className="mx-auto my-10">
      <h2 className="text-3xl text-center font-bold mb-4 text-gray-800">
        My Wishlist ({wishlist.length})
      </h2>
      <table className="min-w-full border border-gray-300 rounded-md overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 border-b">Property</th>
            <th className="py-2 px-4 border-b">Location</th>
            <th className="py-2 px-4 border-b">Agent</th>
            <th className="py-2 px-4 border-b">Verification</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {wishlist.map((property) => (
            <tr key={property._id} className="bg-white">
              <td className="py-4 px-4 border-b">
                <div className="flex items-center">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-16 h-16 object-cover mr-4 rounded-md"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{property.title}</h3>
                  </div>
                </div>
              </td>
              <td className="py-4 px-4 border-b">{property.location}</td>
              <td className="py-4 px-4 border-b">
                <div className="flex items-center">
                  <img
                    src={property.agent_image}
                    alt={property.agent_name}
                    className="w-8 h-8 object-cover rounded-full mr-2"
                  />
                  <p>{property.agent_name}</p>
                </div>
              </td>
              <td className="py-4 px-4 border-b">{property.status}</td>
              <td className="py-4 px-4 border-b">${property.price}</td>
              <td className="py-4 px-4 border-b">
                <div className="flex justify-end space-x-2">
                  <Link
                    to={`/dashboard/make-offer/${property._id}`}
                    className="bg-blue-500 text-white px-3 py-1 rounded-full hover:bg-blue-700"
                  >
                    Offer
                  </Link>
                  <button
                    onClick={() => handleDelete(property._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-700"
                  >
                    Remove
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WishList;
