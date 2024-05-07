import { Profile } from "./Profile";
import { Sidebar } from "./Sidebar";

interface DashboardProps {}
// eslint-disable-next-line no-empty-pattern
export const Dashboard = ({}: DashboardProps) => {
  return (
    <div>
      <Sidebar />
      <Profile />
    </div>
  );
};
