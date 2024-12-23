import styled from "styled-components";
import { Heading2 } from "../../../Shared/Heading2";
import { text } from "../../../Shared/Animations";

const Wrapper = styled.section`
  width: 1200px;
  margin: 5rem auto;

  &.animated {
    h2 {
      animation: ${text} 1s ease both;
    }
  }

  h2 {
    ${Heading2}
    text-align: center;
  }

  .articles {
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  
`;

export default Wrapper;
