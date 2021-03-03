import React from "react";
import { LeftItem, Li, RightItem, Ul } from "./NavbarStyle";

const Navbar = () => {
  return (
    <Navbar>
      <LeftItem>
        <Ul>
          <Li>Logo</Li>
          <Li>Menu 1 </Li>
          <Li>Menu 2 </Li>
          <Li>Menu 3 </Li>
        </Ul>
      </LeftItem>
      <RightItem>
        <Ul>
          <Li>Share On </Li>
          <Li>Menu 2 </Li>
          <Li>Menu 3 </Li>
        </Ul>
      </RightItem>
    </Navbar>
  );
};

export default Navbar;
