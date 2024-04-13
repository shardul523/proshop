import { useParams } from "react-router-dom";

import Container from "../components/common/Container";
import Loader from "../components/ui/Loader";
import BackButton from "@/components/common/BackButton";
import ProductDetails from "../components/products/ProductDetails";
import ProductReviewSection from "../components/products/ProductReviewSection";

import { useProduct } from "../hooks/productsHooks";
import Divider from "../components/common/Divider";

function ProductPage() {
  const { productId } = useParams();
  const { product, isPending } = useProduct(productId);

  if (isPending) return <Loader />;

  if (!product) return <p>No Product FOund</p>;

  return (
    <Container>
      <BackButton />
      <ProductDetails product={product} />
      <Divider />
      <ProductReviewSection />
    </Container>
  );
}
export default ProductPage;
