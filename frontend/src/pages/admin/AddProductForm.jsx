import { useRef } from "react";

import Form from "@/components/common/Form";
import FormContainer from "@/components/common/FormContainer";
import FormInput from "@/components/common/FormInput";
import LinkButton from "@/components/common/LinkButton";
import Button from "@/components/common/Button";
import FormTextarea from "@/components/common/FormTextarea";

function AddProductForm() {
  const nameRef = useRef();
  const priceRef = useRef();
  const brandRef = useRef();
  const stockRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const imageRef = useRef();

  return (
    <>
      <LinkButton to={-1}>Go Back</LinkButton>
      <FormContainer formTitle={"Add New Product"}>
        <Form>
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
          <div className="mt-2">
            <Button>Add</Button>
          </div>
        </Form>
      </FormContainer>
    </>
  );
}
export default AddProductForm;
