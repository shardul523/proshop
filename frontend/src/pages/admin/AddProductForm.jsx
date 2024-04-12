import { useRef } from "react";
import { toast } from "react-hot-toast";

import Form from "@/components/common/Form";
import FormContainer from "@/components/common/FormContainer";
import FormInput from "@/components/common/FormInput";
import Button from "@/components/common/Button";
import FormTextarea from "@/components/common/FormTextarea";
import { useProductCreate } from "@/hooks/productsHooks";

function AddProductForm() {
  const nameRef = useRef();
  const priceRef = useRef();
  const brandRef = useRef();
  const stockRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const imageRef = useRef();

  const { createProduct, isPending } = useProductCreate();

  const onAddProductHandler = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const brand = brandRef.current.value;
    const category = categoryRef.current.value;
    const description = descriptionRef.current.value;
    const price = +priceRef.current.value;
    const countInStock = +stockRef.current.value;

    const image = imageRef.current.files[0];

    if (!name || !price || !brand || !category || !description || !countInStock)
      return toast.error("None of the fields should be empty");

    console.log(name, price, brand, category, image, description, countInStock);

    const form = new FormData();

    form.set("name", name);
    form.set("brand", brand);
    form.set("category", category);
    form.set("price", price);
    form.set("description", description);
    form.set("countInStock", countInStock);
    form.set("product-image", image);

    createProduct(form);
  };

  return (
    <FormContainer
      formTitle={"Add New Product"}
      className={" max-w-xl mx-auto"}
    >
      <Form className={"mx-auto max-w-md"}>
        <FormInput label={"Name"} inputRef={nameRef} />
        <div className="grid grid-cols-2 gap-2">
          <FormInput type="number" label={"Price"} inputRef={priceRef} />
          <FormInput
            type="number"
            label={"Count In Stock"}
            inputRef={stockRef}
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <FormInput label={"Brand"} inputRef={brandRef} />
          <FormInput label={"Category"} inputRef={categoryRef} />
        </div>
        <FormTextarea label={"Description"} inputRef={descriptionRef} />
        <FormInput type="file" label={"Image"} inputRef={imageRef} />
        <div className="mt-3 flex justify-end">
          <Button disabled={isPending} onClick={onAddProductHandler}>
            Add Product
          </Button>
        </div>
      </Form>
    </FormContainer>
  );
}
export default AddProductForm;
