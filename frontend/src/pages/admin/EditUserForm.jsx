import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import FormRadioInput from "@/components/common/FormRadioInput";
import FormContainer from "@/components/common/FormContainer";
import Form from "@/components/common/Form";
import FormInput from "@/components/common/FormInput";
import Button from "@/components/common/Button";
import Loader from "@/components/ui/Loader";

import { useUserById } from "@/hooks/userHooks";

function EditUserForm() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();
  const confirmPassRef = useRef();
  const { userId } = useParams();
  const { user, isPending } = useUserById(userId);
  const [selectedOption, setSelectedOption] = useState();

  useEffect(() => setSelectedOption(user?.isAdmin ? "y" : "n"), [user]);

  if (isPending) return <Loader />;

  const { name, email } = user;

  return (
    <FormContainer formTitle={"Edit Product"} className={" max-w-xl mx-auto"}>
      <Form className={"mx-auto max-w-md"}>
        <FormInput label={"Name"} inputRef={nameRef} defaultValue={name} />
        <FormInput
          type="email"
          label={"Email"}
          inputRef={emailRef}
          defaultValue={email}
        />
        <FormInput type="password" label={"Password"} inputRef={passRef} />
        <FormInput
          type="password"
          label={"Confirm Password"}
          inputRef={confirmPassRef}
        />
        <div className="flex gap-10">
          <span>Is Admin?</span>
          <div className="flex gap-5">
            <FormRadioInput
              label={"Yes"}
              value={"y"}
              name={"isAdmin"}
              selectedOption={selectedOption}
              handleChange={() => setSelectedOption("y")}
            />
            <FormRadioInput
              label={"No"}
              value={"n"}
              name={"isAdmin"}
              selectedOption={selectedOption}
              handleChange={() => setSelectedOption("n")}
            />
          </div>
        </div>
        <div className="mt-3 flex justify-end">
          <Button disabled={isPending}>Edit User</Button>
        </div>
      </Form>
    </FormContainer>
  );
}
export default EditUserForm;
