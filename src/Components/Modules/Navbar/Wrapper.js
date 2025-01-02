import styled from "styled-components";

const Wrapper = styled.nav`
  .menu {
    margin-left: -1rem;
    li {
      width: fit-content;
      color: var(--secondary-color);
      font-weight: bold;
      cursor: pointer;
      transition: color 0.3s ease;

      &:hover {
        color: var(--primary-color);
      }
    }

    & > li {
      padding: 1rem;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: var(--primary-color);
        height: 2px;
        border-radius: 5px;
        width: 100%;
        transform: scale(0);
        transition: all 0.3s ease;
      }

      &:hover::before {
        transform: scale(0.8);
      }

      &:hover ul {
        opacity: 1;
        top: 100%;
        pointer-events: unset;
      }

      ul {
        padding-block: 1rem;
        position: absolute;
        transition: all 0.3s ease;
        top: 130%;
        left: 0;
        background-color: #fff;
        box-shadow: 0 2px 3px rgba(0, 0, 0, 0.5);
        width: 200px;
        z-index: 10;
        opacity: 0;
        pointer-events: none;
        border-radius: 0.2rem 0.2rem 0.8rem 0.2rem;

        li {
          padding: 0.7rem 1rem;
          font-size: 0.8rem;
          transition: all 0.3s ease;
        }

        li:hover {
          margin-left: 1rem;
          border-left: 3px solid var(--primary-color);
        }
      }
    }
  }

  &.mobile-section {
    background-color: rgba(0, 0, 0, 0.9);
    position: fixed;
    inset: 0;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    z-index: 100;

    .close-btn {
      position: absolute;
      top: 1rem;
      right: 1rem;
      height: 3rem;
      width: 3rem;
      padding: 0;
    }

    .options {
      min-width: 200px;
      margin-inline: auto;
    }

    .sign-in {
      width: fit-content;
      margin-inline: auto;
    }

    .menu {
      display: flex;
      flex-direction: column;

      li {
        color: #fff;
      }
    }
  }
`;

export default Wrapper;
