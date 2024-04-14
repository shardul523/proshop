import { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";

function SearchBox({ mobileOnly }) {
  const inputRef = useRef();
  const [, setSearchParams] = useSearchParams();

  const onSearchHandler = (e) => {
    e.preventDefault();
    setSearchParams({ search: inputRef.current.value, page: 1 });
  };

  return (
    <form
      onSubmit={onSearchHandler}
      role="searchbox"
      className={`${
        mobileOnly ? "flex md:hidden" : "hidden md:flex"
      } flex-1 max-w-screen-sm bg-secondary-100 rounded-3xl`}
    >
      <input
        ref={inputRef}
        type="text"
        role="search"
        className="flex-1 px-5 py-1.5 focus:outline-primary-300 text-primary-700 rounded-3xl bg-transparent text-sm"
      />
      <button
        type="submit"
        className="rounded-3xl px-2 py-1.5 text-primary-600"
      >
        <FaSearch />
      </button>
    </form>
  );
}

export default SearchBox;
