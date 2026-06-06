// React Imports
import { useState } from "react";

// Component Imports
import Header from "./Header";
import SearchForm from "./SearchForm";
import Main from "./Main";
import About from "./About";
import Footer from "./Footer";

// Context Imports
import LoginContext from "../contexts/LoginContext";

// CSS Styles
import "../blocks/page.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <LoginContext.Provider value={{ isLoggedIn }}>
      <div className="page">
        <div className="page__content">
          <div className="page__hero">
            <Header />
            <SearchForm />
          </div>
          <Main />
          <About />
          <Footer />
        </div>
      </div>
    </LoginContext.Provider>
  );
}

export default App;
