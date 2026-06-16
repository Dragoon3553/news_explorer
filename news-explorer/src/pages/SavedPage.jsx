import Header from "../components/Header";
import Main from "../components/Main";
import SavedArticles from "../components/SavedArticles";

function SavedPage({ handleMenuClick, isMobile, isModalOpen }) {
  return (
    <div className="page-saved">
      <Header
        handleMenuClick={handleMenuClick}
        isMobile={isMobile}
        isModalOpen={isModalOpen}
        variant="saved"
      />
      <Main>
        <SavedArticles />
      </Main>
    </div>
  );
}

export default SavedPage;
