function Button({ children, className, ...props }) {
  return (
    <button
      className={`${className} px-3 py-2 rounded text-slate-100 bg-slate-500 hover:bg-slate-400`}
      {...props}
    >
      {children}
    </button>
  );
}
export default Button;
