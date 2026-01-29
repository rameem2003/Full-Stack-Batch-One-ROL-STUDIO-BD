import React from "react";
import Logo from "../common/Logo";
import Container from "../common/Container";
import NavMenu from "../common/NavMenu";
import LogoComponent from "../common/LogoComponent";

const Navigation = () => {
  return (
    <nav className=" bg-black py-7.5">
      <Container>
        <div className=" flex items-center justify-between">
          <LogoComponent />
          <NavMenu />
        </div>
      </Container>
    </nav>
  );
};

export default Navigation;
