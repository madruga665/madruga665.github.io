import styled from "styled-components";
import { Colors } from "../../styles/variables";

export const LogoName = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  h2 {
    font-size: 1rem;
    span {
      font-size: 1rem;
    }
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 0.1px;
  }
  img {
    width: 2rem;
    margin-right: 1rem;
  }
  span {
    color: ${Colors.emerald};
    font-size: 2rem;
  }
  @media (min-width: 768px) {
    img {
      width: 2.5rem;
      margin: 0.4rem 1rem 0 0;
    }
    h2 {
      font-size: 1.5rem;
      span {
        font-size: 1.8rem;
      }
    }
  }
`;
