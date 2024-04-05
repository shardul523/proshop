function OrderDetailField({ field, value }) {
  return (
    <div className="space-x-2">
      <span className="font-medium">{field}:</span>
      <span>{value}</span>
    </div>
  );
}
export default OrderDetailField;
