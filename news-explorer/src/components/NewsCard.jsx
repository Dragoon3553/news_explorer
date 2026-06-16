// React Import
import { useContext, useState } from "react";

// Save Button Imports
import saveInactive from "../assets/save_inactive.png";
import saveActive from "../assets/save_active.png";
import saveHover from "../assets/save_hover.png";

// Context Import
import CurrentUserContext from "../contexts/CurrentUserContext";

// CSS Import
import "../blocks/newsCard.css";

function NewsCard({ card, onCardSave }) {
  const { currentUser } = useContext(CurrentUserContext);

  // Move Logic to App.jsx
  const [isSaved, setIsSaved] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const currentSaveImg = isHovered
    ? saveHover
    : isSaved
      ? saveActive
      : saveInactive;

  // Date Conversion
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const cardDate = new Date(card.publishedAt);
  const formatedCardDate = cardDate.toLocaleDateString(undefined, options);

  // Card Source UpperCase Conversion
  const cardSource = card.source.name.toUpperCase();

  const handleSave = () => {
    if (isSaved) {
      setIsSaved(false);
    } else {
      onCardSave({ article: card, isSaved });
      setIsSaved(true);
    }
  };

  return (
    <li className="card">
      <img src={card.urlToImage} alt="card image" className="card__img" />
      <button
        onClick={handleSave}
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
        <p className="card__date">{formatedCardDate}</p>
        <h3 className="card__title">{card.title}</h3>
        <p className="card__text">{card.description}</p>
        <p className="card__source">{cardSource}</p>
      </div>
    </li>
  );
}

export default NewsCard;
