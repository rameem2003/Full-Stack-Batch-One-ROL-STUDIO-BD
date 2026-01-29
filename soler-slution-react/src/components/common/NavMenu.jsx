import React from "react";
import { menuItems } from "../../constant/constant";

const NavMenu = () => {
  return (
    <menu>
      <ul className=" hidden lg:flex gap-11.25 justify-end">
        {menuItems.map((item, i) => (
          <li className=" font-medium text-[18px] text-white uppercase" key={i}>
            <a href="">{item.label}</a>
          </li>
        ))}
      </ul>
    </menu>
  );
};

export default NavMenu;
