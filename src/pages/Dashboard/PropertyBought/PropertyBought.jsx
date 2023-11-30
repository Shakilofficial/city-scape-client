
import SectionTitle from "../../../components/Shared/SectionTitle";
import usePropertyBought from "../../../hooks/usePropertyBought";

const PropertyBought = () => {
  const [buyingList, refetch] = usePropertyBought();

  const handlePay = (propertyId, offeredAmount) => {
    // Implement the logic to redirect to the payment page and handle the payment
    console.log(
      `Redirect to payment for propertyId: ${propertyId} with amount: ${offeredAmount}`
    );
  };

  return (
    <div className="container mx-auto mt-8">
      <SectionTitle heading="My Booking List" />

      {buyingList.map((property) => (
        <div
          key={property._id}
          className="bg-white p-6 rounded-md shadow-md mb-6 flex flex-col md:flex-row items-center md:items-start"
        >
          <img
            src={property.image}
            alt={property.title}
            className="w-full md:w-48 h-48 md:h-auto object-cover rounded-md mb-4 md:mb-0"
          />
          <div className="ml-0 md:ml-6">
            <h3 className="text-2xl font-bold mb-2">{property.title}</h3>
            <p className="text-gray-600 mb-2">Location: {property.location}</p>
            <p className="text-gray-600 mb-2">Agent: {property.agent_name}</p>
            <p className="mb-2">
              Offered Amount:{" "}
              <span className="font-bold">${property.offeredAmount}</span>
            </p>
            <p className="mb-2">Status: {property.status}</p>
            {property.status === "Accepted" && (
              <button
                onClick={() => handlePay(property._id, property.offeredAmount)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Pay
              </button>
            )}
            {property.status === "accepted" && (
              <p className="text-green-500">
                Payment Transaction ID: {property.transactionId}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyBought;
