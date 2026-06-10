// React Import
import { useEffect, useState } from "react";

// Component Import
import ModalWithForm from "./ModalWithForm";

// CSS Import
import "../blocks/signupModal.css";

function SignupModal({
  isOpen,
  onClose,
  handleLoginClick,
  handleRegistration,
}) {
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleLogin = () => {
    onClose();
    handleLoginClick();
  };

  //   useEffect(() => {
  //     if (isOpen) {
  //       resetForm();
  //       setHasSubmitted(false);
  //     }
  //   }, [isOpen]);

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     setHasSubmitted(true);
  //     const isFormValid = validateAll();
  //     if (isFormValid) {
  //       handleRegistration(values);
  //       setHasSubmitted(false);
  //     }
  //   };

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
      onClose={onClose}
      extraButton={loginButton}
    >
      <label htmlFor="email" className="modal__label">
        Email
        <input
          type="email"
          name="email"
          id="register-email"
          placeholder="Enter email"
          className="modal__input"
        />
      </label>
      <label htmlFor="password" className="modal__label">
        Password
        <input
          type="password"
          name="password"
          id="register-password"
          placeholder="Enter password"
          className="modal__input"
        />
      </label>
      <label htmlFor="username" className="modal__label">
        Username
        <input
          type="text"
          name="username"
          id="register-username"
          placeholder="Enter your username"
          className="modal__input"
        />
      </label>
    </ModalWithForm>
  );
}

export default SignupModal;
