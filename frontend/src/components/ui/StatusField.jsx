const variants = {
  success: "bg-green-500 text-white",
  fail: "text-red-700 bg-red-300",
};

function StatusField({ value, status = "success" }) {
  return <span className={`rounded-lg p-1 ${variants[status]}`}>{value}</span>;
}
export default StatusField;
