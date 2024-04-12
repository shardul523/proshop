import BackButton from "./BackButton";

function FormContainer({ children, className, formTitle }) {
  return (
    <div className={`container ${className}`}>
      <div className="flex gap-3">
        <BackButton />
        <h2 className="text-3xl font-semibold">{formTitle}</h2>
      </div>
      {children}
    </div>
  );
}
export default FormContainer;
