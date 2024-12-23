import { useState } from "react";
import { allProducts } from "../../../fakeData";
import Wrapper from "./Wrapper";
import ProductsContainer from "./ProductsContainer";
import useAnimateOnScroll from "../../../Hooks/useAnimateOnScroll";
import Category from "./Category";

export default function Products() {
  const [container, isVisible] = useAnimateOnScroll({ threshold: 0 });
  const [productsContaienr, isVisibleProducts] = useAnimateOnScroll({
    threshold: 0,
  });
  const categories = allProducts.map((product) => product.category);

  const [activeProducts, setActiveProducts] = useState(allProducts[0]);
  const [isProductsExist, setIsProductsExist] = useState(false);

  const handleCategoryChange = (category) => {
    setIsProductsExist(true);

    setTimeout(() => {
      setActiveProducts(
        allProducts.find((products) => products.category === category)
      );
      setIsProductsExist(false);
    }, 250);
  };

  return (
    <Wrapper ref={container} className={isVisible ? "animate" : ""}>
      <div className="container">
        <h2>what we have for your pet</h2>
        <div className="categories">
          {categories.map((category, index) => (
            <Category
              onClick={() => handleCategoryChange(category)}
              className={`category ${
                activeProducts.category === category ? "active" : ""
              }`}
              $delay={isVisible ? index * 0.25 : ""}
              key={category}
            >
              {category}
            </Category>
          ))}
        </div>

        <ProductsContainer
          ref={productsContaienr}
          $isVisible={isVisibleProducts}
          $isProductsExist={isProductsExist}
        >
          {activeProducts.products.map((product) => (
            <div className="product" key={product.id}>
              <div className="actions">
                <div className="action">
                  <i className="fa-solid fa-magnifying-glass-plus"></i>
                  <span>Quick View</span>
                </div>
                <div className="action">
                  <i className="fa-solid fa-basket-shopping"></i>
                  <span>Add to cart</span>
                </div>
                <div className="action">
                  <i className="fa-regular fa-heart"></i>
                  <span>Add to wishlist</span>
                </div>
                <div className="action">
                  <i className="fa-solid fa-code-compare"></i>
                  <span>Add to compare</span>
                </div>
              </div>
              <img src={`/images/${product.img}`} alt={product.title} />
              <div className="content">
                <h3 className="title">{product.title}</h3>
                <span className="price">{product.price}$</span>
              </div>
              <button>Add To Cart</button>
            </div>
          ))}
        </ProductsContainer>
      </div>
    </Wrapper>
  );
}
