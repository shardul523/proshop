function FormInput({ label, inputRef, defaultValue, id, ...inputProps }) {
  return (
    <div className="space-y-1">
      <label htmlFor={id} className="text-xs">
        {label}
      </label>
      <input
        id={id}
        ref={inputRef}
        className="w-full py-1.5 px-3 rounded bg-secondary-50 outline-primary-600 border border-secondary-400"
        defaultValue={defaultValue}
        {...inputProps}
      />
    </div>
  );
}
export default FormInput;
