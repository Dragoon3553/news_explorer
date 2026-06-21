import { useState } from "react";

// Hooks
import { useFormWithValidation } from "../hooks/useFormWithValidation";

// Component Import
import ModalWithForm from "./ModalWithForm";

// CSS Import
import "../blocks/loginModal.css";

const defaultValues = {
  email: "",
  password: "",
};

function LoginModal({
  isOpen,
  onClose,
  handleRegistrationClick,
  handleLogin,
  errorMessage,
  isMobile,
  setErrorMessage,
}) {
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const { values, handleChange, errors, resetForm, validateAll } =
    useFormWithValidation(defaultValues);

  const handleRegisterClick = () => {
    onClose();
    handleRegistrationClick();
  };

  const handleModalClose = () => {
    resetForm();
    setHasSubmitted(false);
    setErrorMessage("");
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setHasSubmitted(true);

    const isFormValid = validateAll();
    if (isFormValid) {
      handleLogin(values);
      setHasSubmitted(false);
    }
  };

  // Extra Button Variable
  const registerButton = (
    <button
      onClick={handleRegisterClick}
      type="button"
      className="modal__register-btn"
    >
      or <span className="modal__signup-text">Sign up</span>
    </button>
  );

  return (
    <ModalWithForm
      title="Sign in"
      name="sign-in"
      isOpen={isOpen}
      onClose={handleModalClose}
      onSubmit={handleSubmit}
      extraButton={registerButton}
      values={values}
    >
      <label htmlFor="email" className="modal__label">
        Email
        <input
          type="email"
          name="email"
          id="login-email"
          placeholder="Enter email"
          className="modal__input"
          value={values.email}
          onChange={handleChange}
        />
        {hasSubmitted && errors.email && (
          <span className="modal__error">{errors.email}</span>
        )}
      </label>
      <label htmlFor="password" className="modal__label">
        Password
        <input
          type="password"
          name="password"
          id="login-password"
          placeholder="Enter password"
          className="modal__input"
          value={values.password}
          onChange={handleChange}
        />
        {hasSubmitted && errors.password && (
          <span className="modal__error">{errors.password}</span>
        )}
        {isMobile ? (
          <></>
        ) : (
          <span className="modal__error-message">{errorMessage}</span>
        )}
      </label>
      {isMobile && <span className="modal__error-message">{errorMessage}</span>}
    </ModalWithForm>
  );
}

export default LoginModal;
