import styled from "styled-components";
import { Colors } from "../../styles/variables";

export const Links = styled.nav`
  display: flex;
  align-items: center;
  font-size: 0.5rem;
  ul {
    display: flex;
    list-style: none;
  }
  li {
    font-weight: 800;
    margin-right: 1.5rem;
    cursor: pointer;
    margin-top: 0.4rem;
    &::after {
      content: "";
      display: block;
      border-bottom: 0.2rem solid ${Colors.emerald};
      transform: scaleX(0);
      transition: transform 300ms ease-in-out;
    }
    &:hover {
      &::after {
        transform: scaleX(1);
      }
    }
    @media (min-width: 768px) {
      font-size: 1rem;
    }
  }
`;
