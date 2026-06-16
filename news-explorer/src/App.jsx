// React Imports
import { useEffect, useRef, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

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
import CurrentUserContext from "./contexts/CurrentUserContext";

// Utils
import { apiKey } from "./utils/constants";
import { searchArticles } from "./utils/newsApi";
import * as auth from "./utils/auth";
import * as api from "./utils/api";

// CSS Styles
import "./blocks/page.css";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const hasMounted = useRef(false);

  // Token // to go to token.js
  const TOKEN_KEY = "jwt";
  const setToken = (token) => localStorage.setItem(TOKEN_KEY, token);
  const getToken = () => localStorage.getItem(TOKEN_KEY);
  const removeToken = () => localStorage.removeItem(TOKEN_KEY);

  // Local States
  const [articleItems, setArticleItems] = useState([]);
  const [savedArticleItems, setSavedArticleItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    _id: "",
    username: "",
  });

  // Modal Open Handlers
  const handleLoginClick = () => setActiveModal("login");
  const handleRegistrationClick = () => setActiveModal("signup");
  const handleMenuClick = () => setActiveModal("menu");
  const closeActiveModal = () => setActiveModal("");

  const handleLogin = (inputValues) => {
    const { email, password } = inputValues;
    // If email or password are empty, return without sending a request
    if (!email || !password) {
      return;
    }

    auth
      .authorize({ email, password })
      .then((res) => {
        setToken(res.token);
        return auth.checkToken(res.token);
      })
      .then((user) => {
        setCurrentUser({ _id: user._id, username: user.username });
        setIsLoggedIn(true);
        setIsLoading(false);
        closeActiveModal();
      })
      .catch((err) => {
        setErrorMessage("Incorrect email or password");
        console.error(err);
      });
  };

  const handleRegistration = (inputValues) => {
    const newUserData = {
      username: inputValues.username,
      email: inputValues.email,
      password: inputValues.password,
    };
    auth
      .authorize(newUserData)
      .then((res) => {
        handleLogin(inputValues);
      })
      .catch(console.error);
  };

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

  // Mount Effect
  useEffect(() => {
    const token = getToken();

    if (token) {
      auth
        .checkToken(token)
        .then((user) => {
          setCurrentUser({
            _id: user._id,
            username: user.username,
          });
          setIsLoggedIn(true);
          setIsLoading(false);
          const lastRoute = localStorage.getItem("lastRoute") || "/";
          Navigate(lastRoute);
        })
        .catch((err) => {
          setIsLoading(false);
          console.error(err);
        });
    }

    if (!token) {
      setIsLoading(false);
    }

    api
      .getItems()
      .then((data) => {
        setSavedArticleItems(data.reverse());
      })
      .catch((error) => {
        console.error("Failed to fetch articles:", error);
      });
  }, []);

  // Route Path Save Effect
  useEffect(() => {
    if (hasMounted.current) {
      localStorage.setItem("lastRoute", location?.pathname);
    } else {
      hasMounted.current = true;
    }
  }, [location.pathname]);

  // Resize Effect
  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth <= 575);

    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

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

  const handleCardSave = ({ article, isSaved }) => {
    const token = getToken();

    if (!isSaved) {
      api
        .saveArticle(article)
        .then((savedArticle) => {
          console.log(savedArticle);
          setSavedArticleItems((prev) => [savedArticle, ...prev]);
          console.log(savedArticleItems);
        })
        .catch(console.error);
    }
  };

  const handleArticleDelete = () => {};

  return (
    <LoginContext.Provider value={{ isLoggedIn }}>
      <CurrentUserContext.Provider value={{ currentUser }}>
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
                      onCardSave={handleCardSave}
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
              handleRegistration={handleRegistration}
            />

            <MenuModal
              isOpen={activeModal === "menu"}
              onClose={closeActiveModal}
              handleLoginClick={handleLoginClick}
            />
          </div>
        </SearchContext.Provider>
      </CurrentUserContext.Provider>
    </LoginContext.Provider>
  );
}

export default App;
