import styled from "styled-components";
import { Heading2 } from "../../../Shared/Heading2.js";
import { scaleUp } from "../../../Shared/Animations.js";

const Wrapper = styled.footer`
  padding-block: 4rem;
  background-color: var(--light);

  &.animate {
    .discount-container {
      animation: ${scaleUp} 1s ease both;
    }
  }

  .container {
    width: 1200px;
    margin-inline: auto;
  }

  .columns {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 5rem;

    .column {
      &:last-child {
        div {
          margin-block: 2rem;
        }

        p {
          font-weight: 600;
          margin-bottom: 1rem;
        }
      }

      h4 {
        font-size: 1.2rem;
      }

      .menu {
        margin-top: 1rem;
      }
    }

    .first-column {
      align-self: center;

      .subscribe-container {
        h3 {
          margin-block: 3rem 1rem;
        }
        p {
          width: 300px;
          line-height: 1.5rem;
          font-weight: 500;
        }

        button {
          margin-top: 2rem;
          border-radius: 25px;
          padding: 0.8rem 1.3rem;
          font-size: 1rem;
          font-weight: 600;
          border: 2px solid var(--secondary-color);
          background-color: var(--secondary-color);
          color: #fff;
          cursor: pointer;
          transition: all 0.3s ease;

          &:hover {
            background-color: transparent;
            color: var(--secondary-color);
            letter-spacing: 0.1rem;
          }
        }
      }
    }

    .social {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      gap: 1rem;
      font-size: 1.3rem;

      li {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: -2px -2px 4px rgba(255, 255, 255, 0.9),
          2px 2px 3px rgba(0, 0, 0, 0.5);
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          transform: scale(0.9);
        }
      }
    }
  }

  .discount-container {
    background-color: var(--primary-color);
    padding: 4rem;
    border-radius: 25px;
    margin-bottom: 3rem;

    h2 {
      ${Heading2};
      text-align: center;
    }

    p {
      width: 80%;
      margin: 2rem auto;
      font-weight: 600;
      line-height: 1.5rem;
    }

    form {
      width: fit-content;
      margin-inline: auto;
      display: flex;
      border-radius: 25px;
      overflow: hidden;
      background-color: #fff;

      input {
        border: none;
        outline: none;
        padding: 1rem 1.3rem;
      }

      button {
        border: none;
        background-color: var(--secondary-color);
        color: #fff;
        padding-inline: 2rem;
        border-radius: 25px;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          background-color: var(--secondary-color-200);
        }
      }
    }
  }
`;

export default Wrapper;
