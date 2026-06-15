import Header from "../components/Header";
import SavedArticles from "../components/SavedArticles";

function SavedPage({ handleMenuClick, isMobile, isModalOpen }) {
  return (
    <>
      <Header
        handleMenuClick={handleMenuClick}
        isMobile={isMobile}
        isModalOpen={isModalOpen}
        variant="saved"
      />
      <SavedArticles />
    </>
  );
}

export default SavedPage;
