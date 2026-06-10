// CSS Import
import "../blocks/searchForm.css";

function SearchForm() {
  return (
    <section className="search">
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
          <button type="button" className="search-btn">
            Search
          </button>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
