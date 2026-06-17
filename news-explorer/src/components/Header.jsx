import { useContext } from "react";

// Context Imports
import CurrentUserContext from "../contexts/CurrentUserContext";

// Component Imports
import Navigation from "./Navigation";
import SearchForm from "./SearchForm";

// CSS Import
import "../blocks/header.css";

function Header({
  handleLoginClick,
  handleMenuClick,
  isMobile,
  isModalOpen,
  fetchArticles,
  handleLogout,
  savedArticleItems,
  variant,
}) {
  const { currentUser } = useContext(CurrentUserContext);

  const saved = variant === "saved";

  const savedList = savedArticleItems?.length;

  const keywords = [...new Set(savedArticleItems?.map((item) => item.keyword))];
  const getKeywordSummary = (keywords) => {
    if (keywords.length === 0) return "";

    if (keywords.length === 1) {
      return keywords[0];
    }

    if (keywords.length === 2) {
      return `${keywords[0]} and ${keywords[1]}`;
    }

    if (keywords.length === 3) {
      return `${keywords[0]}, ${keywords[1]} and ${keywords[2]}`;
    }

    return `${keywords[0]}, ${keywords[1]}, ${keywords[2]} and ${
      keywords.length - 3
    } others`;
  };

  const keywordText = getKeywordSummary(keywords);

  return (
    <header className="header">
      <Navigation
        handleLoginClick={handleLoginClick}
        handleMenuClick={handleMenuClick}
        isMobile={isMobile}
        isModalOpen={isModalOpen}
        handleLogout={handleLogout}
        variant={variant}
      />
      {saved ? (
        <div className="header__container">
          <p className="header__tag">Saved articles</p>
          <h2 className="header__title">
            {currentUser.username}, you have {savedList} saved articles
          </h2>
          <p className="header__subtitle">
            By keywords: <span className="header__keywords">{keywordText}</span>
          </p>
        </div>
      ) : (
        <div className="header__container">
          <h2 className="header__title">What's going on in the world?</h2>
          <p className="header__subtitle">
            Find the latest news on any topic and save them in your personal
            account.
          </p>
          <SearchForm fetchArticles={fetchArticles} />
        </div>
      )}
    </header>
  );
}

export default Header;
