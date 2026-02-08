import React from "react";
import Container from "../../common/Container";
import banner from "../../../assets/banner.png";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

import { Autoplay } from "swiper/modules";

const Banner = () => {
  return (
    <section className=" mt-[33px]">
      <Container>
        <Swiper
          loop={true}
          autoplay={{
            delay: 3000,
            // disableOnInteraction: true,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            {" "}
            <div className=" relative">
              <img className=" w-full h-full" src={banner} alt="banner" />
              <div className=" flex px-[60px] items-center absolute top-0 left-0 bg-[linear-gradient(90deg,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_41%,rgba(0,0,0,0.49)_100%)]  w-full h-full">
                <h1 className=" text-white font-bold text-lg text-center md:text-left md:text-5xl lg:text-[70px] leading-[20px] md:leading-[76px] md:w-[547px] uppercase">
                  Solar <span className=" text-red-600">Solutions</span> for a
                  Sustainable Tomorrow.
                </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className=" relative">
              <img className=" w-full h-full" src={banner} alt="banner" />
              <div className=" flex px-[60px] items-center absolute top-0 left-0 bg-[linear-gradient(90deg,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_41%,rgba(0,0,0,0.49)_100%)]  w-full h-full">
                <h1 className=" text-white font-bold text-lg text-center md:text-left md:text-5xl lg:text-[70px] leading-[20px] md:leading-[76px] md:w-[547px] uppercase">
                  Solar <span className=" text-red-600">Solutions</span> for a
                  Sustainable Tomorrow.
                </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className=" relative">
              <img className=" w-full h-full" src={banner} alt="banner" />
              <div className=" flex px-[60px] items-center absolute top-0 left-0 bg-[linear-gradient(90deg,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_41%,rgba(0,0,0,0.49)_100%)]  w-full h-full">
                <h1 className=" text-white font-bold text-lg text-center md:text-left md:text-5xl lg:text-[70px] leading-[20px] md:leading-[76px] md:w-[547px] uppercase">
                  Solar <span className=" text-red-600">Solutions</span> for a
                  Sustainable Tomorrow.
                </h1>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
  );
};

export default Banner;
