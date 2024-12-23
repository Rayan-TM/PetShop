import styled, { css } from "styled-components";
import { move } from "../../../Shared/Animations";

const Column = styled.div`
  ${({ $delay }) => css`
    ${typeof $delay === "number"
      ? css`
          animation: ${move()} 1s ease ${$delay}s both;
        `
      : css`
          opacity: 0;
        `}
  `}
`;

export default Column;
