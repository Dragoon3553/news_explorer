// React Import
import { useContext, useState } from "react";

// Save Button Imports
import saveInactive from "../assets/save_inactive.png";
import saveActive from "../assets/save_active.png";
import saveHover from "../assets/save_hover.png";

import deleteBtn from "../assets/delete.png";
import deleteHover from "../assets/delete_hover.png";

// Context Import
import LoginContext from "../contexts/LoginContext";

// CSS Import
import "../blocks/newsCard.css";

function NewsCard({ card, onCardSave, isSaved, onDelete, variant }) {
  const [isHovered, setIsHovered] = useState(false);

  const { isLoggedIn } = useContext(LoginContext);

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
    onCardSave(card);
  };

  const handleDelete = () => {
    onDelete(card);
  };

  // Delete Image Toggling
  const currentDeleteImg = isHovered ? deleteHover : deleteBtn;

  // Save Image Toggling
  const currentSaveImg =
    isHovered && !isSaved ? saveHover : isSaved ? saveActive : saveInactive;

  const handleHoverToggle = () => {
    isHovered ? setIsHovered(false) : setIsHovered(true);
  };

  return (
    <li className="card">
      <img src={card.urlToImage} alt="card image" className="card__img" />
      {isLoggedIn && isSaved && variant ? (
        <button
          onClick={handleDelete}
          type="button"
          onMouseEnter={handleHoverToggle}
          onMouseLeave={handleHoverToggle}
          className="card__delete-btn"
        >
          <img
            src={currentDeleteImg}
            alt="delete image"
            className="card__delete-img"
          />
        </button>
      ) : (
        <button
          onClick={handleSave}
          onMouseEnter={handleHoverToggle}
          onMouseLeave={handleHoverToggle}
          type="button"
          className="card__save-btn"
        >
          <img
            src={currentSaveImg}
            alt={isSaved ? "Saved" : "Not Saved"}
            className="card__save-btn_img"
          />
        </button>
      )}

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
