import SavedCardList from "./SavedCardList";

function SavedArticles({ savedArticleItems, onDelete, variant }) {
  return (
    <section className="cards">
      <SavedCardList
        savedArticleItems={savedArticleItems}
        onDelete={onDelete}
        variant={variant}
      />
    </section>
  );
}

export default SavedArticles;
