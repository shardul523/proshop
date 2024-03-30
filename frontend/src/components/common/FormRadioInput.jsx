function FormRadioInput({
  label,
  name,
  value,
  handleChange,
  selectedOption,
  props,
}) {
  return (
    <div className="flex items-center">
      <input
        type="radio"
        id={value}
        name={name}
        className="w-4 h-4 focus:ring-primary-500 focus:ring-2"
        value={value}
        checked={selectedOption === value}
        onChange={handleChange}
        {...props}
      />
      <label className="ms-2 font-medium text-secondary-900" htmlFor={value}>
        {label}
      </label>
    </div>
  );
}
export default FormRadioInput;
