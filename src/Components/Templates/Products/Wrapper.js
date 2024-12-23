import styled from "styled-components";
import { Heading2 } from "../../../Shared/Heading2";
import { text } from "../../../Shared/Animations";

const Wrapper = styled.section`
  background-color: var(--light);
  border-radius: 2rem;
  transform: skew(40deg);
  padding: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &.animate {
    h2 {
      animation: ${text} 1.5s ease both;
    }
  }

  .container {
    transform: skew(-40deg);
    width: 1200px;
    margin-inline: auto;
    text-align: center;
  }

  h2 {
    ${Heading2}
  }

  .categories {
    margin-block: 3rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  
`;

export default Wrapper;
