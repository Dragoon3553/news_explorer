import SavedCardList from "./SavedCardList";

function SavedArticles({ articleItems }) {
  // const filteredItems = articleItems.filter((item) => {
  //   if (isClicked === true) {
  //     return item;
  //   }
  // });

  return (
    <section className="cards">
      <SavedCardList />
    </section>
  );
}

export default SavedArticles;
