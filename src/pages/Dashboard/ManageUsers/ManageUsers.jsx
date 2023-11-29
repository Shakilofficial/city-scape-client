import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../../../api";
import SectionTitle from "../../../components/Shared/SectionTitle";
import { FaTrash, FaUserAlt, FaUserCog } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make Admin",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/admin/${id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "Updated !",
              text: "He is Admin Now",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleMakeAgent = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make Agent",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/agent/${id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "Updated !",
              text: "He is Agent Now",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleDeleteUser = (id) => {
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
        axiosSecure.delete(`/users/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <SectionTitle heading="Manage Users" />
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 border-b">User name</th>
            <th className="py-2 px-4 border-b">User email</th>
            <th className="py-2 px-4 border-b">Make admin</th>
            <th className="py-2 px-4 border-b">Make agent</th>
            <th className="py-2 px-4 border-b">Delete user</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{user.name}</td>
              <td className="py-2 px-4 border-b">{user.email}</td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => handleMakeAdmin(user._id)}
                  className="bg-blue-500 text-white py-1 px-2 rounded"
                >
                  <FaUserCog />
                </button>
              </td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => handleMakeAgent(user._id)}
                  className="bg-green-500 text-white py-1 px-2 rounded"
                >
                  <FaUserAlt />
                </button>
              </td>

              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => handleDeleteUser(user._id)}
                  className="bg-gray-500 text-white text-center py-1 px-2 rounded"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
