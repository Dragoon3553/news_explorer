// Component Import
import NewsCard from "./NewsCard";
import SearchForm from "./SearchForm";

// CSS Import
import "../blocks/main.css";

function Main() {
  return (
    <main className="main">
      <h2 className="main__title">What's going on in the world?</h2>
      <p className="main__subtitle">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <SearchForm />
      <section className="cards">
        <ul className="cards__list">
          <NewsCard />
        </ul>
      </section>
    </main>
  );
}

export default Main;
