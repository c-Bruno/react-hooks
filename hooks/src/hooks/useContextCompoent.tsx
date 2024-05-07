import { useState } from "react";
import { Dashboard } from "../components/Dashboard";
import { DashboardContext } from "../utils/context";

export interface User {
  isSubscribed: boolean;
  name: string;
}

/*
  ----- UseContext -----
  UseContext is a hook that it’s used to share state across components with out provide props.  
  It is kinda of a little Redux store for react components.


*/
export const UseContextComponent = () => {
  const [user] = useState<User>({
    isSubscribed: true,
    name: "John",
  });

  return (
    <div>
      <DashboardContext.Provider value={user}>
        <Dashboard />
      </DashboardContext.Provider>
    </div>
  );
};
