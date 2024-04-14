import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import Button from "../common/Button";
import { useSearchParams } from "react-router-dom";

function Paginate({ pages }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activePage = searchParams.get("page") || 1;
  const activeSearch = searchParams.get("search") || "";

  if (pages?.length < 2) return;

  return (
    <nav
      aria-label="pagination"
      role="navigation"
      className="mx-auto flex w-full justify-center mt-5"
    >
      <ul className="flex flex-row items-center gap-3">
        <li>
          <Button
            role="nav-link"
            aria-label="Go to previous page"
            className="mr-5"
            variant={"paginate-link"}
            onClick={() =>
              setSearchParams({
                page: Math.max(activePage - 1, 1),
                search: activeSearch,
              })
            }
          >
            <IoChevronBackOutline />
            <span>Previous</span>
          </Button>
        </li>
        {pages.map((page) => {
          return (
            <li key={page}>
              <Button
                onClick={() => setSearchParams({ page, search: activeSearch })}
                className={""}
                variant={
                  activePage.toString() === page.toString()
                    ? "paginate-active-link"
                    : "paginate-link"
                }
              >
                {page}
              </Button>
            </li>
          );
        })}
        <li>
          <Button
            role="nav-link"
            className="ml-5"
            variant={"paginate-link"}
            onClick={() =>
              setSearchParams({
                page: Math.min(activePage + 1, pages.length),
                search: activeSearch,
              })
            }
          >
            <span>Next</span>
            <IoChevronForwardOutline />
          </Button>
        </li>
      </ul>
    </nav>
  );
}
export default Paginate;
