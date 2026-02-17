import React, { useRef } from "react";
import Container from "../../common/Container";
import image from "../../../assets/image.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

const data = [
  {
    title: "Solar Solutions",
    description:
      "Harness the power of the sun and embrace clean, renewable energy with our solar solutions.",
    contentImage: image,
  },
  {
    title: "Solar Solutions",
    description:
      "Harness the power of the sun and embrace clean, renewable energy with our solar solutions.",
    contentImage: image,
  },
  {
    title: "Solar Solutions",
    description:
      "Harness the power of the sun and embrace clean, renewable energy with our solar solutions.",
    contentImage: image,
  },
  {
    title: "Solar Solutions",
    description:
      "Harness the power of the sun and embrace clean, renewable energy with our solar solutions.",
    contentImage: image,
  },
  {
    title: "Solar Solutions",
    description:
      "Harness the power of the sun and embrace clean, renewable energy with our solar solutions.",
    contentImage: image,
  },

  {
    title: "Solar Solutions",
    description:
      "Harness the power of the sun and embrace clean, renewable energy with our solar solutions.",
    contentImage: image,
  },
  {
    title: "Solar Solutions",
    description:
      "Harness the power of the sun and embrace clean, renewable energy with our solar solutions.",
    contentImage: image,
  },
  {
    title: "Solar Solutions",
    description:
      "Harness the power of the sun and embrace clean, renewable energy with our solar solutions.",
    contentImage: image,
  },

  {
    title: "Solar Solutions",
    description:
      "Harness the power of the sun and embrace clean, renewable energy with our solar solutions.",
    contentImage: image,
  },
  {
    title: "Solar Solutions",
    description:
      "Harness the power of the sun and embrace clean, renewable energy with our solar solutions.",
    contentImage: image,
  },
  {
    title: "Solar Solutions",
    description:
      "Harness the power of the sun and embrace clean, renewable energy with our solar solutions.",
    contentImage: image,
  },
];

const Experience = () => {
  const swiperRef = useRef();
  return (
    <section className=" py-[115px]">
      <Container>
        <div>
          <div className=" flex items-center justify-between">
            <h2 className=" font-bold text-3xl leading-[40px] lg:text-[50px] lg:leading-[85px] text-black">
              Our Expertise and Experience
            </h2>

            <div className=" flex gap-5">
              <button
                // ref={prevRef}
                onClick={() => swiperRef.current?.slidePrev()}
                className=" cursor-pointer flex items-center justify-center w-10 h-10 rounded-full bg-red-600"
              >
                <ChevronLeft className=" text-white" />
              </button>
              <button
                // ref={nextRef}
                onClick={() => swiperRef.current?.slideNext()}
                className=" cursor-pointer flex items-center justify-center w-10 h-10 rounded-full bg-red-600"
              >
                <ChevronRight className=" text-white" />
              </button>
            </div>
          </div>
        </div>

        <div className=" mt-[25px] ">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            // navigation={true}
            // navigation={{
            //   prevEl: prevRef.current,
            //   nextEl: nextRef.current,
            // }}
            // onInit={(swiper) => {
            //   // Must wait for the swiper instance to be initialized before setting the elements
            //   swiper.navigation.init();
            //   swiper.navigation.update();
            // }}

            breakpoints={{
              320: {
                slidesPerView: 1,
                // spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            {data.map((card, index) => (
              <SwiperSlide>
                <div className="  relative overflow-hidden">
                  <img
                    className=" w-full  rounded-[10px]"
                    src={card.contentImage}
                    alt={card.title}
                  />
                  <div className=" rounded-[10px] py-6 px-5 absolute top-0 left-0 w-full h-full bg-[linear-gradient(180deg,rgba(19,19,19,1)_11%,rgba(19,19,19,0.21)_100%)]">
                    <h3 className=" font-bold text-[24px] leading-[31px] text-white w-[134px]">
                      {card.title}
                    </h3>
                    <p className=" font-normal text-base leading-[22px] text-white mt-[18px]">
                      {card.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default Experience;
