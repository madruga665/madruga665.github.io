import React from "react";
import Logo from "../../assets/icons8-circled-m-80.png";
import Image from 'next/image'
import { LogoName } from "./style";

export default function Brand() {
  return (
    <LogoName>
      <Image src={Logo} alt='Logo de Madruga' />
      <h2>
        {"<"}
        <span>L</span>uciano <span>A</span>mâncio
        {"/>"}
      </h2>
    </LogoName>
  );
}
