import SavedCardList from "./SavedCardList";

function SavedArticles({ savedArticleItems, onDelete, onCardClick, variant }) {
  return (
    <section className="cards">
      <SavedCardList
        savedArticleItems={savedArticleItems}
        onDelete={onDelete}
        onCardClick={onCardClick}
        variant={variant}
      />
    </section>
  );
}

export default SavedArticles;
