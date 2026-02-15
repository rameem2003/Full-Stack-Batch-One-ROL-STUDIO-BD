import React from "react";
import Container from "../../common/Container";

const data = [
  {
    id: "01",
    label: "Expertise and Experience",
    description:
      "With years of experience in the sales and marketing industry, our team has a deep ",
  },

  {
    id: "02",
    label: "Expertise and Experience",
    description:
      "With years of experience in the sales and marketing industry, our team has a deep ",
  },

  {
    id: "03",
    label: "Expertise and Experience",
    description:
      "With years of experience in the sales and marketing industry, our team has a deep ",
  },

  {
    id: "04",
    label: "Expertise and Experience",
    description:
      "With years of experience in the sales and marketing industry, our team has a deep ",
  },

  {
    id: "05",
    label: "Expertise and Experience",
    description:
      "With years of experience in the sales and marketing industry, our team has a deep ",
  },
];

const WhyChooseUs = () => {
  return (
    <section className=" bg-[#F4F4F4] py-[110px]">
      <Container>
        <div className="flex flex-col flex-nowrap md:flex-row md:flex-wrap items-center gap-[30px] lg:gap-[20px] justify-between">
          <div className=" w-full md:w-[48%] lg:w-[48%] xl:w-[32%] ">
            <h2 className="text-[50px] w-[334px] font-bold">Why Choose Us?</h2>
            <p className=" font-normal text-base w-[287px] mt-3">
              Whether you're looking to switch to solar energy or upgrade your
              cable services, our sales and marketing company is here to help.
            </p>
          </div>
          {data.map((item) => (
            <div
              className=" hover:bg-red-600 group  w-full md:w-[48%] lg:w-[48%] xl:w-[32%]  py-[62px] px-[30px] bg-white rounded-[10px] mb-[30px]"
              key={item.id}
            >
              <h2 className=" font-bold text-[58px] leading-[30px] text-red-600 group-hover:text-white">
                {item.id}
              </h2>
              <h3 className=" mt-[27px] font-bold text-[24px] text-[#5C5C5C] group-hover:text-white">
                {item.label}
              </h3>
              <p className=" mt-3 text-[18px] font-normal leading-[23px] text-[#787878] group-hover:text-white">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
