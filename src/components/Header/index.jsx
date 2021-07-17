import React from "react";
import Brand from '../Brand'
import NavLinks from "../Navlinks/";
import { HeaderStyled } from "./style";



export default function Header() {
  return (
    <HeaderStyled>
      <Brand />
      <NavLinks />
    </HeaderStyled>
  );
}
