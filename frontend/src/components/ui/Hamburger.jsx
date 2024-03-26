function Hamburger({ isOpen, toggleOpen }) {
  return (
    <div
      className={`hamburger ${isOpen ? "open" : ""} sm:hidden`}
      onClick={toggleOpen}
    >
      <span className={`bar bg-slate-200`}></span>
      <span className={`bar bg-slate-200`}></span>
      <span className={`bar bg-slate-200`}></span>
    </div>
  );
}

export default Hamburger;
