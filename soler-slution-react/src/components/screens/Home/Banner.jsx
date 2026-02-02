import React from "react";
import Container from "../../common/Container";
import banner from "../../../assets/banner.png";

const Banner = () => {
  return (
    <section className=" mt-[33px]">
      <Container>
        <div className=" relative">
          <img className=" w-full h-full" src={banner} alt="banner" />
          <div className=" flex px-[60px] items-center absolute top-0 left-0 bg-linear-to-r from-[#000000] to-[#000000]/10   w-full h-full">
            <h1 className=" text-white font-bold text-lg text-center md:text-left md:text-5xl lg:text-[70px] leading-[20px] md:leading-[76px] md:w-[547px] uppercase">
              Solar <span className=" text-red-600">Solutions</span> for a
              Sustainable Tomorrow.
            </h1>
          </div>
          {/* <div className=" absolute top-0 left-0 bg-linear-[linear-gradient(90deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 41%, rgba(0, 0, 0, 0.49) 100%)]   w-full h-full">
            <h1>Banner</h1>
          </div> */}
        </div>
      </Container>
    </section>
  );
};

export default Banner;
