function ProductStat({ label, value }) {
  return (
    <div className="flex justify-between px-4">
      <span>{label}:</span>
      <span className="font-semibold">{value}</span>
    </div>
  );
}
export default ProductStat;
