// React Imports
import { useEffect, useRef, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import SavedPage from "./pages/SavedPage";

// Components
import Footer from "./components/Footer";

// Modals
import LoginModal from "./components/LoginModal";
import SignupModal from "./components/SignupModal";
import MenuModal from "./components/MenuModal";
import ConfirmationModal from "./components/ConfirmationModal";

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

  // Token
  const setToken = (token) => {
    const rawSession = localStorage.getItem(auth.TOKEN_KEY);
    const session = rawSession ? JSON.parse(rawSession) : {};

    localStorage.setItem(auth.TOKEN_KEY, JSON.stringify({ ...session, token }));
  };

  const getToken = () => {
    const rawSession = localStorage.getItem(auth.TOKEN_KEY);
    if (!rawSession) return null;

    try {
      return JSON.parse(rawSession).token;
    } catch (err) {
      console.error("Invalid auth session format", err);
      return null;
    }
  };

  const removeToken = () => {
    localStorage.removeItem(auth.TOKEN_KEY);
  };
  const removeSession = () => {
    localStorage.removeItem("session");
    localStorage.removeItem(auth.TOKEN_KEY);
  };

  // Local States
  const [articleItems, setArticleItems] = useState([]);
  const [savedArticleItems, setSavedArticleItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState("confirm");
  const [errorMessage, setErrorMessage] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(!!getToken());
  const [searchKeyword, setSearchKeyword] = useState("");
  const [currentUser, setCurrentUser] = useState({
    _id: "",
    username: "",
  });

  // Modal Open Handlers
  const handleLoginClick = () => setActiveModal("login");
  const handleRegistrationClick = () => setActiveModal("signup");
  const handleMenuClick = () => setActiveModal("menu");
  // const handleConfirmClick = () => setActiveModal("confirm");
  const closeActiveModal = () => setActiveModal("");

  const handleLogin = (inputValues) => {
    const { email, password } = inputValues;
    // If email or password are empty, return without sending a request
    if (!email || !password) {
      return;
    }

    auth
      .authorize(email, password)
      .then((res) => {
        setToken(res.token);
        return auth.checkToken(res.token);
      })
      .then((user) => {
        setCurrentUser({ _id: user.data._id, username: user.data.username });
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
      .register(newUserData)
      .then(() => {
        console.log(inputValues);
        setActiveModal("confirm");
        // return handleLogin(inputValues);
      })
      .catch(console.error);
  };

  const handleLogout = () => {
    removeToken();
    removeSession();
    closeActiveModal();
    navigate("/");
    setCurrentUser({ _id: "", username: "" });
    setIsLoggedIn(false);
  };

  const fetchArticles = (inputValues) => {
    const searchKeyword =
      inputValues.q.charAt(0).toUpperCase() + inputValues.q.slice(1);
    setSearchKeyword(searchKeyword);

    setIsLoading(true);

    searchArticles(inputValues, apiKey)
      .then((data) => {
        setArticleItems(data.articles);
        setIsLoading(false);
      })
      .catch((err) => {
        console.errror(err);
        setIsLoading(false);
      });
  };

  // Mount Effect
  useEffect(() => {
    const token = getToken();

    if (token) {
      auth
        .checkToken(token)
        .then((res) => {
          setCurrentUser({
            _id: res.data._id,
            username: res.data.username,
          });
          setIsLoggedIn(true);
          setIsLoading(false);
          const lastRoute = localStorage.getItem("lastRoute") || "/";
          navigate(lastRoute);
        })
        .catch((err) => {
          console.error(err);
          removeToken();
          setIsLoading(false);
          setIsLoggedIn(false);
          setCurrentUser({ _id: "", username: "" });
        });
    }

    if (!token) return;

    api
      .getItems()
      .then((data) => {
        setSavedArticleItems(data.reverse());
      })
      .catch((error) => {
        console.error("Failed to fetch articles:", error);
      });
  }, [navigate]);

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
    // eslint-disable-next-line react-hooks/set-state-in-effect
    closeActiveModal();
  }, [location.pathname]);

  const handleArticleDelete = (e, article) => {
    const token = getToken();

    if (!token) {
      console.error("No authentication token found");
      return;
    }

    api
      .deleteArticle(article._id)
      .then(() => {
        setSavedArticleItems((prev) =>
          prev.filter((item) => item._id !== article._id),
        );
      })
      .catch(console.error);
  };

  const handleSaveToggle = (e, article) => {
    const alreadySaved = savedArticleItems.find(
      (item) => item.url === article.url,
    );

    if (alreadySaved) {
      handleArticleDelete(alreadySaved);
      return;
    }

    api
      .saveArticle({
        ...article,
        keyword: searchKeyword,
      })
      .then((savedArticle) => {
        setSavedArticleItems((prev) => [...prev, savedArticle]);
      })
      .catch(console.error);
  };

  const handleArticleClick = (article) => {
    article.url
      ? window.open(article.url, "_blank", "noreferrer")
      : window.open(article.urlToImage, "_blank", "noreferrer");
  };

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
                      onCardSave={handleSaveToggle}
                      isLoading={isLoading}
                      handleLogout={handleLogout}
                      savedArticleItems={savedArticleItems}
                      onCardClick={handleArticleClick}
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
                      handleLogout={handleLogout}
                      savedArticleItems={savedArticleItems}
                      onDelete={handleArticleDelete}
                      onCardClick={handleArticleClick}
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
              handleLogin={handleLogin}
              errorMessage={errorMessage}
              isMobile={isMobile}
              setErrorMessage={setErrorMessage}
            />

            <SignupModal
              isOpen={activeModal === "signup"}
              onClose={closeActiveModal}
              handleLoginClick={handleLoginClick}
              handleRegistration={handleRegistration}
            />

            <ConfirmationModal
              isOpen={activeModal === "confirm"}
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
      </CurrentUserContext.Provider>
    </LoginContext.Provider>
  );
}

export default App;
