function FormTextarea({ label, inputRef, defaultValue }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={label} className="text-sm">
        {label}
      </label>
      <textarea
        id={label}
        rows={3}
        placeholder="Enter the description of the product"
        className="resize-none p-3 border border-secondary-400 bg-secondary-100 rounded overflow-auto focus:outline-primary-600 text-sm"
        ref={inputRef}
        defaultValue={defaultValue}
      />
    </div>
  );
}
export default FormTextarea;
