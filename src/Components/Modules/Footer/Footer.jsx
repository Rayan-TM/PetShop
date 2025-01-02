import Navbar from "../Navbar/Wrapper";
import Logo from "../Logo/Logo";
import Wrapper from "./Wrapper";
import useAnimateOnScroll from "../../../Hooks/useAnimateOnScroll";
import Column from "./Column";
import Container from "../../../Shared/Container";

export default function Footer() {
  const [container, isVisible] = useAnimateOnScroll({ threshold: 0 });
  const [columnsContainer, isVisibleColumns] = useAnimateOnScroll({
    threshold: 0,
  });

  return (
    <Wrapper ref={container} className={isVisible ? "animate" : ""}>
      <Container>
        <div className="discount-container">
          <h2>Get discount instantly</h2>
          <p>
            To save you just have to log in to your account and look for the
            experiences with the green of yellow color code. On your first
            reservation you can enjoy a <span>10% discount.</span>
          </p>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Get started</button>
          </form>
        </div>
        <div className="columns" ref={columnsContainer}>
          <Column $delay={isVisibleColumns ? 0 : ""} className="first-column">
            <Logo />
            <div className="subscribe-container">
              <h3>Sign up for our newsletter</h3>
              <p>
                Don&rsquo;t worry, we reserve our newsletter for important news
                so we only send a few updates a year.
              </p>

              <button>Subscribe</button>
            </div>
          </Column>
          <Column $delay={isVisibleColumns ? 0.25 : ""} className="column">
            <h4>Quick Links</h4>
            <Navbar>
              <ul className="menu">
                <li>Home</li>
                <li>Shop</li>
                <li>Blog</li>
                <li>About Us</li>
                <li>Contact Us</li>
              </ul>
            </Navbar>
          </Column>
          <Column $delay={isVisibleColumns ? 0.5 : ""} className="column">
            <h4>Information</h4>
            <Navbar>
              <ul className="menu">
                <li>FAQ</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </Navbar>
          </Column>
          <Column $delay={isVisibleColumns ? 0.75 : ""} className="column">
            <h4>Contact Us</h4>

            <div>
              <p>Email: info@example.com</p>
              <p>Phone: 123-456-789</p>
            </div>
            <ul className="social">
              <li>
                <i className="fa-brands fa-instagram"></i>
              </li>
              <li>
                <i className="fa-brands fa-x-twitter"></i>
              </li>
              <li>
                <i className="fa-brands fa-facebook-f"></i>
              </li>
            </ul>
          </Column>
        </div>
      </Container>
    </Wrapper>
  );
}
