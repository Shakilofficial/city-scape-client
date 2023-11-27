import { Link } from "react-router-dom";

const Offer = () => {
  return (
    <div className="p-6 py-12 bg-sky-500 text-gray-900 rounded-md">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <h2 className="text-center text-3xl tracking-tight font-extrabold">
            Exclusive Offer
            <br />
            on Your Dream Home
          </h2>
          <div className="space-x-2 text-center py-2 lg:py-0">
            <span>Unlock your dream home with</span>
            <span className="font-bold text-lg">Special Discounts!</span>
          </div>
          <Link
            to="/property"
            className="px-5 mt-4 lg:mt-0 py-2 rounded-md block text-white font-bold  bg-gray-900 border-gray-900 hover:bg-blue-900"
          >
            Explore Properties
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Offer;
