import React, { useState } from "react";
import Logo from "./Logo";
import { Menu } from "lucide-react";
import MobileSideBar from "./MobileSideBar";

const LogoComponent = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className=" w-full lg:w-auto flex items-center justify-between">
      <Logo />
      <button onClick={() => setToggle(true)}>
        <Menu className=" lg:hidden text-white" />
      </button>
      <MobileSideBar toggle={toggle} setToggle={setToggle} />
    </div>
  );
};

export default LogoComponent;
