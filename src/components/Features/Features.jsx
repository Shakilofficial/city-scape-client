import SectionTitle from "../Shared/SectionTitle";

const Features = () => {
  return (
    <section className="p-4 lg:p-8 text-sky-200">
      <div className="container mx-auto space-y-12">
        <SectionTitle
          subHeading="Explore City Scape with More"
          heading="Features"
        ></SectionTitle>
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <img
            src="https://source.unsplash.com/640x480/?1"
            alt=""
            className="h-80 bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 bg-gray-900">
            <span className="text-xs uppercase text-gray-400">
              Find Your Dream Home
            </span>
            <h3 className="text-3xl font-bold">
              Discover Exclusive Properties
            </h3>
            <p className="my-6 text-gray-400">
              Explore a curated selection of homes in prime locations. From
              modern apartments to charming cottages, we have the perfect home
              for you.
            </p>
            <button type="button" className="self-start">
              Explore Properties
            </button>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
          <img
            src="https://source.unsplash.com/640x480/?2"
            alt=""
            className="h-80 bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 bg-gray-900">
            <span className="text-xs uppercase text-gray-400">
              Sell Your Property
            </span>
            <h3 className="text-3xl font-bold">List with Confidence</h3>
            <p className="my-6 text-gray-400">
              Ready to sell? Our platform provides the tools and exposure you
              need to showcase your property to potential buyers. Join now and
              list your property with confidence.
            </p>
            <button type="button" className="self-start">
              List Your Property
            </button>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <img
            src="https://source.unsplash.com/640x480/?3"
            alt=""
            className="h-80 bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 bg-gray-900">
            <span className="text-xs uppercase text-gray-400">
              Join Our Community
            </span>
            <h3 className="text-3xl font-bold">
              Connect with Real Estate Enthusiasts
            </h3>
            <p className="my-6 text-gray-400">
              Become a part of our community. Share insights, discuss property
              trends, and connect with fellow real estate enthusiasts. Your
              dream property is just a conversation away.
            </p>
            <button type="button" className="self-start">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
