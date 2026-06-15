// React Imports
import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import SavedPage from "./pages/SavedPage";

// Components
import About from "./components/About";
import Footer from "./components/Footer";

// Modals
import LoginModal from "./components/LoginModal";
import SignupModal from "./components/SignupModal";
import MenuModal from "./components/MenuModal";

// Contexts
import LoginContext from "./contexts/LoginContext";
import SearchContext from "./contexts/SearchContext";

// Utils
import { apiKey } from "./utils/constants";
import { searchArticles } from "./utils/newsApi";

// CSS Styles
import "./blocks/page.css";

function App() {
  const location = useLocation();

  // Local States
  const [articleItems, setArticleItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [activeModal, setActiveModal] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchArticles = (inputValues) => {
    setIsLoading(true);
    searchArticles(inputValues, apiKey)
      .then((data) => {
        const articles = data.articles;
        setArticleItems(articles);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error;
        setIsLoading(false);
      });
  };

  // Resize Effect
  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth <= 575);

    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  // Modal Open Handlers
  const handleLoginClick = () => setActiveModal("login");
  const handleRegistrationClick = () => setActiveModal("signup");
  const handleMenuClick = () => setActiveModal("menu");
  const closeActiveModal = () => setActiveModal("");

  // Escape-Key Effect
  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        closeActiveModal();
      }
    };
    document.addEventListener("keydown", closeByEscape);

    return () => document.removeEventListener("keydown", closeByEscape);
  }, []);

  // Overlay Close Effect
  useEffect(() => {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => {
      const closeOnOverlay = (e) => {
        if (e.target === modal) {
          closeActiveModal();
        }
      };
      modal.addEventListener("click", closeOnOverlay);

      return () => modal.removeEventListener("click", closeOnOverlay);
    });
  }, []);

  // Close On Navigation Effect
  useEffect(() => {
    if (activeModal !== "") {
      closeActiveModal();
    }
  }, [location.pathname]);

  return (
    <LoginContext.Provider value={{ isLoggedIn }}>
      <SearchContext.Provider value={{ hasSearched, setHasSearched }}>
        <div className="page">
          <div className="page__content">
            <Routes>
              <Route
                path="/"
                element={
                  <HomePage
                    handleLoginClick={handleLoginClick}
                    handleMenuClick={handleMenuClick}
                    isMobile={isMobile}
                    isModalOpen={activeModal !== ""}
                    fetchArticles={fetchArticles}
                    articleItems={articleItems}
                    isLoading={isLoading}
                  />
                }
              />
              <Route
                path="/saved-articles"
                element={
                  <SavedPage
                    handleMenuClick={handleMenuClick}
                    isMobile={isMobile}
                    isModalOpen={activeModal !== ""}
                  />
                }
              />
            </Routes>
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
      </SearchContext.Provider>
    </LoginContext.Provider>
  );
}

export default App;
