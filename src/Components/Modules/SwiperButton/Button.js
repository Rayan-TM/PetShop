import styled from "styled-components";

const Button = styled.button`
  background-color: transparent;
  border: none;
  width: 50px;
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &::before {
    content: "";
    background-color: var(--secondary-color);
    width: 20px;
    height: 20px;
    transform: scale(0);
    position: absolute;
    top: 5%;
    border-radius: 50%;
    transition: all 0.3s ease;
    z-index: -1;
  }

  &:hover::before {
    transform: scale(1);
  }

  &:hover {
    color: var(--primary-color);
  }

  &.swiper-next {
    right: 1.5rem;

    &::before {
      left: 0;
    }

    &:hover {
      right: 0.8rem;
    }
  }

  &.swiper-prev {
    left: 1.5rem;

    &::before {
      right: 0;
    }

    &:hover {
      left: 0.8rem;
    }
  }
`;

export default Button;
