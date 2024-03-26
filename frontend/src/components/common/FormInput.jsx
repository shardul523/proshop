function FormInput({ label, inputRef, id, ...inputProps }) {
  return (
    <div className="space-y-1">
      <label htmlFor={id} className="text-xs">
        {label}
      </label>
      <input
        id={id}
        ref={inputRef}
        className="w-full py-1.5 px-3 rounded bg-secondary-100 outline-primary-600 border border-secondary-400"
        {...inputProps}
      />
    </div>
  );
}
export default FormInput;
