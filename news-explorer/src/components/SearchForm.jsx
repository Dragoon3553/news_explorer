import { useContext } from "react";

// Context Import
import SearchContext from "../contexts/SearchContext";

import { useFormWithValidation } from "../hooks/useFormWithValidation";

// CSS Import
import "../blocks/searchForm.css";

const fromDate = new Date();
fromDate.setDate(fromDate.getDate() - 7);

const toDate = new Date();

const defaultValues = {
  q: "",
  fromDate: fromDate,
  toDate: toDate,
};

function SearchForm({ fetchArticles }) {
  const { setHasSearched } = useContext(SearchContext);

  const { values, handleChange } = useFormWithValidation(defaultValues);

  function handleSubmit(e) {
    e.preventDefault();
    setHasSearched(true);
    fetchArticles(values);
  }

  return (
    <section className="search">
      <form
        className="search__form"
        action="/search-results"
        id="search-form"
        method="get"
        onSubmit={handleSubmit}
      >
        <div className="search__container">
          <input
            className="search__input"
            type="search"
            id="search-input"
            name="q"
            placeholder="Enter topic"
            value={values.q}
            onChange={handleChange}
          />
          <button type="submit" className="search-btn">
            Search
          </button>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
