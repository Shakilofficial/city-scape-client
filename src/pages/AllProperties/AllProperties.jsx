import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { getAllProperties } from "../../api/properties";
import SectionTitle from "../../components/Shared/SectionTitle";
import PropertyCard from "./PropertyCard";

const AllProperties = () => {
  const [properties, setProperties] = useState([]);
  const [sortByPrice, setSortByPrice] = useState(false);

  useEffect(() => {
    getAllProperties().then((data) => setProperties(data));
  }, []);

  const handleSortByPrice = () => {
    setSortByPrice(!sortByPrice);
  };

  const sortedProperties = [...properties].sort((a, b) => {
    if (sortByPrice) {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  const verifiedProperties = sortedProperties.filter(
    (property) => property.status === "Verified"
  );

  return (
    <div>
      <Helmet>
        <title>City Scape | Explore All Properties</title>
      </Helmet>
      <div>
        <SectionTitle
          subHeading="Explore the All Available Property"
          heading="ALL PROPERTIES"
        ></SectionTitle>
        <button className="px-3 py-1 text-md font-semibold bg-sky-600 text-white m-4 rounded-md" onClick={handleSortByPrice}>
          Sort by Price {sortByPrice ? "(Low to High)" : "(High to Low)"}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {verifiedProperties.map((property) => (
          <PropertyCard key={property._id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default AllProperties;
