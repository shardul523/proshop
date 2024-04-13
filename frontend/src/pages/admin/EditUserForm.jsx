import { useRef } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

import FormContainer from "@/components/common/FormContainer";
import Form from "@/components/common/Form";
import FormInput from "@/components/common/FormInput";
import Button from "@/components/common/Button";
import Loader from "@/components/ui/Loader";

import { useUserById, useUpdateUserById } from "@/hooks/userHooks";

function EditUserForm() {
  const emailRef = useRef();
  const passRef = useRef();
  const confirmPassRef = useRef();
  const adminRef = useRef();
  const { userId } = useParams();
  const { user, isPending: isUserLoading, isFetching } = useUserById(userId);
  const { updateUser, isPending: isUserUpdating } = useUpdateUserById(userId);

  const onEditHandler = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passRef.current.value;
    const confirmPassword = confirmPassRef.current.value;
    const isAdmin = adminRef.current.checked;

    if (!email) return toast.error("Name and email should be empty!");

    if (password !== confirmPassword)
      return toast.error("Password fields do not match");

    updateUser({ email, password, isAdmin });
  };

  const isPending = isUserLoading || isUserUpdating || isFetching;

  if (isPending) return <Loader />;

  const { email, isAdmin } = user;

  return (
    <FormContainer
      formTitle={"Edit User Details"}
      className={" max-w-xl mx-auto"}
    >
      <Form className={"mx-auto max-w-md"}>
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
        <div className="flex gap-2 mt-2 mx-2">
          <input type="checkbox" defaultChecked={isAdmin} ref={adminRef} />
          <span>Is Admin?</span>
        </div>
        <div className="mt-3 flex justify-end">
          <Button disabled={isPending} onClick={onEditHandler}>
            Edit User
          </Button>
        </div>
      </Form>
    </FormContainer>
  );
}
export default EditUserForm;
