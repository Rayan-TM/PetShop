import styled from "styled-components";

const Wrapper = styled.header`
  padding: 0.6rem 1.5rem;

  .container {
    width: 1200px;
    margin-inline: auto;
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
