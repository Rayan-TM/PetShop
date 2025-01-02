import styled from "styled-components";
import { Heading2 } from "../../../Shared/Heading2";
import { move, text } from "../../../Shared/Animations";

const Wrapper = styled.section`
  background-color: var(--secondary-color);
  margin-block: 5rem;
  position: relative;

  &.animate {
    h2 {
      animation: ${text} 2s ease 0.1s both;
    }

    .swiper {
      animation: ${move()} 1s ease both;
    }
  }

  .wave {
    position: absolute;

    &.top {
      transform: rotate(180deg);
      top: -5px;
    }

    &.bottom {
      bottom: -5px;
    }
  }

  .container {
    padding-block: 5rem;
  }

  .swiper {
    padding: 6rem 1rem;
  }

  .swiper-pagination-bullet {
    background-color: var(--primary-color);

    &.swiper-pagination-bullet-active {
      transform: scale(1.5);
    }
  }

  .swiper-slide {
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s linear;
    transform: scale(1);
    opacity: 0.8;
    position: relative;

    &.swiper-slide-active {
      z-index: 1;
      transform: scale(1.3);
      opacity: 1;

      @media (max-width: 992px) {
        transform: unset;
      }
    }

    .fa-quote-right,
    .fa-quote-left {
      font-size: 3rem;
      color: var(--secondary-color-200);
      position: absolute;
      z-index: 1;
    }

    .fa-quote-right {
      top: -1.2rem;
      right: 1rem;
    }

    .fa-quote-left {
      bottom: -1.2rem;
      left: 1rem;
    }
  }

  h2 {
    ${Heading2}
    color: #fff;
    text-align: center;
  }

  .comment {
    min-height: 200px;
    background-color: #fff;
    padding: 1rem 1rem 2rem;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    border-radius: 5px 25px 5px 25px;
    position: relative;
    overflow: hidden;

    .bg-cover {
      position: absolute;
      width: 400px;
      height: 250px;
      top: -150px;
      left: -200px;
      border-radius: 50%;
      background-color: var(--light);
      z-index: 0;
    }

    .content {
      position: relative;
      z-index: 1;

      h3 {
        font-size: 1.3rem;
      }

      small {
        font-style: italic;
      }

      p {
        margin-block: 1rem;
        font-weight: bold;
      }
    }
  }
`;

export default Wrapper;
