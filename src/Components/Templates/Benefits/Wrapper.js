import styled from "styled-components";

const Wrapper = styled.section`
  position: relative;
  height: fit-content;
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
    max-width: 1200px;
    align-items: stretch;
    margin-inline: auto;
    top: 50%;
    gap: 2rem;
  }

  
`;

export default Wrapper;
