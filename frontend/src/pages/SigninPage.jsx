import { useRef } from "react";
import { toast } from "react-hot-toast";
import { Navigate, useSearchParams } from "react-router-dom";

import Button from "../components/common/Button";
import Loader from "../components/common/Loader";

import { useLogin } from "../hooks";

function SigninPage() {
  const emailInputRef = useRef();
  const passInputRef = useRef();
  const { userLogin } = useLogin();

  console.log(document.cookie.jwt);

  const redirect = "/";

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const email = emailInputRef.current.value;
    const password = passInputRef.current.value;

    userLogin(
      { email, password },
      {
        onSuccess: () => {
          toast.success("User logged in successfully");
        },
        onError: () => {
          toast.error("User could not be logged in");
        },
      }
    );
  };

  return (
    <div className="container max-w-md mx-auto">
      <h2 className="text-3xl font-semibold">Sign In</h2>
      <form className="mt-5 flex flex-col gap-4" onSubmit={onSubmitHandler}>
        <div className="space-y-1">
          <label className="text-xs">Email Address</label>
          <input
            ref={emailInputRef}
            type="email"
            placeholder="Enter email"
            className="w-full py-1.5 px-3 rounded bg-secondary-100 outline-primary-600 border border-secondary-400"
            required
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs">Password</label>
          <input
            ref={passInputRef}
            type="password"
            placeholder="Enter password"
            className="w-full py-1.5 px-3 rounded bg-secondary-100 outline-primary-600 border border-secondary-400"
            required
          />
        </div>
        <Button type="submit">Sign In</Button>
      </form>
    </div>
  );
}
export default SigninPage;
