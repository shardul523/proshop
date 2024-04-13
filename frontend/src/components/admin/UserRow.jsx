import { Link } from "react-router-dom";

import TableRow from "../common/TableRow";
import Td from "../common/Td";
import StatusIcon from "../ui/StatusIcon";
import UserControlBtns from "./UserControlBtns";

function UserRow({ user }) {
  const { _id: userId, name, email, isAdmin } = user;

  return (
    <TableRow>
      <Td>{userId}</Td>
      <Td>{name}</Td>
      <Td>
        <Link
          className="hover:underline underline-offset-2"
          to={`mailto:${email}`}
        >
          {email}
        </Link>
      </Td>
      <Td>
        <StatusIcon status={isAdmin ? "success" : "fail"} />
      </Td>
      <Td>
        <UserControlBtns userId={userId} />
      </Td>
    </TableRow>
  );
}
export default UserRow;
