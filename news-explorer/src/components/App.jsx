// Component Imports
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import "../blocks/page.css";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header></Header>
        <Main></Main>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
