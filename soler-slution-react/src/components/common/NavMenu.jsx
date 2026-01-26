import React from "react";

const NavMenu = () => {
  let menuItems = [
    { label: "Home", link: "/" },
    { label: "About US", link: "/about" },
    { label: "SOLAR INITIATIVES", link: "/solar-initiatives" },
    { label: "Our Services", link: "/services" },
    { label: "Community", link: "/community" },
    { label: "Aesthetics", link: "/aesthetics" },
  ];

  return (
    <menu>
      <ul className=" flex gap-11.25 justify-end">
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
