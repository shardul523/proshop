import UserProfileEdit from "../components/user/UserProfileEdit";
import Loader from "../components/ui/Loader";

import { useProfile } from "../hooks";
import Container from "../components/common/Container";
import UserOrdersList from "../components/user/UserOrdersList";

function ProfilePage() {
  const { user, isLoading } = useProfile();

  if (isLoading) return <Loader />;

  return (
    <Container>
      <div className="grid grid-cols-4 mx-10">
        <UserProfileEdit user={user} />
        <div className="col-span-3">
          <UserOrdersList />
        </div>
      </div>
    </Container>
  );
}
export default ProfilePage;
