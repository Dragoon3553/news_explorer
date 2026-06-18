// React Import
import { useState } from "react";

// Component Import
import NewsCard from "./NewsCard";

// CSS Import
import "../blocks/newsCardList.css";

function NewsCardList({
  articleItems,
  onCardSave,
  savedArticleItems,
  onCardClick,
}) {
  const initialLimit = 3;
  const itemsPerLoad = 3;

  const [visibleCount, setVisibleCount] = useState(initialLimit);
  const visibleCards = articleItems.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + itemsPerLoad);
  };

  return (
    <>
      <ul className="cards__list">
        {visibleCards.map((card) => {
          const isSaved = savedArticleItems.some(
            (saved) => saved.url === card.url,
          );
          return (
            <NewsCard
              key={card.url}
              card={card}
              onCardSave={onCardSave}
              isSaved={isSaved}
              onCardClick={onCardClick}
            />
          );
        })}
      </ul>
      {visibleCount < articleItems.length && (
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
