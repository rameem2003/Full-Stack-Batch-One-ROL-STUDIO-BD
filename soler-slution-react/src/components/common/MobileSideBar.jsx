import React from "react";
import Logo from "./Logo";
import { menuItems } from "../../constant/constant";
import { X } from "lucide-react";

const MobileSideBar = ({ toggle, setToggle }) => {
  return (
    <aside
      className={` fixed p-8 w-10/12 top-0 duration-300 ease-in-out ${toggle ? "left-0" : "left-[-100%]"} h-screen bg-stone-900`}
    >
      <button
        onClick={() => setToggle(false)}
        className="absolute top-10 right-5"
      >
        <X className=" text-white " />
      </button>
      <Logo />

      <ul className="flex flex-col gap-11.25 mt-10">
        {menuItems.map((item, i) => (
          <li className=" font-medium text-[18px] text-white uppercase" key={i}>
            <a href="">{item.label}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default MobileSideBar;
