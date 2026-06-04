import "../blocks/main.css";

function Main() {
  return (
    <main className="main">
      <h2 className="main__title">What's going on in the world?</h2>
      <p className="main__subtitle">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <form
        className="search"
        id="search-form"
        action="/search-results"
        method="get"
      >
        <div className="search__container">
          <input
            className="search__input"
            type="search"
            id="search-input"
            name="q"
            placeholder="Enter topic"
          />
          <button className="search-btn">Search</button>
        </div>
      </form>
    </main>
  );
}

export default Main;
