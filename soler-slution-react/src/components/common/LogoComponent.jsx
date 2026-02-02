import React, { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import { Menu } from "lucide-react";
import MobileSideBar from "./MobileSideBar";

const LogoComponent = () => {
  const [toggle, setToggle] = useState(false);

  const menuRef = useRef();

  // console.log(menuRef);

  useEffect(() => {
    // console.log(menuRef.current);
    // menuRef.current.style.backgroundColor = "red";

    document.addEventListener("click", (e) => {
      menuRef.current.contains(e.target) ? setToggle(true) : setToggle(false);
    });
  }, []);

  return (
    <div className=" w-full lg:w-auto flex items-center justify-between">
      <Logo />
      <button ref={menuRef} onClick={() => setToggle(true)}>
        <Menu className=" lg:hidden text-white" />
      </button>
      <MobileSideBar toggle={toggle} setToggle={setToggle} />
    </div>
  );
};

export default LogoComponent;
