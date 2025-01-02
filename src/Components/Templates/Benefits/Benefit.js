import styled, { css } from "styled-components";
import { scaleUp } from "../../../Shared/Animations";

const Benefit = styled.div`
  ${({ $delay }) => css`
    width: 25%;
    border-radius: 2rem;
    border: 4px dashed var(--primary-color);
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    background-color: #fff;
    cursor: pointer;
    transition: all 0.3s linear;

    ${typeof $delay === "number"
      ? css`
          animation: ${scaleUp} 1s ease ${$delay}s both;
        `
      : css`
          opacity: 0;
        `}

    &:hover {
      border: 4px solid var(--primary-color);

      .count {
        background-color: var(--primary-color);
      }
    }

    .icon {
      font-size: 2.5rem;
      color: var(--primary-color);
    }

    .title {
      text-align: center;
      font-size: 1.3rem;
    }

    .description {
      text-align: center;
      font-size: 0.9rem;
    }

    .count {
      background-color: var(--secondary-color);
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 1.3rem;
      transition: all 0.3s ease;
    }

    @media (max-width: 992px) {
      width: 46%;
    }

    @media (max-width: 576px) {
      width: 100%;
    }
  `}
`;

export default Benefit;
