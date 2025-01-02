import styled from "styled-components";
import RowWrapper from "../../../Shared/RowWrapper";

const MainSlide = styled(RowWrapper)`
  background-color: var(--primary-color-200);
  height: 100%;

  & > div {
    height: 100%;

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
    width: 150%;
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

  @media (max-width: 768px) {
    & > div {
      .content {
        width: 70%;

        h1 {
          font-size: 3rem;
        }
      }
    }

    .main-img {
      bottom: 0;
      right: 0;
      width: 200%;
    }

    .cat {
      width: 150px;
    }

    .dog {
      width: 130px;
    }
  }

  @media (max-width: 576px) {
    & > div {
      flex-direction: column;
      text-align: center;
      .content {
        width: 100%;
      }
    }

    .cat, .dog{
      display: none;
    }
  }
`;

export default MainSlide;
