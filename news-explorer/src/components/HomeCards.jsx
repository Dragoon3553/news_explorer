// Component Import
import NewsCardList from "./NewsCardList";
import Preloader from "./Preloader";

import notFound from "../assets/not-found.png";

function HomeCards({ articleItems, onCardSave, isLoading }) {
  return (
    <section className="cards">
      {isLoading === true ? (
        <Preloader />
      ) : articleItems.length > 0 ? (
        <>
          <h2 className="cards__title">Search results</h2>
          <NewsCardList articleItems={articleItems} onCardSave={onCardSave} />
        </>
      ) : (
        <div className="not-found">
          <img src={notFound} alt="Not found" className="not-found__img" />
          <h2 className="not-found__title">Nothing found</h2>
          <p className="not-found__text">
            Sorry, but nothing matched
            <br />
            your search terms.
          </p>
        </div>
      )}
    </section>
  );
}

export default HomeCards;
