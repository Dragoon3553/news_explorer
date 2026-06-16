import Header from "../components/Header";
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
      <SavedArticles />
    </div>
  );
}

export default SavedPage;
