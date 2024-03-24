import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

function ProductQtyInput({ qty, increment, decrement }) {
  return (
    <div className="flex items-center gap-4 text-lg px-3 py-[6px]">
      <button className=" hover:text-primary-400" onClick={decrement}>
        <FaMinusCircle />
      </button>
      <span>{qty}</span>
      <button className="hover:text-primary-400" onClick={increment}>
        <FaPlusCircle />
      </button>
    </div>
  );
}
export default ProductQtyInput;
