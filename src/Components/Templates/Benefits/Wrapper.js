import styled from "styled-components";

const Wrapper = styled.section`
  position: relative;
  padding-block: 4rem;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border: 2px dashed var(--primary-color);
    width: 100vw;
    z-index: -1;
  }

  .container {
    position: relative;
    align-items: stretch;
    top: 50%;
    gap: 2rem;
  }

  @media (max-width: 992px) {
    &::before {
      display: none;
    }
    .container {
      flex-wrap: wrap;
    }
  }
`;

export default Wrapper;
