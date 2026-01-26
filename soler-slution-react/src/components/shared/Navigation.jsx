import React from "react";
import Logo from "../common/Logo";
import Container from "../common/Container";
import NavMenu from "../common/NavMenu";

const Navigation = () => {
  return (
    <nav className=" bg-black py-7.5">
      <Container>
        <div className=" flex items-center justify-between">
          <Logo />
          <NavMenu />
        </div>
      </Container>
    </nav>
  );
};

export default Navigation;
