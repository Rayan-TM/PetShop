import styled, { css } from "styled-components";

const CTAButton = styled.button`
  ${({ $color, $bgColor, $hoverBgColor }) => css`
    padding: .8rem 1.8rem;
    border-radius: 50px;
    cursor: pointer;
    border: none;
    font-weight: bold;
    font-size: 1rem;
    transition: all 0.3s ease;
    color: ${$color || "#fff"};
    background-color: ${$bgColor || "var(--primary-color)"};

    &:hover {
      background-color: ${$hoverBgColor || "var(--secondary-color)"};
    }
  `}
`;

export default CTAButton;
