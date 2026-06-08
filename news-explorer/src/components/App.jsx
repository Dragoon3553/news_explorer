// React Imports
import { useState } from "react";

// Component Imports
import Header from "./Header";
import Main from "./Main";
import About from "./About";
import Footer from "./Footer";

import LoginModal from "./LoginModal";

// Context Imports
import LoginContext from "../contexts/LoginContext";

// Constants
import { NewsCards } from "../utils/constants";

// CSS Styles
import "../blocks/page.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState("signup");

  // Modal Open Handlers
  const handleLoginClick = () => setActiveModal("login");
  const handleRegistrationClick = () => setActiveModal("signup");
  const closeActiveModal = () => setActiveModal("");

  return (
    <LoginContext.Provider value={{ isLoggedIn }}>
      <div className="page">
        <div className="page__content">
          <Header handleLoginClick={handleLoginClick} />
          <Main NewsCards={NewsCards} />
          <About />
          <Footer />
        </div>

        <LoginModal
          isOpen={activeModal === "login"}
          onClose={closeActiveModal}
          handleRegistrationClick={handleRegistrationClick}
        />
      </div>
    </LoginContext.Provider>
  );
}

export default App;
