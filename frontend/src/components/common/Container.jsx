function Container({ children, className }) {
  return (
    <div className={`mx-auto px-10 max-w-screen-xl ${className}`}>
      {children}
    </div>
  );
}
export default Container;
