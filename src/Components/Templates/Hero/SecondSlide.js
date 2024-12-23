import styled from "styled-components";
import RowWrapper from "../../../Shared/RowWrapper";

const SecondSlide = styled(RowWrapper)`
  background-color: var(--light);
  justify-content: center;
  height: 100%;

  & > div {
    max-width: 1200px;
    width: 100%;
    height: 100%;
    margin-inline: auto;

    .content {
      width: 40%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;

      small {
        font-weight: bold;
        color: var(--secondary-color-200);
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
      .main-img {
        position: relative;
        z-index: 1;
      }
    }
  }
`;

export default SecondSlide;
