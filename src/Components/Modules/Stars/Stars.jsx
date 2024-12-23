import Wrapper from "./Wrapper";

export default function Stars({ score }) {
  const maxScore = 5;
  const roundedScore = Math.round(score * 2) / 2;
  const fullStars = Math.floor(roundedScore);
  const halfStar = roundedScore % 1 !== 0;
  const emptyStars = maxScore - fullStars - (halfStar ? 1 : 0);

  return (
    <Wrapper className="star-rating">
      {Array(fullStars)
        .fill(0)
        .map((_, index) => (
          <i key={`full-${index}`} className="fa-solid fa-star full"></i>
        ))}

      {halfStar && <i className="fa-solid fa-star-half-stroke"></i>}

      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <i key={`empty-${index}`} className="fa-solid fa-star empty"></i>
        ))}
    </Wrapper>
  );
}
