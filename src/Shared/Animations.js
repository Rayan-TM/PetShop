import { keyframes } from "styled-components";

export const text = keyframes`from {
    opacity: 0;
    clip-path: inset(0 100% 0 0);
  } to{
    opacity: 1;
    clip-path: inset(0 0 0 0);
  }`;

export const scaleUp = keyframes`0% {
    opacity: 0;
    transform: scale(0.5);
  }50%{
    opacity: 1;
    transform: scale(1.1);
  }100%{
    transform: scale(1);
  }`;

export const move = (direction = "y", pixels = -100) => keyframes`
    from {
      opacity: 0;
      transform : ${
        direction === "y"
          ? `translateY(${pixels}px)`
          : `translateX(${pixels}px)`
      }
    }
    to {
      opacity: 1;
      transform: ${direction === "y" ? `translateY(0)` : `translateX(0)`} 
    }
`;
