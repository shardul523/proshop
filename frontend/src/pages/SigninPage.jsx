import { useRef } from "react";
import { Link, Navigate, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

import Button from "../components/common/Button";
import Loader from "../components/common/Loader";

import { useLogin, useProfile } from "../hooks";
import FormContainer from "../components/common/FormContainer";
import Form from "../components/common/Form";
import FormInput from "../components/common/FormInput";

function SigninPage() {
  const emailInputRef = useRef();
  const passInputRef = useRef();
  const { userLogin, status: loginStatus } = useLogin();

  const { isLoading } = useProfile();
  const auth = useSelector((state) => state.auth);
  const [searchParams] = useSearchParams();
  const isSubmitting = loginStatus === "pending";
  const redirect = searchParams.has("redirect")
    ? `/${searchParams.get("redirect")}`
    : "/";

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const email = emailInputRef.current.value;
    const password = passInputRef.current.value;

    userLogin({ email, password });
  };

  if (isLoading) return <Loader />;
  if (auth && auth.isLoggedIn) return <Navigate to={redirect} />;

  return (
    <FormContainer formTitle={"Sign In"}>
      <Form onSubmit={onSubmitHandler}>
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
        <Button disabled={isSubmitting}>Sign In</Button>
      </Form>
      <div className="mt-5 text-secondary-700">
        New Customer ? Register{" "}
        <Link
          className={"text-primary-500 hover:text-primary-600 hover:underline"}
          to={"/sign-up"}
        >
          here
        </Link>
      </div>
    </FormContainer>
  );
}
export default SigninPage;