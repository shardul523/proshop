const variants = {
  default:
    "flex place-content-center gap-2 px-3 py-2 rounded text-secondary-100 bg-primary-500 hover:bg-primary-600 active:bg-primary-700",
  pill: "bg-primary-500 text-secondary-100 rounded-2xl p-1",
  pillDisabled: "bg-secondary-200 text-secondary-400 p-1 rounded-2xl",
  outline:
    "border border-primary-500 mt-5 px-3 py-2 rounded hover:bg-primary-600 hover:text-secondary-100",
  icon: "p-1 rounded bg-secondary-300 text-secondary-700 hover:bg-secondary-700 hover:text-secondary-300 active:p-0.5",
  neutral:
    "px-3 py-2 rounded text-secondary-700 bg-secondary-300 hover:bg-secondary-400 hover:text-secondary-800",
  "neutral-rounded":
    "text-secondary-600 bg-secondary-200 hover:bg-secondary-300 p-3 rounded-full",
};

function Button({ children, onClick, variant, disabled, ...props }) {
  return (
    <button
      className={variant ? variants[variant] : variants.default}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
export default Button;
