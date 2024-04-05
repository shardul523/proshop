import { Link } from "react-router-dom";
import { decimalFormatter } from "../../utils";

function OrderItemOverview({ orderItem }) {
  const { product, quantity, unitPrice } = orderItem;

  return (
    <div className="flex justify-between bg-white p-4 rounded border-b-2 border-b-secondary-200">
      <div className="flex items-center gap-2">
        <img
          className="size-14 rounded"
          src={product.image}
          alt={product.name}
        />
        <Link
          className="hover:underline underline-offset-2"
          to={`/products/${product._id}`}
        >
          {product.name}
        </Link>
      </div>
      <div className="flex items-center">
        {quantity} X {unitPrice} = {decimalFormatter(quantity * unitPrice)}
      </div>
    </div>
  );
}
export default OrderItemOverview;
