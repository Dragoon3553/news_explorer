import "../blocks/confirmationModal.css";

function ConfirmationModal({ isOpen, onClose, handleLoginClick }) {
  const handleLogin = () => {
    onClose();
    handleLoginClick();
  };

  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content modal__content_type_confirm">
        <button
          onClick={onClose}
          type="button"
          className="modal__close-btn"
        ></button>
        <p className="modal__text">Registration successfully completed!</p>
        <button
          onClick={handleLogin}
          type="button"
          className="modal__login-btn modal__login-btn_type_confirm"
        >
          Sign in
        </button>
      </div>
    </div>
  );
}

export default ConfirmationModal;
