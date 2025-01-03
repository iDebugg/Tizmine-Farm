import React from "react";
import "../Styles/MyWork.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import image1 from "../assets/fishfarmingg.jpg";
import image2 from "../assets/Catfish.webp";
import image3 from "../assets/poultryChicken.webp";
import image4 from "../assets/turkeysinmd_jpegc37bd64551ecc92f4818e497bd9c57b1.jpeg";
import image5 from "../assets/nigerian-cattle.jpg";
import image6 from "../assets/Cows.jpg";
import image7 from "../assets/Eggspics.jpeg";
import image8 from "../assets/Turkey.jpg";
import image9 from "../assets/cassava_ogbomoso3_jpegc1b80459de59f66bd6fc83e4f846403e.jpeg";
import image10 from "../assets/image1.jpeg";
import image11 from "../assets/image2.jpeg";
import image12 from "../assets/image3.jpeg";
import image13 from "../assets/image4.jpeg";
import image14 from "../assets/image5.jpeg";
import image15 from "../assets/image6.jpeg";
import image16 from "../assets/image7.jpeg";
import image17 from "../assets/image8.jpeg";
import image18 from "../assets/image9.jpeg";
import image19 from "../assets/image10.jpeg";

const MyWork = () => {
  const images = [
    { src: image1, alt: "Farm View 1" },
    { src: image2, alt: "Farm View 2" },
    { src: image3, alt: "Farm View 3" },
    { src: image4, alt: "Farm View 4" },
    { src: image5, alt: "Farm View 5" },
    { src: image6, alt: "Farm View 6" },
    { src: image7, alt: "Farm View 7" },
    { src: image8, alt: "Farm View 8" },
    { src: image9, alt: "Farm View 9" },
    { src: image10, alt: "Farm View 10" },
    { src: image11, alt: "Farm View 11" },
    { src: image12, alt: "Farm View 12" },
    { src: image13, alt: "Farm View 13" },
    { src: image14, alt: "Farm View 14" },
    { src: image15, alt: "Farm View 15" },
    { src: image16, alt: "Farm View 16" },
    { src: image17, alt: "Farm View 17" },
    { src: image18, alt: "Farm View 18" },
    { src: image19, alt: "Farm View 19" },
  ];

  return (
    <section id="Portfolio" className="py-12 bg-gray-100 pb-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-green-700 italic text-4xl font-bold">Gallery</h2>
          <p className="text-lg text-gray-600 mt-2">
            Explore our farm, animals, and products up close.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          className="rounded-lg overflow-hidden"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="h-60 sm:h-80">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default MyWork;
