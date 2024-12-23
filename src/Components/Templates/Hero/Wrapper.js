import styled from "styled-components";
import { move, scaleUp, text } from "../../../Shared/Animations";

const Wrapper = styled.section`
  .swiper {
    height: 100vh;
  }

  .swiper-slide {
    overflow: hidden;
  }

  .main-slide.animate {
    & > div {
      .content {
        p {
          animation: ${scaleUp} 0.8s ease 1s both;
        }

        button {
          animation: ${scaleUp} 0.8s ease 1s both;
        }

        h1 {
          .small {
            animation: ${text} 1s ease both;
          }

          .big {
            animation: ${text} 1s ease 0.5s both;
          }
        }

        .corner-circle {
          animation: ${scaleUp} 1s ease both;
        }
      }
    }

    .main-img {
      animation: ${scaleUp} 0.8s ease both;
    }

    .cat {
      animation: ${scaleUp} 0.8s ease 0.5s both;
    }

    .dog {
      animation: ${scaleUp} 0.8s ease 0.9s both;
    }
  }

  .second-slide.animate {
    & > div {
      .content {
        button {
          animation: ${scaleUp} 0.5s linear 0.8s both;
        }

        .text-circle {
          animation: ${scaleUp} 0.6s linear 1s both;
        }

        small {
          animation: ${scaleUp} 0.8s linear both;
        }

        h2 {
          animation: ${scaleUp} 0.8s ease 0.3s both;
        }
      }

      .right {
        .main-img {
          animation: ${move("y", -500)} 1s ease;
        }

        .dog-circle {
          animation: ${scaleUp} 1s ease 0.9s both;
        }
      }
    }
  }

  @media (min-width: 1500px) {
    .swiper {
      height: 500px;
    }
  }
`;

export default Wrapper;
