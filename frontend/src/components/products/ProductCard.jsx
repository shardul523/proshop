function ProductCard({ product }) {
  return (
    <div className=" flex flex-col max-w-56 bg-slate-100 px-4 py-3 rounded-md">
      <div className=" align-middle mb-4">
        <img className="h-40 w-48" src={product.image} />
      </div>
      <span className=" hover:underline mb-3">
        <a href="#" className="">
          {product.name}
        </a>
      </span>
      <span className="text-lg font-medium">${product.price}</span>
    </div>
  );
}

export default ProductCard;
