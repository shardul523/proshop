import { FaTrashAlt } from "react-icons/fa";
import Button from "../common/Button";
import { useProductDelete } from "../../hooks/productsHooks";

function ProductDeleteButton({ productId }) {
  const { productDelete, isPending } = useProductDelete(productId);

  return (
    <Button variant={"icon"} onClick={productDelete} disabled={isPending}>
      <FaTrashAlt />
    </Button>
  );
}
export default ProductDeleteButton;
