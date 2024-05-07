import { useUserContext } from "../utils/context";

interface ProfileProps {}
// eslint-disable-next-line no-empty-pattern
export const Profile = ({}: ProfileProps) => {
  const user =  useUserContext();

  return (
    <div>
      <div>{user.name}</div>
    </div>
  );
};
