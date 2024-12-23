import CTAButton from "../../../Shared/CTAButton";
import RowWrapper from "../../../Shared/RowWrapper";
import Logo from "../Logo/Logo";
import Navbar from "./Navbar";
import Wrapper from "./Wrapper";

export default function Header() {
  return (
    <Wrapper>
      <RowWrapper className="container">
        <Logo />
        <Navbar>
          <RowWrapper as="ul" className="menu">
            <li>Home</li>
            <li className="nested-menu">
              Shop <i className="fa-solid fa-chevron-down"></i>
              <ul>
                <li>Best Sellers</li>
                <li>Hot Product</li>
                <li>New Arrivals</li>
              </ul>
            </li>

            <li>Blog</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </RowWrapper>
        </Navbar>
        <RowWrapper className="right">
          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-regular fa-heart"></i>
          <i className="fa-solid fa-basket-shopping"></i>
          <CTAButton>Sign In</CTAButton>
        </RowWrapper>
      </RowWrapper>
    </Wrapper>
  );
}
