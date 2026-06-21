// CSS Import
import "../blocks/modalWithForm.css";

function ModalWithForm({
  title,
  name,
  buttonText = "Sign in",
  isOpen,
  onClose,
  children,
  onSubmit,
  extraButton,
  values,
}) {
  const isFormFilled = Object.values(values).every(
    (value) => value && value.trim() !== "",
  );

  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={onClose}
          type="button"
          className="modal__close-btn"
        ></button>
        <form
          onSubmit={onSubmit}
          className="modal__form"
          name={name}
          noValidate
        >
          {children}
          <div className="modal__buttons">
            <button
              type="submit"
              className="modal__submit-btn"
              disabled={!isFormFilled}
            >
              {buttonText}
            </button>
            {extraButton}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
