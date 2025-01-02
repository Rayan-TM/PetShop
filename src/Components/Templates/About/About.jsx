import { useState } from "react";
import Wrapper from "./Wrapper";
import { QAs } from "../../../fakeData";
import useAnimateOnScroll from "../../../Hooks/useAnimateOnScroll";
import Container from "../../../Shared/Container";

export default function About() {
  const [openAccordionID, setOpenAccordionID] = useState(null);
  const [container, isVisible] = useAnimateOnScroll({ threshold: 0 });

  return (
    <Wrapper
      as={Container}
      ref={container}
      className={isVisible ? "animate" : ""}
    >
      <div className="img-container">
        <img className="dog" src="/images/dog-food.png" />
        <img className="food" src="/images/food.png" />
      </div>
      <div className="content">
        <h2>A little about us</h2>
        <p>
          Our pet shop was established with the aim of providing the best
          services and products for pets. We strive to create a different
          experience for you and your furry friends by providing quality
          products, expert advice and ongoing support.
        </p>

        <div className="accordions">
          {QAs.map((qa) => (
            <div
              key={qa.id}
              className={`accordion ${openAccordionID === qa.id ? "show" : ""}`}
            >
              <div
                onClick={() =>
                  openAccordionID === qa.id
                    ? setOpenAccordionID(null)
                    : setOpenAccordionID(qa.id)
                }
                className="header"
              >
                <span>{qa.question}</span>
                {openAccordionID === qa.id ? (
                  <i className="fa-solid fa-minus"></i>
                ) : (
                  <i className="fa-solid fa-plus"></i>
                )}
              </div>
              <div className="content">
                <p>{qa.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
