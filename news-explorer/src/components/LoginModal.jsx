import { useEffect, useState } from "react";

// Component Import
import ModalWithForm from "./ModalWithForm";

// CSS Import
import "../blocks/loginModal.css";

function LoginModal({ isOpen, onClose, handleRegistrationClick, handleLogin }) {
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleRegisterClick = () => {
    onClose();
    handleRegistrationClick();
  };

  useEffect(() => {
    if (isOpen) {
      setHasSubmitted(false);
    }
  }, [isOpen]);

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     setHasSubmitted(true);

  //     const isFormValid = validateAll();
  //     if (isFormValid) {
  //       handleLogin(values);
  //       setHasSubmitted(false);
  //     }
  //   };

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
      onClose={onClose}
      extraButton={registerButton}
    >
      <label htmlFor="email" className="modal__label">
        Email
        <input
          type="email"
          name="email"
          id="login-email"
          placeholder="Enter email"
          className="modal__input"
        />
      </label>
      <label htmlFor="password" className="modal__label">
        Password
        <input
          type="password"
          name="password"
          id="login-password"
          placeholder="Enter password"
          className="modal__input"
        />
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
