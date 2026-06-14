import { useContext } from "react";

// Context Import
import SearchContext from "../contexts/SearchContext";

// Component Import
import NewsCardList from "./NewsCardList";
import Preloader from "./Preloader";

// Not Found Image
import notFound from "../assets/not-found.png";

// CSS Import
import "../blocks/main.css";

function Main({ articleItems, isLoading }) {
  const { hasSearched } = useContext(SearchContext);

  return (
    <>
      {hasSearched === false ? (
        <></>
      ) : (
        <main className="main">
          <section className="cards">
            {isLoading === true ? (
              <Preloader />
            ) : articleItems.length > 0 ? (
              <>
                <h2 className="cards__title">Search results</h2>
                <NewsCardList articleItems={articleItems} />
              </>
            ) : (
              <div className="not-found">
                <img
                  src={notFound}
                  alt="Not found"
                  className="not-found__img"
                />
                <h2 className="not-found__title">Nothing found</h2>
                <p className="not-found__text">
                  Sorry, but nothing matched
                  <br />
                  your search terms.
                </p>
              </div>
            )}
          </section>
        </main>
      )}
    </>
  );
}

export default Main;
