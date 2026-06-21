// React Import
import { useState } from "react";

// Hooks
import { useFormWithValidation } from "../hooks/useFormWithValidation";

// Component Import
import ModalWithForm from "./ModalWithForm";

// CSS Import
import "../blocks/signupModal.css";

const defaultValues = {
  username: "",
  email: "",
  password: "",
};

function SignupModal({
  isOpen,
  onClose,
  handleLoginClick,
  handleRegistration,
}) {
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const { values, handleChange, errors, resetForm, validateAll } =
    useFormWithValidation(defaultValues);

  const handleLogin = () => {
    onClose();
    handleLoginClick();
  };

  const handleModalClose = () => {
    resetForm();
    setHasSubmitted(false);
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setHasSubmitted(true);

    const isFormValid = validateAll();
    if (isFormValid) {
      handleRegistration(values);
      setHasSubmitted(false);
    }
  };

  // Extra Button Variable
  const loginButton = (
    <button onClick={handleLogin} type="button" className="modal__login-btn">
      or <span className="modal__signup-text">Sign in</span>
    </button>
  );

  return (
    <ModalWithForm
      title="Sign up"
      name="sign-up"
      buttonText="Sign up"
      isOpen={isOpen}
      onClose={handleModalClose}
      onSubmit={handleSubmit}
      extraButton={loginButton}
      values={values}
    >
      <label htmlFor="email" className="modal__label">
        Email
        <input
          type="email"
          name="email"
          id="register-email"
          placeholder="Enter email"
          className={`modal__input ${hasSubmitted && errors.email ? "modal__input_invalid" : ""}`}
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
          id="register-password"
          placeholder="Enter password"
          className={`modal__input ${hasSubmitted && errors.password ? "modal__input_invalid" : ""}`}
          value={values.password}
          onChange={handleChange}
        />
        {hasSubmitted && errors.password && (
          <span className="modal__error">{errors.password}</span>
        )}
      </label>
      <label htmlFor="username" className="modal__label">
        Username
        <input
          type="text"
          name="username"
          id="register-username"
          placeholder="Enter your username"
          className={`modal__input ${hasSubmitted && errors.username ? "modal__input_invalid" : ""}`}
          value={values.username}
          onChange={handleChange}
        />
        {hasSubmitted && errors.username && (
          <span className="modal__error">{errors.username}</span>
        )}
      </label>
    </ModalWithForm>
  );
}

export default SignupModal;
