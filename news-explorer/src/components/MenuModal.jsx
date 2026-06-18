// Component Imports
import Logo from "./Logo";
import NavLinks from "./NavLinks";

// CSS Import
import "../blocks/menuModal.css";

function MenuModal({ isOpen, onClose, handleLoginClick, handleLogout }) {
  return (
    <div className={`modal modal_type_menu ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content modal__content_type_menu">
        <button
          onClick={onClose}
          type="button"
          className="modal__close-btn modal__close-btn_type_menu"
        ></button>
        <div className="modal__header">
          <Logo />
        </div>
        <NavLinks
          handleLoginClick={handleLoginClick}
          handleLogout={handleLogout}
        />
      </div>
    </div>
  );
}

export default MenuModal;
