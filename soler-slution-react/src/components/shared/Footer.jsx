import React from "react";
import Container from "../common/Container";
import { Facebook, Instagram, Mail, Phone, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className=" bg-black">
      <Container>
        <div className=" py-[46px]">
          <p className=" text-[18px] text-white font-light leading-[31px]">
            Whether you're looking to switch to solar energy or upgrade your
            cable services, our sales and marketing company is here to help.
            Contact us today to start saving on your energy bills and enjoy
            reliable connectivity from the leading solar and cable companies in
            the DC, Maryland, and Virginia area. Snag the best deals with us and
            embrace a brighter and more connected future.
          </p>
        </div>
      </Container>

      <div className=" w-full h-[1px] bg-white"></div>

      <Container>
        <div className=" flex flex-col md:flex-row md:flex-wrap py-[25px] ">
          <div className=" w-full md:w-full  py-5  lg:py-[75px] px-[45px] lg:w-[30%] border-r border-white">
            <img src="/footerlogo.png" alt="logo" />

            <p className=" mt-[30px] text-white text-base leading-[27px]">
              Contact us today to explore our services and take advantage of the
              great deals available from the leading solar and cable companies
              in the DC, Maryland, and Virginia area. Let us be your trusted
              partner in finding the best solutions for your energy and
              connectivity needs.
            </p>
          </div>
          <div className=" w-full md:w-1/2  py-5  lg:py-[117px] px-[45px] lg:w-[15%] border-r border-white">
            <h3 className=" text-white text-base font-normal mb-2">
              Quick Links
            </h3>

            <ul>
              <li>
                <a
                  className=" font-light text-base text-white leading-[35px]"
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className=" font-light text-base text-white leading-[35px]"
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className=" font-light text-base text-white leading-[35px]"
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className=" font-light text-base text-white leading-[35px]"
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className=" font-light text-base text-white leading-[35px]"
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Home
                </a>
              </li>
            </ul>
          </div>
          <div className=" w-full md:w-1/2 py-5  lg:py-[117px] px-[45px] lg:w-[25%] border-r border-white">
            <h3 className=" text-white text-base font-normal mb-2">Services</h3>

            <ul>
              <li>
                <a
                  className=" font-light text-base text-white leading-[35px]"
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Consultation and Support
                </a>
              </li>
              <li>
                <a
                  className=" font-light text-base text-white leading-[35px]"
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className=" font-light text-base text-white leading-[35px]"
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className=" font-light text-base text-white leading-[35px]"
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className=" font-light text-base text-white leading-[35px]"
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Home
                </a>
              </li>
            </ul>
          </div>
          <div className=" w-full md:w-full py-5  lg:py-[117px] px-[45px] lg:w-[30%]">
            <h3 className=" text-white text-base font-normal mb-2">
              Contact Us
            </h3>

            <div className=" mt-[17px]">
              <p className=" flex items-center gap-5">
                {" "}
                <Phone className=" text-white" />{" "}
                <span className=" text-white font-light text-base">
                  0123456789
                </span>
              </p>
              <p className=" mt-5 flex items-center gap-5">
                {" "}
                <Mail className=" text-white" />
                <span className=" text-white font-light text-base">
                  companyname@gmail.com
                </span>
              </p>
            </div>

            <div className=" mt-[17px] flex gap-5">
              <a href="">
                <Facebook className=" text-white" strokeWidth={2.25} />
              </a>
              <a href="">
                <Twitter className=" text-white" strokeWidth={2.25} />
              </a>
              <a href="">
                <Instagram className=" text-white" strokeWidth={2.25} />
              </a>
            </div>
          </div>
        </div>
      </Container>

      <div className=" py-5 border-t border-white">
        <p className=" text-center text-white text-base">
          © 2023 Company Name - developed by Roots Digital Marketing
        </p>
      </div>
    </footer>
  );
};

export default Footer;
