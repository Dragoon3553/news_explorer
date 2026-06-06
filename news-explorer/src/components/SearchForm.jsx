import "../blocks/searchForm.css";

function SearchForm() {
  return (
    <section className="search">
      <h2 className="search__title">What's going on in the world?</h2>
      <p className="search__subtitle">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <form
        className="search__form"
        action="/search-results"
        id="search-form"
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
    </section>
  );
}

export default SearchForm;
