import { articles } from "../../../fakeData";
import Wrapper from "./Wrapper";
import useAnimateOnScroll from "../../../Hooks/useAnimateOnScroll";
import Article from "./Article";

export default function Articles() {
  const [container, isVisible] = useAnimateOnScroll({ threshold: 0 });
  return (
    <Wrapper ref={container} className={isVisible ? "animated" : ""}>
      <h2>Pet Blog</h2>
      <div className="articles">
        {articles.map((article, index) => (
          <Article
            $delay={isVisible ? index * 0.25 : ""}
            key={article.id}
            className="article"
          >
            <div className="header">
              <div className="date">
                <span>{article.date.split(" ")[0]}</span>
                <span className="month">{article.date.split(" ")[1]}</span>
              </div>
              <img src={`/images/${article.img}`} alt={article.title} />
              <div className="category">{article.category}</div>
            </div>
            <div className="content">
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </div>
            <div className="footer">
              <div>
                <i className="fa-solid fa-clock"></i>
                <span>{article.time}</span>
              </div>
              <div>
                <i className="fa-solid fa-comment-dots"></i>
                <span>{article.commentsCount} comments</span>
              </div>
            </div>
          </Article>
        ))}
      </div>
    </Wrapper>
  );
}
