function Navbar({ children, isOpen }) {
  return (
    <nav className={`${!isOpen ? "hidden" : ""} sm:flex items-center`}>
      {children}
    </nav>
  );
}

export default Navbar;
