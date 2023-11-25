import contact from "../../assets/images/un-contactUs.svg";
import SectionTitle from "../Shared/SectionTitle";
const Contact = () => {
  return (
    <div>
      <SectionTitle
        subHeading="Contact with us for More Information"
        heading="Get in Touch"
      ></SectionTitle>
      <div className="grid max-w-screen grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
        <div className="flex justify-center">
          <img src={contact} alt="" className="p-6 h-52 md:h-64" />
        </div>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="text-sm">
              Full name
            </label>
            <input
              id="name"
              type="text"
              placeholder="John Doe"
              className="w-full p-3 rounded bg-gray-800"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="john@example.com"
              className="w-full p-3 rounded bg-gray-800"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <textarea
              id="message"
              rows="3"
              placeholder="Write your message here..."
              className="w-full p-3 rounded bg-gray-800"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-sky-400 text-gray-900"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
