import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import requisky modules
import { Link } from "react-router-dom";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Banner = () => {
  const slides = [
    {
      "image":"https://i.ibb.co/Q903MvT/banner6.jpg",
      "title": "Luxury Living",
      "subtitle": "Experience the epitome of luxury with our exclusive properties. Find your dream home today."
    },
    {
      "image":"https://i.ibb.co/9wLvMnG/banner2.jpg",
      "title": "Family-Friendly Homes",
      "subtitle": "Discover spacious and comfortable homes designed for the perfect family living experience."
    },
    {
      "image":"https://i.ibb.co/CHTynXX/banner4.jpg",
      "title": "City Living skyefined",
      "subtitle": "Explore modern townhouses and apartments offering contemporary living in the heart of the city."
    },
    {
      "image":"https://i.ibb.co/JccXrjt/banner3.jpg",
      "title": "Beachfront Bliss",
      "subtitle": "Wake up to the sound of waves in our contemporary beachfront villas. Live the beach side dream."
    },
    {
      "image":"https://i.ibb.co/V9jSyBf/banner5.jpg",
      "title": "Exclusive Penthouse Collection",
      "subtitle": "Indulge in luxury with our exclusive penthouses. Panoramic views and sophisticated living await."
    }
  ]

  return (
    <div className="mb-6 rounded-lg">
      <Swiper
        spaceBetween={50}
        centeskySlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="bg-cover bg-center h-[750px] text-white rounded-lg"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="bg-gradient-to-r from-[#151515] to-rgba(21, 21, 21, 0.00) 100%); rounded-lg bg-opacity-90 h-full space-y-4 flex flex-col justify-center items-start">
                <div className="pl-16 md:ml-32 max-w-xl">
                  <h1 className="text-2xl md:text-7xl text-white font-bold mb-8">
                    {slide.title}
                  </h1>
                  <p className="font-light text-lg mb-5">{slide.subtitle}</p>
                  <div className="pt-10 space-x-5">
                    <Link to="/signUp">
                      <button className="px-4 py-2 btn text-white text-lg capitalize bg-sky-500 rounded-md shadow hover:bg-sky-700">
                        Discover More
                      </button>
                    </Link>
                    <Link to="/signUp">
                      <button className="px-4 py-2 btn btn-outline text-white font-bold text-lg capitalize">
                        Latest Project
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
