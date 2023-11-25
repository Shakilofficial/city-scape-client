import SectionTitle from "../Shared/SectionTitle";

const Faq = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <SectionTitle
          subHeading="How it works"
          heading="Frequently Asked Questions"
        ></SectionTitle>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
          <details>
            <summary className="py-2 outline-none cursor-pointer font-semibold text-sky-600 focus:underline">
              How can I list my property on City Scape?
            </summary>
            <div className="px-4 pb-4">
              <p>
                To list your property on City Scape, navigate to the Dashboard
                page, click on "Add Property," and fill out the required
                information, including property details, images, and pricing.
                Our team will then review and verify your listing.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer font-semibold text-sky-600 focus:underline">
              What information should I include in my property listing?
            </summary>
            <div className="px-4 pb-4">
              <p>
                Include essential details such as property type, location,
                number of bedrooms and bathrooms, amenities, and pricing.
                High-quality images showcasing different areas of the property
                can significantly enhance your listing's appeal.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer font-semibold text-sky-600 focus:underline">
              How does the property verification process work? 
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                Our verification process ensures the accuracy and reliability of
                property listings. After submission, our team reviews the
                information provided. Once verified, your property will receive
                a "Verified" status, boosting its credibility among potential
                buyers or renters.
              </p>
              <p>
                If additional information is required or discrepancies are
                found, you'll be notified for clarification or updates.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Faq;
