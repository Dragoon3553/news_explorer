import Header from "../components/Header";
import Main from "../components/Main";
import SavedArticles from "../components/SavedArticles";

function SavedPage({
  handleMenuClick,
  isMobile,
  isModalOpen,
  handleLogout,
  savedArticleItems,
  onDelete,
}) {
  return (
    <div className="page-saved">
      <Header
        handleMenuClick={handleMenuClick}
        isMobile={isMobile}
        isModalOpen={isModalOpen}
        handleLogout={handleLogout}
        savedArticleItems={savedArticleItems}
        variant="saved"
      />
      <Main>
        <SavedArticles
          savedArticleItems={savedArticleItems}
          onDelete={onDelete}
          variant="saved"
        />
      </Main>
    </div>
  );
}

export default SavedPage;
