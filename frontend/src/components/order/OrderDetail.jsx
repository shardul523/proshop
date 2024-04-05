function OrderDetail({ detailField, children }) {
  return (
    <div className="my-6 space-y-4">
      <h3 className="text-2xl font-medium">{detailField}</h3>
      <div className="space-y-3">{children}</div>
    </div>
  );
}
export default OrderDetail;
