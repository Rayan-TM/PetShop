import styled, { css } from "styled-components";

const Circle = styled.div`
  ${({ $size, $bgColor, $position }) => css`
    position: absolute;
    top: ${$position.top || ""};
    left: ${$position.left || ""};
    right: ${$position.right || ""};
    bottom: ${$position.bottom || ""};
    width: ${$size};
    height: ${$size};
    border-radius: 50%;
    background-color: ${$bgColor};
  `}
`;

export default Circle;
