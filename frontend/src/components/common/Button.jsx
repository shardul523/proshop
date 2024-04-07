const variants = {
  default:
    "mt-5 px-3 py-2 rounded text-secondary-100 bg-primary-500 hover:bg-primary-600 active:bg-primary-700",
  pill: "bg-primary-500 text-secondary-100 rounded-2xl p-1",
  pillDisabled: "bg-secondary-200 text-secondary-400 p-1 rounded-2xl",
  outline:
    "border border-primary-500 mt-5 px-3 py-2 rounded hover:bg-primary-600 hover:text-secondary-100",
};

function Button({ children, variant, ...props }) {
  return (
    <button
      className={variant ? variants[variant] : variants.default}
      {...props}
    >
      {children}
    </button>
  );
}
export default Button;
