import Footer from "./Components/Modules/Footer/Footer";
import Header from "./Components/Modules/Header/Header";
import About from "./Components/Templates/About/About";
import Articles from "./Components/Templates/Articles/Articles";
import Benefits from "./Components/Templates/Benefits/Benefits";
import Comments from "./Components/Templates/Comments/Comments";
import Hero from "./Components/Templates/Hero/Hero";
import Products from "./Components/Templates/Products/Products";

import "swiper/css";
import "swiper/css/pagination";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Benefits />
      <Products />
      <About />
      <Comments />
      <Articles />
      <Footer />
    </>
  );
}

export default App;
