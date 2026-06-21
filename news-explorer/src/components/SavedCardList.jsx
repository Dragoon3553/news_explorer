import NewsCard from "./NewsCard";

function SavedCardList({ savedArticleItems, onDelete, onCardClick, variant }) {
  return (
    <>
      <ul className="cards__list">
        {savedArticleItems.map((card) => {
          const isSaved = savedArticleItems.some(
            (saved) => saved.url === card.url,
          );
          return (
            <NewsCard
              key={card._id}
              card={card}
              isSaved={isSaved}
              onDelete={onDelete}
              onCardClick={onCardClick}
              variant={variant}
            />
          );
        })}
      </ul>
    </>
  );
}

export default SavedCardList;
