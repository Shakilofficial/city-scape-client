import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/Shared/SectionTitle";
import axiosSecure from "../../../api";
import Swal from "sweetalert2";

const ManageReviews = () => {
  const { data: reviews = [], refetch } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosSecure.get("/reviews");
      return res.data;
    },
  });
  console.log(reviews);

  const handleDeleteReview = (id) => {
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
        axiosSecure.delete(`/reviews/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "The review has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <SectionTitle heading="Manage Reviews" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map((review) => (
          <div
            key={review._id}
            className="max-w-xs mx-auto mb-6 overflow-hidden rounded-md shadow-md bg-white dark:bg-gray-900 dark:text-gray-100 transition duration-300 transform hover:scale-105"
          >
            <img
              className="object-cover w-full h-48 md:h-72"
              src={review.image}
              alt={review.name}
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                {review.title}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {review.description}
              </p>
              <div className="flex justify-between items-center">
                <div className="text-xs">
                  <p className="text-gray-700 dark:text-gray-300">
                    By {review.name}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    {review.email}
                  </p>
                </div>
                <button
                  onClick={() => handleDeleteReview(review._id)}
                  className="flex items-center justify-center w-20 h-8 font-semibold text-sm text-white rounded-md bg-red-500 hover:bg-red-600 focus:outline-none focus:shadow-outline-red transition duration-300"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageReviews;
