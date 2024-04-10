function StatField({ label, value }) {
  return (
    <div className="flex justify-between px-4 items-center">
      <span>{label}:</span>
      <span className="font-semibold">{value}</span>
    </div>
  );
}
export default StatField;
