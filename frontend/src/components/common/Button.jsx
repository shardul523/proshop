const variants = {
  default:
    "gap-2 px-3 py-2 rounded text-secondary-100 bg-primary-500 hover:bg-primary-600 active:bg-primary-700",
  pill: "bg-primary-500 text-secondary-100 rounded-2xl p-1 disabled:bg-primary-300",
  pillDisabled: "bg-secondary-200 text-secondary-400 p-1 rounded-2xl",
  outline:
    "border border-primary-500 px-3 py-2 rounded hover:bg-primary-600 hover:text-secondary-100",
  icon: "p-1 rounded bg-secondary-300 text-secondary-700 hover:bg-secondary-600 hover:text-secondary-300 active:bg-secondary-700",
  neutral:
    "px-3 py-2 rounded text-secondary-700 bg-secondary-300 hover:bg-secondary-400 hover:text-secondary-800",
  "neutral-rounded":
    "text-secondary-600 bg-secondary-100 hover:bg-secondary-200 p-3 rounded-full",
  "icon-danger":
    "p-1 rounded bg-red-400 text-white hover:bg-red-300 active:bg-red-200 disabled:bg-secondary-100",
  "paginate-link": "px-2 py-1 rounded hover:bg-secondary-300 hover:shadow-lg",
  "paginate-active-link": "bg-primary-500 text-secondary-50 rounded px-2 py-1",
};

function Button({ children, onClick, variant, disabled, className, ...props }) {
  return (
    <button
      className={`flex place-content-center items-center ${
        variant ? variants[variant] : variants.default
      } ${className}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
export default Button;
