function EditableInput({ edit, field, value, onChange }) {
  return (
    <div className="flex flex-col my-4 gap-2">
      <label className="font-medium" htmlFor={field}>
        {field}
      </label>
      {edit && (
        <input
          className="px-2 py-1 rounded bg-secondary-100 outline-primary-600 border border-secondary-400"
          value={value}
          onChange={onChange}
        />
      )}
      {!edit && <span className="px-2 py-1">{value}</span>}
    </div>
  );
}
export default EditableInput;
