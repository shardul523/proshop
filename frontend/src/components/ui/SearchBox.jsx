import { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";

function SearchBox() {
  const inputRef = useRef();
  const [, setSearchParams] = useSearchParams();

  const onSearchHandler = (e) => {
    e.preventDefault();
    setSearchParams({ search: inputRef.current.value, page: 1 });
    console.log(inputRef.current.value);
  };

  return (
    <form
      onSubmit={onSearchHandler}
      role="searchbox"
      className=" hidden sm:flex flex-1 max-w-screen-sm bg-secondary-100 rounded-2xl"
    >
      <input
        ref={inputRef}
        type="text"
        role="search"
        className="flex-1 px-5 py-1 focus:outline-primary-300 text-primary-700 rounded-2xl bg-transparent"
      />
      <button type="submit" className="rounded-2xl px-2 py-1 text-primary-600">
        <FaSearch />
      </button>
    </form>
  );
}

export default SearchBox;
