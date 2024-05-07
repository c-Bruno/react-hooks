import { useUserContext } from "../utils/context";

interface SidebarProps {}

// eslint-disable-next-line no-empty-pattern
export const Sidebar = ({}: SidebarProps) => {
  const user = useUserContext();

  return (
    <div>
      <div>{user.name}</div>
      <div>{user.isSubscribed}</div>
    </div>
  );
};
