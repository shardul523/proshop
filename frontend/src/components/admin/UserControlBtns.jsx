import { FaEdit, FaTrashAlt } from "react-icons/fa";

import Button from "../common/Button";
import LinkButton from "../common/LinkButton";

import { useUserDelete } from "@/hooks/userHooks";

function UserControlBtns({ userId }) {
  const { userDelete, isPending } = useUserDelete(userId);

  const onDeleteHandler = () => {
    const res = confirm("Are you sure you want to delete this user?");
    if (res) userDelete();
  };

  return (
    <div className="flex gap-3">
      <Button
        variant={"icon-danger"}
        disabled={isPending}
        onClick={onDeleteHandler}
      >
        <FaTrashAlt />
      </Button>
      <LinkButton to={`${userId}/edit`} variant={"icon"} disabled={isPending}>
        <FaEdit />
      </LinkButton>
    </div>
  );
}
export default UserControlBtns;
