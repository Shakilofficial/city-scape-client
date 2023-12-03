import Swal from "sweetalert2";
import { imageUpload } from "../../../api/utils";
import SectionTitle from "../../../components/Shared/SectionTitle";
import useAuth from "../../../hooks/useAuth";

import axiosSecure from "../../../api";

const AgentAddProperties = () => {
  const { user } = useAuth();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const form = event.target;
      const title = form.title.value;
      const location = form.location.value;
      const email = user.email;
      const agent = {
        name: user?.displayName,
        image: user?.photoURL,
      };
      const price = form.price.value;
      const image = form.image.files[0];

      const image_url = await imageUpload(image);

      const property = {
        title,
        location,
        email,
        agent,
        image: image_url?.data?.display_url,
        status: "Available",
        price,
      };

      axiosSecure
        .post("/add-properties", property)
        .then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `Added to your Property`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((error) => {
          console.error("Error Added to your Property:", error);
        });
    } catch (error) {
      console.error("Error adding property:", error);

      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "An unexpected error occurred. Please try again later.",
      });
    }
  };

  return (
    <div>
      <SectionTitle heading="Add a Property" />
      <div>
        <form
          onSubmit={handleSubmit}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="title" className="block mb-2 text-sm">
                Property Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Enter Property Title"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-sky-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="location" className="block mb-2 text-sm">
                Property Location
              </label>
              <input
                type="text"
                name="location"
                id="location"
                placeholder="Enter Property Location"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-sky-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                Select Image:
              </label>
              <input
                required
                type="file"
                id="image"
                name="image"
                accept="image/*"
              />
            </div>
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                Agent Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                readOnly
                value={user.displayName}
                placeholder="Agent's Name"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-sky-500 bg-gray-200 text-gray-900"
              />
            </div>
            <div>
              <label htmlFor="agentEmail" className="block mb-2 text-sm">
                Agent Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={user.email}
                placeholder="Agent's Email"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-sky-500 bg-gray-200 text-gray-900"
              />
            </div>
            <div>
              <label htmlFor="price" className="block mb-2 text-sm">
                Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                required
                placeholder="Enter Price"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-sky-500 bg-gray-200 text-gray-900"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-sky-500 w-full font-semibold rounded-md py-3 text-white"
            >
              Add Property
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AgentAddProperties;
