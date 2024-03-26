function Form({ onSubmit, children }) {
  return (
    <form className="mt-5 flex flex-col gap-2" onSubmit={onSubmit}>
      {children}
    </form>
  );
}
export default Form;
