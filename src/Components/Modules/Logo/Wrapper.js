import styled from "styled-components";
import RowWrapper from "../../../Shared/RowWrapper";

const Wrapper = styled(RowWrapper)`
  justify-content: start;

  img {
    width: 70px;
    margin-right: 1rem;
  }

  div {
    font-size: 2rem;
    font-weight: bold;
    color: var(--secondary-color);
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);
    -webkit-box-reflect: below 0
      linear-gradient(to bottom, transparent 40%, rgba(0, 0, 0, 0.5));
    span {
      color: var(--primary-color);
    }
  }
`;

export default Wrapper;
