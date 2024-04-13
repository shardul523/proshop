import UserRow from "@/components/admin/UserRow";
import Table from "@/components/common/Table";
import TableBody from "@/components/common/TableBody";
import TableHeader from "@/components/common/TableHeader";
import Loader from "@/components/ui/Loader";

import { useAllUsers } from "@/hooks/userHooks";

function UsersList() {
  const { users, isPending } = useAllUsers();

  if (isPending) return <Loader />;

  return (
    <>
      <h2 className="text-3xl font-semibold my-5">Users</h2>
      <Table>
        <TableHeader headings={["id", "name", "email", "admin", ""]} />
        <TableBody>
          {users.map((user) => (
            <UserRow key={user._id} user={user} />
          ))}
        </TableBody>
      </Table>
    </>
  );
}
export default UsersList;
