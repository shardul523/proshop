function Button({ children, ...props }) {
  return (
    <button
      className={
        "mt-5 px-3 py-2 rounded text-secondary-100 bg-primary-500 hover:bg-primary-600 active:bg-primary-700"
      }
      {...props}
    >
      {children}
    </button>
  );
}
export default Button;
