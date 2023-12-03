import { useEffect, useState } from "react";
import { FaDollarSign, FaUser } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import Modal from "react-modal";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axiosSecure from "../../api";
import useAuth from "../../hooks/useAuth";
import "./modal.css";
import { getAllReviews } from "../../api/properties";
Modal.setAppElement("#root");

const PropertyDetails = () => {
  const [reviews, setReviews] = useState([]);
  const [isReviewModalOpen, setReviewModalOpen] = useState(false);
  const [newReview, setNewReview] = useState("");
  const { user } = useAuth();
  const property = useLoaderData();
  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    getAllReviews().then((data) => {
      const filteredReviews = data.filter((review) => review.propertyId === id);
      setReviews(filteredReviews);
    });
  }, [id]);

  const handleAddToWishlist = () => {
    if (user && user.email && property && property._id) {
      const wishlistItem = {
        propertyId: property._id,
        email: user.email,
        name: user.displayName,
        title: property.title,
        image: property.image,
        price: property.price,
        status: property.status,
        location: property.location,
        agent_name: property.agent.name,
        agent_image: property.agent.image,
      };

      axiosSecure
        .post("/wishlist", wishlistItem)
        .then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${property.title} added to your wishlist`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((error) => {
          console.error("Error adding to wishlist:", error);
        });
    }
  };

  const handleAddReview = () => {
    if (user && user.email && property && property._id && newReview) {
      const reviewData = {
        propertyId: property._id,
        email: user.email,
        image: user.photoURL,
        name: user.displayName,
        title: property.title,
        agent_name: property.agent.name,
        description: newReview,
      };

      axiosSecure
        .post("/reviews", reviewData)
        .then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            setReviewModalOpen(false);

            axiosSecure
              .get(`/reviews?propertyId=${property._id}`)
              .then((response) => setReviews(response.data))
              .catch((error) =>
                console.error("Error fetching reviews:", error)
              );

            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Review added successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((error) => {
          console.error("Error adding review:", error);
        });
    }
  };

  return (
    <div className="my-6 px-4">
      <div className="max-w-3xl mx-auto p-2">
        {/* Property Details */}
        <div className="flex justify-between items-center px-4 mb-4">
          <h1 className="text-2xl font-bold">{property.title}</h1>
          <button
            className="bg-blue-500 text-sm text-white px-4 py-2 rounded-full hover:bg-blue-700"
            onClick={handleAddToWishlist}
          >
            Add to Wishlist
          </button>
        </div>
        <div className="mb-4">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-92 rounded-lg object-cover"
          />
        </div>
        <div className="mb-4 flex justify-center gap-6 items-center">
          <p className="flex justify-center items-center text-gray-600">
            <MdLocationOn className="text-sky-500 mr-2" />
            {property.location}
          </p>
          <p className="flex justify-center items-center">
            <FaUser className="text-sky-500 mr-2" /> {property.agent.name}
          </p>
          <p className="flex justify-center items-center text-lg font-bold">
            <FaDollarSign className="text-sky-500 mr-1" />
            {property.price}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-gray-700">{property.details.description}</p>
        </div>
      </div>
      <div className="mt-6 max-w-7xl mx-auto text-center">
        {/* Other property details */}
        <h2 className="text-2xl font-bold text-sky-400 mb-4">
          Customer Reviews
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-2">
          {reviews.map((review) => (
            <li
              key={review._id}
              className="review-item bg-white rounded-lg shadow-md p-4 mb-4"
            >
              <div className="flex flex-col justify-center items-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="h-24 w-24 rounded-full object-cover"
                />
              </div>
              <h3 className="font-bold text-xl mb-2">{review.name}</h3>
              <p className="text-gray-700">{review.description}</p>
            </li>
          ))}
        </ul>

        <button
          className="add-review-button text-sm rounded-lg"
          onClick={() => setReviewModalOpen(true)}
        >
          Add Review
        </button>

        <Modal
          isOpen={isReviewModalOpen}
          onRequestClose={() => setReviewModalOpen(false)}
          contentLabel="Add Review Modal"
          className="modal-content text-center"
          overlayClassName="modal-overlay"
          style={{
            content: {
              position: "absolute",
              backgroundColor: "#D9F2FF",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "400px",
              borderRadius: "8px",
              padding: "20px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            },
            overlay: {
              backgroundColor: "#54ECFF",
              zIndex: "1000",
            },
          }}
        >
          <h2>Add Review</h2>
          <textarea
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            className="review-textarea"
          />
          <button onClick={handleAddReview} className="submit-review-button">
            Submit Review
          </button>
        </Modal>
      </div>
    </div>
  );
};

export default PropertyDetails;
