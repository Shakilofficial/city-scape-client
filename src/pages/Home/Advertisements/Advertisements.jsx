import { useEffect, useState } from "react";
import SectionTitle from "../../../components/Shared/SectionTitle";
import AdvertisementCard from "./AdvertisementCard";

const Advertisements = () => {
  const [advertisements, setAdvertisements] = useState([]);

  useEffect(() => {
    fetch("properties.json")
      .then((res) => res.json())
      .then((data) => {
        const sortedAdvertisements = data.sort((a, b) => b.price - a.price);
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
          <AdvertisementCard key={ad.title} ad={ad} />
        ))}
      </div>
    </div>
  );
};

export default Advertisements;
