import "../../styles/components/search.scss";

const SearchInput = () => {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search for anything"
      />
      <button className="search-button">
        <img src="/icons/search.svg" alt="search icon" />
      </button>
    </div>
  );
};

export default SearchInput;
