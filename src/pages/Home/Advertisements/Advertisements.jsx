import { useEffect, useState } from "react";
import SectionTitle from "../../../components/Shared/SectionTitle";
import AdvertisementCard from "./AdvertisementCard";
import { getAllProperties } from "../../../api/properties";

const Advertisements = () => {
  const [advertisements, setAdvertisements] = useState([]);

  useEffect(() => {
    getAllProperties().then((data) => {
      const filteredAdvertisements = data.filter(
        (ad) => ad.status === "Verified"
      );
      const sortedAdvertisements = filteredAdvertisements.sort(
        (a, b) => b.price - a.price
      );
      const topSixAdvertisements = sortedAdvertisements.slice(0, 6);
      setAdvertisements(topSixAdvertisements);
    });
  }, []);

  return (
    <div>
      <SectionTitle
        subHeading="Explore the Latest Property"
        heading="Advertisements"
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {advertisements.map((ad) => (
          <AdvertisementCard key={ad._id} ad={ad} />
        ))}
      </div>
    </div>
  );
};

export default Advertisements;
