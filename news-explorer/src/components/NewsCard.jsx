import { useState } from "react";
// Save Button Imports
import saveInactive from "../assets/save_inactive.png";
import saveActive from "../assets/save_active.png";
import saveHover from "../assets/save_hover.png";

import nature from "../assets/nature.png";
import img from "../assets/page_background.jpg";

// CSS Import
import "../blocks/newsCard.css";

function NewsCard() {
  // Move Logic to App.jsx
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const currentImg = isHovered
    ? saveHover
    : isClicked
      ? saveActive
      : saveInactive;

  return (
    <li className="card">
      <img src={nature} alt="card image" className="card__img" />
      <button
        onClick={() => setIsClicked(!isClicked)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="card__save-btn"
      >
        <img
          src={currentImg}
          alt={isClicked ? "Saved" : "Not Saved"}
          className="card__save-btn_img"
        />
      </button>
      <div className="card__content">
        <p className="card__date">February 19, 2019</p>
        <h3 className="card__title">Nature makes you better</h3>
        <p className="card__text">
          We all know how good nature can make us feel. We have known it for
          millennia: the sound of the ocean, the scents of a forest, the way
          dappled sunlight dances through the leaves.
        </p>
        <p className="card__source">NATIONAL GEOGRAPHIC</p>
      </div>
    </li>
  );
}

export default NewsCard;
