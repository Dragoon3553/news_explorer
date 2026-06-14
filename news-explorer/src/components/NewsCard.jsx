// React Import
import { useState } from "react";

// Save Button Imports
import saveInactive from "../assets/save_inactive.png";
import saveActive from "../assets/save_active.png";
import saveHover from "../assets/save_hover.png";

// CSS Import
import "../blocks/newsCard.css";

function NewsCard({ card }) {
  // Move Logic to App.jsx
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const currentSaveImg = isHovered
    ? saveHover
    : isClicked
      ? saveActive
      : saveInactive;

  const handleLoadMoreClick = () => {
    handleLoadMore(card);
  };

  const cardSource = card.source.name.toUpperCase();

  return (
    <li className="card">
      <img src={card.urlToImage} alt="card image" className="card__img" />
      <button
        onClick={() => setIsClicked(!isClicked)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        type="button"
        className="card__save-btn"
      >
        <img
          src={currentSaveImg}
          alt={isClicked ? "Saved" : "Not Saved"}
          className="card__save-btn_img"
        />
      </button>
      <div className="card__content">
        <p className="card__date">{card.publishedAt}</p>
        <h3 className="card__title">{card.title}</h3>
        <p className="card__text">{card.description}</p>
        <p className="card__source">{cardSource}</p>
      </div>
    </li>
  );
}

export default NewsCard;
