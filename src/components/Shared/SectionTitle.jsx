/* eslint-disable react/prop-types */
const SectionTitle = ({ heading, subHeading }) => {
    return (
      <div className="text-center text-sky-600 space-y-2 my-10 md:w-4/12 mx-auto">
        <h6 className="text-xl font-bold">{subHeading}</h6>
        <h2 className="text-4xl font-extrabold">{heading}</h2>
      </div>
    );
  };
  
  export default SectionTitle;
  