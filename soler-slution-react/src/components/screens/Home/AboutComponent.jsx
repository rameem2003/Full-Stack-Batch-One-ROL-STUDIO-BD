import React from "react";
import Container from "../../common/Container";
import about from "../../../assets/about.png";
const AboutComponent = () => {
  return (
    <section className="py-[80px] bg-red-600">
      <Container>
        <div className=" flex flex-col lg:flex-row gap-[70px] items-center justify-between">
          <div className=" w-full lg:w-1/2">
            <h2 className="text-[50px] font-bold text-white">Who We Are</h2>
            <p className="text-white text-base mt-1">
              Welcome to our sales and marketing company, where we specialize in
              helping customers snag great deals from the leading solar and
              cable companies in the DC, Maryland, and Virginia area.We
              understand that finding the right solar and cable solutions for
              your needs can be a daunting task, which is why we're here to make
              the process easier and more affordable for you.
            </p>

            <div className=" mt-[30px] flex items-center justify-start gap-4">
              <button className=" bg-white text-black px-[30px] py-2 rounded-full">
                Read More
              </button>
              <button className=" bg-black text-white px-[30px] py-2 rounded-full">
                Contact us today
              </button>
            </div>
          </div>
          <div className=" w-full lg:w-1/2">
            <img src={about} className=" w-full h-full" alt="about" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutComponent;
