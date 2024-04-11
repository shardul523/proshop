function FormContainer({ children, formTitle }) {
  return (
    <div className="container">
      <h2 className="text-3xl font-semibold">{formTitle}</h2>
      {children}
    </div>
  );
}
export default FormContainer;
