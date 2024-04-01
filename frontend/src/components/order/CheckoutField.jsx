function CheckoutField({ value, field, justify = "start" }) {
  return (
    <div className={`flex justify-${justify} items-center gap-4 mt-5`}>
      <h2 className="text-lg font-semibold">{field}:</h2>
      <span className="text-sm">{value}</span>
    </div>
  );
}
export default CheckoutField;
