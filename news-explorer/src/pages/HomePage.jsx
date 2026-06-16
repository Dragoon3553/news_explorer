import { useContext } from "react";

import SearchContext from "../contexts/SearchContext";

import About from "../components/About";
import Header from "../components/Header";
import Main from "../components/Main";
import HomeCards from "../components/HomeCards";

function HomePage({
  handleLoginClick,
  handleMenuClick,
  isMobile,
  isModalOpen,
  fetchArticles,
  articleItems,
  onCardSave,
  isLoading,
  handleLogout,
}) {
  const { hasSearched } = useContext(SearchContext);

  return (
    <div className="page-home">
      <Header
        handleLoginClick={handleLoginClick}
        handleMenuClick={handleMenuClick}
        isMobile={isMobile}
        isModalOpen={isModalOpen}
        fetchArticles={fetchArticles}
        handleLogout={handleLogout}
        variant="home"
      />

      {hasSearched === false ? (
        <></>
      ) : (
        <Main>
          <HomeCards
            articleItems={articleItems}
            onCardSave={onCardSave}
            isLoading={isLoading}
          />
        </Main>
      )}

      <About />
    </div>
  );
}

export default HomePage;
