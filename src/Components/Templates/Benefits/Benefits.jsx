import RowWrapper from "../../../Shared/RowWrapper";
import Wrapper from "./Wrapper";
import { benefits } from "../../../fakeData";
import useAnimateOnScroll from "../../../Hooks/useAnimateOnScroll";
import Benefit from "./Benefit.js";
import Container from "../../../Shared/Container.js";

export default function Benefits() {
  const [container, isVisible] = useAnimateOnScroll({});

  return (
    <Wrapper ref={container}>
      <RowWrapper as={Container} className="container">
        {benefits.map((benefit, index) => (
          <Benefit
            className="benefit"
            $delay={isVisible ? index * 0.25 : ""}
            key={benefit.id}
          >
            <div className="icon">{benefit.icon}</div>
            <h3 className="title">{benefit.title}</h3>
            <p className="description">{benefit.description}</p>
            <div className="count">{benefit.id}</div>
          </Benefit>
        ))}
      </RowWrapper>
    </Wrapper>
  );
}
