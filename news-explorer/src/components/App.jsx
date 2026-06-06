// React Imports
import { useState } from "react";

// Component Imports
import Header from "./Header";
import SearchForm from "./SearchForm";
import Main from "./Main";
import About from "./About";
import Footer from "./Footer";

// CSS Styles
import "../blocks/page.css";
import LoginContext from "../contexts/LoginContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <LoginContext.Provider value={{ isLoggedIn }}>
      <div className="page">
        <div className="page__content">
          <div className="page__hero">
            <Header />
            <Main />
          </div>
          <About />
          <Footer />
        </div>
      </div>
    </LoginContext.Provider>
  );
}

export default App;
