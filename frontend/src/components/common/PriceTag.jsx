import { decimalFormatter } from "@/utils/index";

function PriceTag({ price }) {
  return <span>$ {decimalFormatter(price)}</span>;
}
export default PriceTag;
