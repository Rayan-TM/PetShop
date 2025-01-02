import styled, { keyframes, css } from "styled-components";
import { move } from "../../../Shared/Animations";

const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const fadeOut = keyframes`
  0% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-10px); }
`;

const ProductsContainer = styled.div`
  display: flex;
  gap: 1.4rem;

  ${({ $isProductsExist, $isVisible }) =>
    $isProductsExist
      ? css`
          animation: ${fadeOut} 0.25s ease both;
        `
      : $isVisible
      ? css`
          animation: ${move("y", 100)} 1s ease both;
        `
      : css`
          animation: ${fadeIn} 0.25s ease both;
        `}

  .product {
    width: 25%;
    background-color: #fff;
    box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.2);
    position: relative;
    overflow: hidden;
    cursor: pointer;

    .actions {
      position: absolute;
      right: 1rem;
      top: 0;
      background-color: var(--secondary-color);
      color: #fff;
      border-radius: 0 0 50px 50px;
      padding: 0.5rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      z-index: 1;
      max-height: 0;
      transform: translateY(-20px);
      overflow: hidden;
      transition: all 0.5s linear;

      .action {
        padding: 0.5rem;
        background-color: transparent;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.3s ease;

        &:hover {
          background-color: var(--secondary-color-200);
        }

        span {
          visibility: hidden;
          opacity: 0;
          position: absolute;
        }
      }
    }

    &:hover {
      .actions {
        max-height: 100%;
        transform: translateY(0);
      }

      img {
        transform: translateX(-10%) rotate(-10deg) scale(0.9);
      }
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      background-color: var(--primary-color);
      border-radius: 1rem;
      height: 200px;
      width: 100%;
      transform: rotate(45deg);
    }

    img {
      width: 100%;
      filter: drop-shadow(0 10px 4px rgba(0, 0, 0, 0.6));
      transition: all 0.5s ease;
    }

    .content {
      padding: 1rem;
      position: relative;
      z-index: 1;
    }

    .title {
      text-transform: capitalize;
      color: var(--secondary-color);
      margin-bottom: 1.2rem;
    }

    .price {
      font-size: 1.5rem;
      font-weight: bold;
      color: var(--primary-color);
    }

    button {
      border: none;
      background-color: var(--primary-color);
      color: #fff;
      width: 100%;
      padding: 1rem;
      font-size: 1.2rem;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background-color: var(--secondary-color);
      }
    }
  }

  @media (max-width: 992px) {
    flex-wrap: wrap;

    .product {
      width: 30%;
    }
  }

  @media (max-width: 768px) {
    .product {
      width: 47%;
    }
  }

  @media (max-width: 576px) {
    .product {
      width: 100%;
    }
  }
`;

export default ProductsContainer;
