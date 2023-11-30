import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../Shared/SectionTitle";

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://city-scape-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="max-w-6xl mx-auto">
      <SectionTitle
        subHeading="What Our Clients Say"
        heading="Reviews"
      ></SectionTitle>
      <div className="my-10">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col bg-sky-50 p-12 rounded-md items-center justify-center my-8 mx-8 md:mx-24 space-y-8">
                <img
                  className="h-16 w-16 rounded-full"
                  src={review.image}
                  alt=""
                />
                <p>{review.description} </p>
                <h4 className="text-xl font-semibold text-sky-600">
                  {review.name}
                </h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Review;
