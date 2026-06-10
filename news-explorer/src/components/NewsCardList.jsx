// React Import
import { useState } from "react";

// Component Import
import NewsCard from "./NewsCard";

// CSS Import
import "../blocks/newsCardList.css";

function NewsCardList({ NewsCards }) {
  const initialLimit = 3;
  const itemsPerLoad = 3;

  const [visibleCount, setVisibleCount] = useState(initialLimit);
  const visibleCards = NewsCards.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + itemsPerLoad);
  };

  return (
    <>
      <ul className="cards__list">
        {visibleCards.map((card) => (
          <NewsCard key={card.id} card={card} />
        ))}
      </ul>
      {visibleCount < NewsCards.length && (
        <button
          onClick={handleLoadMore}
          type="button"
          className="cards__more-btn"
        >
          Show more
        </button>
      )}
    </>
  );
}

export default NewsCardList;
