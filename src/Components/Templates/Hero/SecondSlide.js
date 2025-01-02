import styled from "styled-components";
import RowWrapper from "../../../Shared/RowWrapper";

const SecondSlide = styled(RowWrapper)`
  background-color: var(--light);
  justify-content: center;
  height: 100%;

  & > div {
    .content {
      position: relative;
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      z-index: 1;

      small {
        font-weight: bold;
        color: var(--secondary-color-200);
        z-index: 1;
      }

      h2 {
        z-index: 1;
        font-family: chewy;
        letter-spacing: 0.5rem;
        text-transform: capitalize;
        font-weight: lighter;
        font-size: 4rem;
        color: var(--secondary-color);
        text-align: center;
        span {
          font-size: 2rem;
          color: var(--primary-color);
        }
      }
    }

    .right {
      width: 50%;
      .main-img {
        position: relative;
        width: 100%;
        z-index: 1;
      }
    }
  }

  @media (max-width: 992px) {
    & > div {
      flex-direction: column;
      gap: 3rem;

      .content {
        width: 100%;
        h2 {
          font-size: 3rem;
        }
      }
    }
  }

  @media (max-width: 576px) {
    & > div {
      .right {
        width: 70%;
      }
    }
  }
`;

export default SecondSlide;
