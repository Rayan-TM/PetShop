import styled from "styled-components";

const Wrapper = styled.header`
  padding-block: 0.6rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .menu-button {
    border: none;
    background-color: transparent;
    font-size: 1.5rem;
    color: var(--secondary-color);
  }

  .right {
    gap: 1rem;

    i {
      cursor: pointer;
      transition: color 0.3s ease;
    }

    i:hover {
      color: var(--primary-color);
    }
  }
`;

export default Wrapper;
