import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

import EditableInput from "../components/common/EditableInput";
import Button from "../components/common/Button";

import { useProfile } from "../hooks";
import { useUserUpdate } from "../hooks/userHooks";

function ProfilePage() {
  const { user, isLoading: isUserLoading } = useProfile();
  const { updateUser, isPending: isUpdatePending } = useUserUpdate();
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [pass, setPass] = useState();
  const [confirmPass, setConfirmPass] = useState();
  const [edit, setEdit] = useState(false);

  const isLoading = isUserLoading || isUpdatePending;

  useEffect(() => {
    setName(user?.name);
    setEmail(user?.email);
  }, [user?.name, user?.email]);

  const toggleEdit = () => {
    setEdit((prev) => !prev);
    setPass("");
    setConfirmPass("");
  };

  const onConfirm = () => {
    if (!name || !email)
      return toast.error("Name and email should not be empty!");

    if (pass && pass !== confirmPass)
      return toast.error("Passwords do not match!");

    updateUser({ name, email, password: pass });

    toggleEdit();
  };

  // if (isLoading) return <Loader />;

  return (
    <div className="grid grid-cols-4 mx-10">
      <div>
        <h3 className="text-2xl font-semibold">User Profile</h3>
        <div>
          <EditableInput
            field={"Name"}
            edit={edit}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <EditableInput
            field={"Email Address"}
            edit={edit}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {edit && (
            <>
              <EditableInput
                field={"Password"}
                edit
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
              <EditableInput
                field={"Confirm Password"}
                edit
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
              />
            </>
          )}
        </div>
        {!edit && (
          <Button disabled={isLoading} onClick={toggleEdit}>
            Edit
          </Button>
        )}
        {edit && (
          <div className="flex gap-2">
            <Button disabled={isLoading} onClick={toggleEdit}>
              Cancel
            </Button>
            <Button
              disabled={isLoading}
              variant={"outline"}
              onClick={onConfirm}
            >
              Confirm
            </Button>
          </div>
        )}
      </div>
      <div className="col-span-3"></div>
    </div>
  );
}
export default ProfilePage;
