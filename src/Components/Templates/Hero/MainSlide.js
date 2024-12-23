import styled from "styled-components";
import RowWrapper from "../../../Shared/RowWrapper";

const MainSlide = styled(RowWrapper)`
  background-color: var(--primary-color-200);
  height: 100%;

  & > div {
    max-width: 1200px;
    width: 100%;
    height: 100%;
    margin-inline: auto;

    .content {
      width: 40%;
      p {
        margin-block: 1.5rem;
        line-height: 1.8rem;
      }

      h1 {
        font-family: chewy;
        letter-spacing: 0.5rem;
        text-transform: capitalize;
        font-weight: lighter;
        font-size: 4rem;
        color: var(--secondary-color);
        .small {
          font-size: 2rem;
          color: var(--primary-color);
        }
      }
    }

    .right {
      width: 50%;
      height: 100%;
      position: relative;

      img {
        position: absolute;
      }
    }
  }

  .main-img {
    bottom: 0;
    right: 0;
  }

  .cat {
    top: 8%;
    left: -14%;
    width: 200px;
    border-radius: 31% 69% 69% 31% / 32% 20% 80% 68%;
    transform: rotate(-21deg);
  }

  .dog {
    top: 25%;
    right: 0;
    width: 170px;
    border-radius: 33% 67% 47% 53% / 63% 64% 36% 37%;
  }
`;

export default MainSlide;
