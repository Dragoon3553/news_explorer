// React Imports
import { useEffect, useState } from "react";

// Component Imports
import Header from "./Header";
import Main from "./Main";
import About from "./About";
import Footer from "./Footer";
// Modals
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";

// Context Imports
import LoginContext from "../contexts/LoginContext";

// Constants
import { NewsCards } from "../utils/constants";

// CSS Styles
import "../blocks/page.css";
import MenuModal from "./MenuModal";

function App() {
  // Local States
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  // Resize Effect
  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth <= 550);

    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  // Modal Open Handlers
  const handleLoginClick = () => setActiveModal("login");
  const handleRegistrationClick = () => setActiveModal("signup");
  const handleMenuClick = () => setActiveModal("menu");
  const closeActiveModal = () => setActiveModal("");

  return (
    <LoginContext.Provider value={{ isLoggedIn }}>
      <div className="page">
        <div className="page__content">
          <Header
            handleLoginClick={handleLoginClick}
            handleMenuClick={handleMenuClick}
            isMobile={isMobile}
          />
          <Main NewsCards={NewsCards} />
          <About />
          <Footer />
        </div>

        <LoginModal
          isOpen={activeModal === "login"}
          onClose={closeActiveModal}
          handleRegistrationClick={handleRegistrationClick}
        />

        <SignupModal
          isOpen={activeModal === "signup"}
          onClose={closeActiveModal}
          handleLoginClick={handleLoginClick}
        />

        <MenuModal
          isOpen={activeModal === "menu"}
          onClose={closeActiveModal}
          handleLoginClick={handleLoginClick}
        />
      </div>
    </LoginContext.Provider>
  );
}

export default App;
