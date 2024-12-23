import styled, { css } from "styled-components";
import { move } from "../../../Shared/Animations";

const Article = styled.article`
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  background-color: #fff;
  width: 25%;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &:hover img {
    transform: scale(1.1);
  }

  .header {
    position: relative;
    height: 200px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      transition: all 0.3s ease;
    }

    .category {
      background-color: var(--primary-color);
      position: absolute;
      bottom: 1rem;
      left: 0.8rem;
      padding: 0.6rem 0.8rem;
      color: #fff;
      letter-spacing: 0.2rem;
      text-transform: capitalize;
      border-radius: 5px;
      font-size: 0.7rem;
    }

    .date {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      min-width: 80px;
      padding: 1rem;
      aspect-ratio: 1;
      border-radius: 50%;
      background-color: var(--primary-color);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.4rem;
      color: #fff;
      text-transform: capitalize;
      z-index: 1;

      .month {
        font-weight: bold;
      }
    }
  }

  .content {
    padding: 1rem;

    h3 {
      color: var(--secondary-color);
      font-size: 1.2rem;
    }

    p {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      line-clamp: 3;
      -webkit-line-clamp: 3;
      line-height: 1.5rem;
      margin-top: 1rem;
    }
  }

  .footer {
    color: var(--secondary-color);
    padding: 1rem;
    display: flex;
    gap: 1rem;
    margin-top: auto;
    border-top: 1px solid var(--light);

    & > div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }

  ${({ $delay }) =>
    css`
      ${typeof $delay === "number"
        ? css`
            animation: ${move("y", 50)} 1s ease ${$delay}s both;
          `
        : css`
            opacity: 0;
          `}
    `}
`;

export default Article;
