import About from "../components/About";
import Header from "../components/Header";
import Main from "../components/Main";

function HomePage({
  handleLoginClick,
  handleMenuClick,
  isMobile,
  isModalOpen,
  fetchArticles,
  articleItems,
  isLoading,
}) {
  return (
    <>
      <Header
        handleLoginClick={handleLoginClick}
        handleMenuClick={handleMenuClick}
        isMobile={isMobile}
        isModalOpen={isModalOpen}
        fetchArticles={fetchArticles}
        variant="home"
      />
      <Main articleItems={articleItems} isLoading={isLoading} />
      <About />
    </>
  );
}

export default HomePage;
