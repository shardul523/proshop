import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import Button from "../common/Button";
import { useSearchParams } from "react-router-dom";

function Paginate({ pages }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activePage = searchParams.get("page");

  return (
    <nav
      aria-label="pagination"
      role="navigation"
      className="mx-auto flex w-full justify-center"
    >
      <ul className="flex flex-row items-center gap-1">
        <li>
          <Button
            role="nav-link"
            aria-label="Go to previous page"
            className="mr-1.5"
            variant={"paginate-link"}
          >
            <IoChevronBackOutline />
            <span>Previous</span>
          </Button>
        </li>
        {pages.map((page) => {
          return (
            <li key={page}>
              <Button
                onClick={() => setSearchParams({ page: page + "" })}
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
          <Button role="nav-link" className="ml-1.5" variant={"paginate-link"}>
            <span>Next</span>
            <IoChevronForwardOutline />
          </Button>
        </li>
      </ul>
    </nav>
  );
}
export default Paginate;
