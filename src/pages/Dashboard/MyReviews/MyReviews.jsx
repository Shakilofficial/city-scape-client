import axiosSecure from "../../../api";
import Swal from "sweetalert2";
import useReviews from "../../../hooks/useReview";
import SectionTitle from "../../../components/Shared/SectionTitle";

const MyReviews = () => {
  const [reviews, refetch] = useReviews();

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
      <SectionTitle heading="My Reviews"></SectionTitle>
      {reviews.map((review) => (
        <div
          key={review._id}
          className="bg-white p-4 mb-4 shadow-md rounded-md"
        >
          <p className="text-lg font-semibold mb-2">
            Property Title: {review.title}
          </p>
          <p className="text-gray-600">Agent Name: {review.agent_name}</p>
          <p className="mt-2">Review Description: {review.description}</p>
          <button
            onClick={() => handleDeleteReview(review._id)}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default MyReviews;
