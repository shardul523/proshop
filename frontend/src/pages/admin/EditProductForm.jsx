import { useParams, Navigate } from "react-router-dom";
import { useRef } from "react";

import Button from "@/components/common/Button";
import Form from "@/components/common/Form";
import FormContainer from "@/components/common/FormContainer";
import FormInput from "@/components/common/FormInput";
import FormTextarea from "@/components/common/FormTextarea";
import { useProduct, useProductUpdate } from "@/hooks/productsHooks";
import Loader from "@/components/ui/Loader";

function EditProductForm() {
  const nameRef = useRef();
  const priceRef = useRef();
  const brandRef = useRef();
  const stockRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const imageRef = useRef();
  const { productId } = useParams();
  const {
    product,
    isPending: isProductLoadPending,
    isError,
    isFetching,
  } = useProduct(productId);
  const { productUpdate, isPending: isProductUpdatePending } =
    useProductUpdate(productId);

  const isPending =
    isProductLoadPending || isProductUpdatePending || isFetching;

  const onEditFormHandler = (e) => {
    e.preventDefault();

    const form = new FormData();

    console.log(descriptionRef.current.value);
    form.set("name", nameRef.current.value);
    form.set("brand", brandRef.current.value);
    form.set("category", categoryRef.current.value);
    form.set("description", descriptionRef.current.value);
    form.set("price", +priceRef.current.value);
    form.set("countInStock", +stockRef.current.value);
    form.set("product-image", imageRef.current.files[0]);

    productUpdate(form);
  };

  if (isPending) return <Loader />;

  if (isError) return <Navigate to={"/admin/products"} />;

  return (
    <FormContainer formTitle={"Edit Product"} className={" max-w-xl mx-auto"}>
      <Form className={"mx-auto max-w-md"}>
        <FormInput
          label={"Name"}
          inputRef={nameRef}
          defaultValue={product.name}
        />
        <div className="grid grid-cols-2 gap-2">
          <FormInput
            type="number"
            label={"Price"}
            inputRef={priceRef}
            defaultValue={product.price}
          />
          <FormInput
            type="number"
            label={"Count In Stock"}
            inputRef={stockRef}
            defaultValue={product.countInStock}
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <FormInput
            label={"Brand"}
            inputRef={brandRef}
            defaultValue={product.brand}
          />
          <FormInput
            label={"Category"}
            inputRef={categoryRef}
            defaultValue={product.category}
          />
        </div>
        <FormTextarea
          label={"Description"}
          inputRef={descriptionRef}
          defaultValue={product.description}
        />
        <FormInput type="file" label={"Image"} inputRef={imageRef} />
        <div className="mt-3 flex justify-end">
          <Button disabled={isPending} onClick={onEditFormHandler}>
            Edit Product
          </Button>
        </div>
      </Form>
    </FormContainer>
  );
}
export default EditProductForm;
