import { useRef } from "react";
import { Link, useSearchParams, Navigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";

import Button from "../components/common/Button";
import Form from "../components/common/Form";
import FormContainer from "../components/common/FormContainer";
import FormInput from "../components/common/FormInput";
import { useSignup, useProfile } from "../hooks";
import Loader from "../components/common/Loader";

function SignupPage() {
  const emailInputRef = useRef();
  const nameInputRef = useRef();
  const passInputRef = useRef();
  const confirmPassInputRef = useRef();
  const { userSignup, status } = useSignup();

  const isCreating = status === "pending";

  const { isLoading } = useProfile();
  const auth = useSelector((state) => state.auth);
  const [searchParams] = useSearchParams();
  const redirect = searchParams.has("redirect")
    ? `/${searchParams.get("redirect")}`
    : "/";

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const email = emailInputRef.current.value;
    const name = nameInputRef.current.value;
    const password = passInputRef.current.value;
    const confirmPassword = confirmPassInputRef.current.value;

    if (!email || !name || !password || !confirmPassword)
      return toast.error("Each of the fields must be specified");

    if (password !== confirmPassword)
      return toast.error("Passwords do not match");

    userSignup({ email, name, password });
  };

  if (isLoading) return <Loader />;
  if (auth && auth.isLoggedIn) return <Navigate to={redirect} />;

  return (
    <FormContainer formTitle={"Sign Up"}>
      <Form onSubmit={onSubmitHandler}>
        <FormInput
          label={"Name"}
          inputRef={nameInputRef}
          required
          placeholder={"Enter name"}
        />
        <FormInput
          label={"Email Address"}
          inputRef={emailInputRef}
          required
          placeholder={"Enter email"}
          type="email"
        />
        <FormInput
          label={"Password"}
          inputRef={passInputRef}
          required
          placeholder={"Enter password"}
          type="password"
        />
        <FormInput
          label={"Confirm Password"}
          inputRef={confirmPassInputRef}
          required
          placeholder={"Confirm password"}
          type="password"
        />
        <Button disabled={isCreating}>Sign Up</Button>
      </Form>
      <div className="mt-5 text-secondary-700">
        Already registered ? Sign in{" "}
        <Link
          className={"text-primary-500 hover:text-primary-600 hover:underline"}
          to={"/sign-in"}
        >
          here
        </Link>
      </div>
    </FormContainer>
  );
}
export default SignupPage;
