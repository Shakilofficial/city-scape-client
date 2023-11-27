import { useEffect, useState } from "react";
import { getAllProperties } from "../../api/properties";
import SectionTitle from "../../components/Shared/SectionTitle";
import PropertyCard from "./PropertyCard";

const AllProperties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    getAllProperties().then((data) => setProperties(data));
  }, []);
  return (
    <div>
      <div>
        <SectionTitle
          subHeading="Explore the All Available Property"
          heading="ALL PROPERTIES"
        ></SectionTitle>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {properties.map((property) => (
          <PropertyCard key={property._id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default AllProperties;
