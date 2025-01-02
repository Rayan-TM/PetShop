import Wrapper from "./Wrapper";
import RowWrapper from "../../../Shared/RowWrapper";
import CTAButton from "../../../Shared/CTAButton";

export default function Navbar({ isMobile, setIsMenuOpen }) {
  return (
    <Wrapper className={isMobile ? "mobile-section" : ""}>
      {isMobile && (
        <>
          <CTAButton onClick={() => setIsMenuOpen(false)} className="close-btn">
            <i className="fa-solid fa-xmark"></i>
          </CTAButton>
          <RowWrapper className="options">
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-regular fa-heart"></i>
            <i className="fa-solid fa-basket-shopping"></i>
          </RowWrapper>
        </>
      )}
      <RowWrapper as="ul" className="menu">
        <li>Home</li>
        <li className="nested-menu">
          Shop{" "}
          {!isMobile && (
            <>
              <i className="fa-solid fa-chevron-down"></i>
              <ul>
                <li>Best Sellers</li>
                <li>Hot Product</li>
                <li>New Arrivals</li>
              </ul>
            </>
          )}
        </li>

        <li>Blog</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </RowWrapper>
      {isMobile && <CTAButton className="sign-in">Sign In</CTAButton>}
    </Wrapper>
  );
}
