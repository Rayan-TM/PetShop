import styled from "styled-components";
import { Heading2 } from "../../../Shared/Heading2";
import { move } from "../../../Shared/Animations";

const Wrapper = styled.section`
  &.animate {
    .img-container {
      animation: ${move("x", -100)} 1s ease both;
    }

    .content {
      animation: ${move("x", 100)} 1s ease both;
    }
  }

  .container {
    max-width: 1200px;
    margin: 5rem auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    & > .content {
      width: 50%;

      & > p {
        line-height: 1.5rem;
        margin-block: 1rem;
      }
    }

    .accordions {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .accordion {
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        border-radius: 25px;

        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          font-weight: 600;
          padding: 2rem 3rem;

          i {
            color: var(--primary-color);
          }
        }

        &.show {
          .content {
            max-height: 150px;
          }
        }

        .content {
          overflow: hidden;
          max-height: 0;
          width: 100%;
          transition: all 1s ease;

          p {
            /* margin: 0; */
            padding: 0 3rem 2rem;
            line-height: 1.5rem;
            font-size: 0.9rem;
          }
        }
      }
    }

    .img-container {
      width: 40%;
      position: relative;

      .dog {
        width: 60%;
      }

      .food {
        width: 45%;
        height: 110%;
        position: absolute;
        top: -50px;
        left: 50%;
      }
    }
  }

  h2 {
    ${Heading2}
  }
`;

export default Wrapper;
