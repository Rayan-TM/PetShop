import styled, { css } from "styled-components";
import { scaleUp } from "../../../Shared/Animations";

const Category = styled.button`
  ${({ $delay }) => css`
    ${typeof $delay === "number"
      ? css`
          animation: ${scaleUp} 1s ease ${$delay}s both;
        `
      : css`
          opacity: 0;
        `}
  `}

  background-color: var(--primary-color);
  color: #fff;
  border-radius: 50px;
  padding: 0.5rem 1.2rem;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  text-transform: capitalize;
  transition: all 0.3s ease;

  &.active {
    background-color: var(--secondary-color-200);
  }

  &:hover {
    background-color: var(--secondary-color-200);
  }
`;

export default Category;
