// Component Import
import NewsCard from "./NewsCard";

// CSS Import
import "../blocks/main.css";

function Main() {
  return (
    <main className="main">
      <section className="cards">
        <h2 className="cards__title">Search results</h2>
        <ul className="cards__list">
          <NewsCard />
        </ul>
      </section>
    </main>
  );
}

export default Main;
