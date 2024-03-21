function Navbar({ children, isOpen }) {
  return (
    <nav
      className={`${
        !isOpen ? "hidden" : ""
      } transition-all ease-in-out sm:flex items-center`}
    >
      {children}
    </nav>
  );
}

export default Navbar;
