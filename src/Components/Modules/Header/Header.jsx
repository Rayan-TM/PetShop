import { useState } from "react";
import Container from "../../../Shared/Container";
import CTAButton from "../../../Shared/CTAButton";
import RowWrapper from "../../../Shared/RowWrapper";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import Wrapper from "./Wrapper";
import { createPortal } from "react-dom";

export default function Header() {
  const isMobile = window.innerWidth <= 992;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <Container as={Wrapper}>
        <Logo />
        {!isMobile && (
          <>
            <Navbar isMobile={isMobile} />
            <RowWrapper className="right">
              <i className="fa-solid fa-magnifying-glass"></i>
              <i className="fa-regular fa-heart"></i>
              <i className="fa-solid fa-basket-shopping"></i>
              <CTAButton>Sign In</CTAButton>
            </RowWrapper>
          </>
        )}
        {isMobile && (
          <button onClick={() => setIsMenuOpen(true)} className="menu-button">
            <i className="fa-solid fa-bars"></i>
          </button>
        )}
      </Container>
      {isMenuOpen &&
        createPortal(
          <Navbar isMobile={isMobile} setIsMenuOpen={setIsMenuOpen} />,
          document.getElementById("modal")
        )}
    </>
  );
}
