function Form({ onSubmit, children, className }) {
  return (
    <form
      className={`mt-5 flex flex-col gap-2 ${className}`}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
}
export default Form;
